const recipes = [
  {
    id: 1,
    name: 'Loaded Cauliflower Bake',
    photoUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-loaded-cauliflower-bake-horizontal-1-1535729326.png',
    ingredients: [
      {
        name: 'cauliflower',
        measurement: {
          amount: 2,
          unit: 'cup'
        },
        cutType: 'florets',
        label: null,
        steps: [1]
      },
      {
        name: 'garlic',
        measurement: {
          amount: 3,
          unit: 'clove'
        },
        cutType: 'minced',
        label: null,
        steps: [2]
      },
      {
        name: 'all purpose flour',
        measurement: {
          amount: 3,
          unit: 'tbs'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'whole milk',
        measurement: {
          amount: 2,
          unit: 'cup'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'cream cheese',
        measurement: {
          amount: 2,
          unit: 'oz'
        },
        cutType: null,
        label: '2 oz. cream cheese, softened',
        steps: [2]
      },
      {
        name: 'shredded cheddar',
        measurement: {
          amount: 1.5,
          unit: 'cloves'
        },
        cutType: null,
        label: null,
        steps: [2, 3]
      },
      {
        name: 'Kosher salt',
        measurement: {
          amount: 1,
          unit: 'tsp'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'Black pepper',
        measurement: {
          amount: 1,
          unit: 'tsp'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'bacon',
        measurement: {
          amount: 6,
          unit: 'pieces'
        },
        cutType: null,
        label: '6 slices bacon, cooked and crumbled',
        steps: [3]
      },
      {
        name: 'green onions',
        measurement: {
          amount: 0.25,
          unit: 'cup'
        },
        cutType: 'sliced',
        label: null,
        steps: [3]
      }
    ],
    directions: [
      'Preheat oven to 350°. In a large pot of salted boiling water, blanch cauliflower, 3 minutes. Drain and squeeze cauliflower of water.',
      'Make cheese sauce: In a large skillet, melt butter. Add garlic and cook until fragrant, 1 minute, then add flour and stir until golden, 2 minutes. Add milk and bring to a low simmer, then add cream cheese, whisking until combined. Remove from heat and stir in 1 cup cheddar until melted, then season with salt and pepper. ',
      'In a 9”-x-13” dish, add drained cauliflower. Pour over cheese sauce and stir until combined. Stir in all but 1 tbs each cooked bacon and green onions until combined, then top with remaining cheddar, bacon, and green onions. ',
      'Bake until cauliflower is tender and cheese is melty, 30 minutes.'
    ],
    time: {
      prep: 15,
      cook: 30
    },
    servings: 8
  },
  {
    id: 2,
    name: 'Fluffy Almond Milk Pancakes',
    photoUrl:
      'https://www.giverecipe.com/wp-content/uploads/2018/04/almond-milk-pancakes-for-breakfast.jpg',
    ingredients: [
      {
        name: 'Black pepper',
        measurement: {
          amount: 1.5,
          unit: 'tbs'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'all-purpose flour',
        measurement: {
          amount: 1.5,
          unit: 'cup'
        },
        cutType: null,
        label: null,
        steps: [1]
      },
      {
        name: 'sugar',
        measurement: {
          amount: 2,
          unit: 'tbs'
        },
        cutType: null,
        label: null,
        steps: [1]
      },
      {
        name: 'baking powder',
        measurement: {
          amount: 2,
          unit: 'tsp'
        },
        cutType: null,
        label: null,
        steps: [1]
      },
      {
        name: 'salt',
        measurement: {
          amount: 1,
          unit: 'tsp'
        },
        cutType: null,
        label: null,
        steps: [1]
      },
      {
        name: 'almond milk',
        measurement: {
          amount: 1.25,
          unit: 'cup'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'sunflower oil',
        measurement: {
          amount: 3,
          unit: 'tbs'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'egg',
        measurement: {
          amount: 1,
          unit: 'egg'
        },
        cutType: null,
        label: null,
        steps: [2]
      },
      {
        name: 'sunflower oil',
        measurement: {
          amount: 1,
          unit: 'tbs'
        },
        cutType: null,
        label: null,
        steps: [3]
      },
      {
        name: 'strawberries',
        measurement: {
          amount: 2,
          unit: 'cup'
        },
        cutType: null,
        label: null,
        steps: [5]
      },
      {
        name: 'powder sugar',
        measurement: {
          amount: 0.5,
          unit: 'cup'
        },
        cutType: null,
        label: null,
        steps: [3]
      },
      {
        name: 'maple syrup',
        measurement: {
          amount: 0.25,
          unit: 'cup'
        },
        cutType: null,
        label: null,
        steps: [3]
      }
    ],
    directions: [
      'Whisk together the flour, sugar, baking powder and salt in a large bowl.',
      'Add milk, oil and egg. Whisk until smooth.',
      'Coat the pan with oil and heat it over medium heat.',
      'Pour the batter into the hot pan using an ice cream scoop or a 1/4 measuring cup. Let it cook until you start to see bubbles. Turn them over and continue cooking for 2 minutes. Transfer them on a plate and repeat the same steps with the remaining batter.',
      'Stack them on a plate. Sift powdered sugar over them and garnish with fresh strawberries.'
    ],
    time: {
      prep: 5,
      cook: 10
    },
    servings: 8
  }
];

const selectedRecipes = [1, 1, 1];

export { recipes, selectedRecipes };
