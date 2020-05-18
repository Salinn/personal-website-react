import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { get, post } from './request';

const useGetRecipes = props => {
  const { dispatch, type } = props;
  const [requested, setRequested] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const requestRecipes = () => setRequested(true);
  const url =
    'https://1twuds1wg0.execute-api.us-east-1.amazonaws.com/Prod/recipes';

  useEffect(() => {
    if (requested) {
      get({ url })
        .then(res => {
          const recipes = res.data.Items;
          dispatch({ type, recipes });
        })
        .catch(err => {
          console.log(err.message);
        });
      setLoading(false);
    }
  }, [requested, url, dispatch, type]);

  return {
    isLoading,
    requestRecipes
  };
};

const useGetRecipe = props => {
  const { id, dispatch, type } = props;
  const url = `https://1twuds1wg0.execute-api.us-east-1.amazonaws.com/Prod/recipes/${id}`;

  const [requested, setRequested] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const requestRecipes = () => setRequested(true);

  useEffect(() => {
    if (requested) {
      get({ url })
        .then(res => {
          const recipe = res.data.Item;
          dispatch({ type, recipe });
        })
        .catch(err => {
          console.log(err.message);
        });
      setLoading(false);
    }
  }, [requested, url, dispatch, type]);

  return {
    isLoading,
    requestRecipes
  };
};

const useCreateRecipe = props => {
  const { recipe } = props;
  const url = `https://1twuds1wg0.execute-api.us-east-1.amazonaws.com/Prod/recipes/new`;

  const history = useHistory();
  const [requested, setRequested] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const requestRecipes = () => setRequested(true);

  useEffect(() => {
    if (requested) {
      const data = { recipe };
      post({ url, data })
        .then(res => {
          const { id } = res.data;
          history.push(`/recipes/${id}`);
        })
        .catch(err => {
          console.log(err.message);
        });
      setLoading(false);
    }
  }, [requested, url, history, recipe]);

  return {
    isLoading,
    requestRecipes
  };
};

export { useGetRecipes, useGetRecipe, useCreateRecipe };
