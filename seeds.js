const mongoose = require ('mongoose');
const Recipe = require('./models/Recipe');
require('dotenv').config()

mongoose
    .connect (process.env.MONGO_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongo Connection Open!!!');
    })
    .catch((err) => {
        console.log(err);
    });

    const seedRecipes = [{
        name: 'Spaghetti',
        ingredients: ["1 pound ground beef", "2 cubes beef bouillion", "1 (8-ounce) can tomato sauce", "1 (6-ounce) can tomato paste", "black pepper to taste", "2 cups hot water", "2 teaspoons sugar white or brown", "1/2 teaspoon dried basil", "1/2 teaspoon dried oregano", "dash of garlic", "16 ounces spaghetti noodles"],
        steps: ["1. Brown the ground beef in a large skillet. (drain excess fat)", "2. Once cooked, throw in salt, pepper, tomato sauce and paste, water (with the bouillon cubes in it), sugar, basil, oregano, and garlic. Simmer on low for an hour.",  "3. A few minutes before the hour is done, cook box of spaghetti noodles as directed on package.",  "4. Once the noodles are cooked, drain and add to spaghetti sauce."],
        image: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg'
    }, {
        name: 'Alfredo',
        ingredients: ["1/2 Cup Butter", "1 & 1/2 Cups Heavy Whipping Cream", "2 Teaspoons Garlic Minced", "1/2 Teaspoon Italian Seasoning", "1/2 Teaspoon Salt", "1/4 Teaspoon Pepper", "2 Cups Freshly Grated Parmesan Cheese"],
        steps: ["1. Add the butter and cream to a large skillet.", "2. Simmer over low heat for 2 minutes.", "3. Whisk in the garlic, Italian seasoning, salt, and pepper for one minute.", "4. Whisk in the parmesan cheese until melted.", "5. Serve immediately."],
        image: 'https://images.pexels.com/photos/11220208/pexels-photo-11220208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Spinach Pizza',
        ingredients: ["1 ball pizza dough", "2 tablespoon olive oil divided", "5 oz. spinach", "3 garlic cloves minced", "1 cup ricotta cheese", "1 teaspoon oregano", "1/2 teaspoon red pepper flakes", "2 cups shredded mozzarella cheese"],
        steps: ["1. Preheat oven to 425° and line a large baking sheet with parchment paper. You can use a pizza stone instead if you have one.",  "2. Roll the pizza dough out into a circle or rectangle, then carefully transfer it to your lined baking sheet/pizza stone.", "3. Next, heat 1 tablespoon of olive oil in a large skillet, then add the spinach and garlic and sauté until spinach is wilted, about 2 minutes; transfer to a large bowl.",  "4. To that same bowl, add the ricotta and stir to combine.", "5. Drizzle the remaining oil over the pizza dough, then sprinkle the oregano and red pepper flakes on top. Spread the ricotta mixture over the pizza dough, then add the shredded mozzarella.", "6. Bake the pizza for 10-12 minutes or until the cheese is melted. Add more red pepper flakes to taste. Slice and enjoy!"],
        image: 'https://images.pexels.com/photos/4913349/pexels-photo-4913349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Enchiladas',
        ingredients: ["Tortillas", "Enchilada Sauce", "Shredded Chicken", "Shredded Cheese"],
        steps: ["1. Preheat oven to 350ºF.", "2. In a large bowl, combine cooked shredded chicken with 1/4 cup enchilada sauce.  Season with salt and pepper to taste.",  "3. Warm the tortillas in a microwave for 1 minute, flipping the them halfway through until they're warm and pliable.", "4. Assemble the enchiladas by filling each tortilla evenly with the shredded chicken mixture and a generous pinch of shredded cheese. Roll them tightly to close and place in a large baking dish seam side down.", "5. Pour the remaining enchilada sauce over the tortillas and then top them with the remaining cheese.",  "6. Bake for 20 minutes, until cheese is melted and bubbly. Serve."],
        image: 'https://images.pexels.com/photos/9213936/pexels-photo-9213936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Corn Chowder',
        ingredients: ["Corn", "Potatoes", "Carrot", "Celery", "Onion", "Bacon", "Chicken Broth", "Milk and Cream", "Cayenne Pepper"],
        steps: ["1. Sautee bacon in a dutch oven until crisps and renders fat. Remove bacon to a plate.",  "2. Sautee veggies (onion, celery, and carrot) in the bacon grease until softened.", "3. Add potatoes and corn kernels and season with salt, pepper, and cayenne pepper.",  "4. Add corn stock into the pot and simmer until potatoes are tender.",  "5. Serve in warm bowls garnished with bacon and chives."],
        image: 'https://images.pexels.com/photos/17379686/pexels-photo-17379686/free-photo-of-soup-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Chicken and Rice',
        ingredients: ["3 tablespoons olive oil", "2 medium onions", "about 8 ounces, peeled and sliced", "Salt and freshly ground black pepper", "1 chicken, cut up into serving pieces", "1 and 1/2 cups white rice", "Pinch saffron, optional", "Freshly minced parsley or cilantro for garnish", "Lemon or lime wedges"],
        steps: ["1. Set 3 cups of water to boil. Place olive oil in a large skillet that can be covered, and turn heat to medium-high. Add onions and a sprinkling of salt and pepper.",  "2. Cook, stirring occasionally, until onions soften and become translucent, 5 to 10 minutes. Remove skin from chicken.",  "3. Add rice to onions; stir until each grain glistens; sprinkle with saffron, and stir. Nestle chicken in rice, add a little more salt and pepper and pour in the boiling water. Turn heat to medium-low, and cover.",  "4. Cook 20 minutes, until all water is absorbed and chicken is cooked through. (You can keep this warm over a very low flame for another 15 minutes; it will retain its heat for 15 minutes beyond that.) Garnish and serve with lemon or lime."],
        image: 'https://images.pexels.com/photos/11743998/pexels-photo-11743998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Steak Salad',
        ingredients: ["1 Tablespoon season salt", "1 Teaspoon Pepper", "1 Tablespoon olive oil", "1 Head Romaine Lettuce, Chopped", "4 Cups Fresh Baby Arugula", "1 Bunch Radishes, Sliced", "1 Pint Grape Tomatoes, Sliced in half", "1 Cucumber, Halved lengthwise and sliced", "1/2 Red Onion, Sliced very thin", "1/4 Cup olive oil"," 1/4 Cup White Wine Vinegar", "1/2 Teaspoon salt", "1/4 Teaspoon Pepper", "1 Teaspoon Italian Seasoning", "4 ounces Crumbled Blue Cheese"],
        steps: ["1. Salt and Pepper both sides of steak and set aside to come to room temperature. Heat a large heavy pan or cast iron skillet to medium high heat and add 1 tablespoon olive oil. Sear steaks for approximately 4 minutes on each side for medium rare steak. Remove and set aside to rest.",  "2. In a large bowl combine lettuce, arugula, radishes, tomatoes, cucumbers, and red onion. Mix well. In a small bowl, whisk together olive oil, vinegar, salt, pepper, and Italian seasoning. Drizzle oil and vinegar mixture over salad mixture toss until well-coated.",  "3. Slice steak against the grain into 1/4 thick strips. Place on top of salad and sprinkle with blue cheese crumbles. Serve with crusty bread and enjoy your healthy dinner."],
        image: 'https://images.pexels.com/photos/4344576/pexels-photo-4344576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, {
        name: 'Chicken Taco',
        ingredients: ["2 teaspoons chili powder", "1 teaspoon ground cumin", "1 teaspoon smoked paprika", "1 teaspoon dried oregano", "1/2 teaspoon garlic powder", "Kosher salt and freshly ground black pepper, to taste", "1 and 1/2 pounds boneless skinless chicken thighs", "1 tablespoon canola oil", "12 mini flour tortillas, warmed", "1 cup pico de gallo", "homemade or store-bought", "1 avocado, halved, peeled, seeded and diced", "1/2 cup chopped fresh cilantro leaves", "1 lime, cut into wedges"],
        steps: ["1. In a small bowl, combine chili powder, cumin, paprika, oregano, garlic powder, 1 teaspoon salt and 1/2 teaspoon pepper. Season chicken with chili powder mixture.", "2. Heat canola oil in a large cast iron skillet over medium high heat. Working in batches, add chicken to the skillet in a single layer and cook until golden brown and cooked through, reaching an internal temperature of 165 degrees F, about 4-5 minutes per side. Let cool before dicing into bite-size pieces.", "3. Serve chicken in tortillas, topped with pico de gallo, avocado, cilantro and lime."],
        image: 'https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
 ];

 const seedDB = async () => {
    await Recipe.deleteMany({});
    await Recipe.insertMany(seedRecipes);
 };

 seedDB().then(() => {
    mongoose.connection.close()
 })