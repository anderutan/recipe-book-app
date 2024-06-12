import { v4 as uuidv4 } from 'uuid';

export interface RecipeData {
  id: string;
  title: string;
  description: string;
  video: string;
  img: string;
  prepTime: '0-15' | '16-30' | '31-45' | '46-60';
  cookTime: '0-15' | '16-30' | '31-45' | '46-60';
  serves: '1-2' | '3-4' | '5-6' | '6+';
  ingredients: string;
  instructions: string;
}

const database: RecipeData[] = [
  {
    id: uuidv4(),
    title: 'Salmon Prawn Risotto',
    description:
      'Made without wine, the risotto with shrimp and salmon needs a good amount of garlic and only a few other ingredients like risotto rice and vegetables. Comforting and delicious, your family will for sure love this one-pan dinner recipe.',
    video: 'https://www.youtube.com/watch?v=V2PMvBv52IE',
    img: 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',
    prepTime: '0-15',
    cookTime: '16-30',
    serves: '3-4',
    ingredients:
      '250 gr risotto arborio rice; 700 ml vegetable stock; 2 fennel bulbs; fresh dille; 200 gr shrimps; 100 gr smoked salmon; 1 shallot; olive oil',
    instructions:
      'Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.; Add the rice and stir to coat all the grains in the butter; Add the wine and cook gently stirring until it is absorbed; Gradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender; Season with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through; Serve scattered with the Parmesan and seasonal vegetables.; Grill the salmon and gently place onto the risotto with the prawns and asparagus',
  },
  {
    id: uuidv4(),
    title: 'Tuna Nicoise',
    description:
      'If anyone can make an amazing salad out of canned tuna, it’s the French. Nicoise Salad is probably the best known version, made with potato, beans, tomato, lettuce and olives, and finished with a lemon dressing.',
    video: 'https://www.youtube.com/watch?v=3_UAxkx0u6U',
    img: 'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg',
    prepTime: '0-15',
    cookTime: '0-15',
    serves: '1-2',
    ingredients:
      '450g waxy potatoes, unpeeled and thickly sliced; 2 tbsp plus 2 tsp olive oil; 4 eggs; 1 tbsp red wine vinegar; 2 tbsp caper, rinsed; 50g SunBlush or sundried tomato in oil, finely chopped; ½ red onion, thinly sliced; 100g baby spinach; 2 x 160g or 200g cans yellowfin tuna steak in springwater, drained;',
    instructions:
      'Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning. Tip onto a large baking tray, then roast for 20 mins, stirring halfway, until crisp, golden and cooked through.; Meanwhile, put eggs in a small pan of water, bring to the boil, then simmer for 8-10 mins, depending on how you like them cooked. Plunge into a bowl of cold water to cool for a few mins. Peel away the shells, then cut into halves.; In a large salad bowl, whisk together the remaining oil, red wine vinegar, capers and chopped tomatoes. Season, tip in the onion, spinach, tuna and potatoes, then gently toss together. Top with the eggs, then serve straight away.',
  },
  {
    id: uuidv4(),
    title: 'Kung Po Prawns',
    description:
      'Kung po or pao prawns is a wonderfully spicy Chinese takeaway favourite that fizzes with Szechuan pepper and is easy to cook at home! It’s also very quick, it takes around 10 minutes to prepare and all of that can be done in advance, then it takes less than 10 minutes to cook. There ain’t a delivery driver beating that!',
    video: 'https://www.youtube.com/watch?v=ysiuZm9FIxs',
    img: 'https://www.themealdb.com/images/media/meals/1525873040.jpg',
    prepTime: '16-30',
    cookTime: '0-15',
    serves: '5-6',
    ingredients:
      '1 tsp cornflour; 2 tbsp light soy sauce; 400g large raw prawns, frozen is fine, butterflied; 2 tbsp Chinese rice vinegar; 1 heaped tbsp tomato purée; 1 tsp caster sugar; 2 tbsp sunflower or groundnut oil; 85g unsalted, roasted peanuts; 6 small or 3 large whole dried chillies; 2 x 225g cans water chestnuts, drained; thumb-sized piece ginger, finely grated; 2 garlic cloves, finely chopped;',
    instructions:
      'Mix the cornflour and 1 tbsp soy sauce, toss in the prawns and set aside for 10 mins. Stir the vinegar, remaining soy sauce, tomato purée, sugar and 2 tbsp water together to make a sauce.; When you’re ready to cook, heat a large frying pan or wok until very hot, then add 1 tbsp oil. Fry the prawns until they are golden in places and have opened out– then tip them out of the pan.; Heat the remaining oil and add the peanuts, chillies and water chestnuts. Stir-fry for 2 mins or until the peanuts start to colour, then add the ginger and garlic and fry for 1 more min. Tip in the prawns and sauce and simmer for 2 mins until thickened slightly. Serve with rice.',
  },
  {
    id: uuidv4(),
    title: 'Chicken Handi',
    description:
      'Chicken handi is a simple and easy but incredibly delicious chicken curry made with boneless chicken and a few common ingredients. It has a thick and flavorful sauce that you can mop up with some warm pita or naan bread. You can also go the gluten-free route by pairing it with plain Basmati rice. The perfect chicken dinner for busy weeknights!',
    video: 'https://www.youtube.com/watch?v=IO0issT0Rmc',
    img: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
    prepTime: '0-15',
    cookTime: '31-45',
    serves: '3-4',
    ingredients:
      '1/2 kg boneless chicken cut in ½ inch cubes; ½ cup chopped onion; 4 - 5 whole green chilies sliced; 1 tbsp Garlic ginger paste; 1/4 cup oil + 1 tbsp ghee; 4 large tomatoes cut open in halves and de-seeded; 1 tbsp tomato paste optional; 1 + 1/2 tsp salt or to taste; 1/4 tsp turmeric haldi - not more than this; 1 tsp red chili powder; 1/2 tsp black pepper powder; 1/2 tsp white pepper powder; 1/2 tsp all spice powder garam masala; 1 tsp cumin powder zeera powder; 1 cup full fat yogurt (250 gm); 1 teasspoon dried fenugreek leaves kasuri methi; 2 tbsp unsweetened cream;',
    instructions:
      'Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.; To the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.; Then return the fried onion to the pot and stir. Add ginger paste and sauté well.; Now add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.; Next goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.; Add the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.; When the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.; Finally add the cream and give a final mix to combine everything well.; Sprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!',
  },
  {
    id: uuidv4(),
    title: 'Lamb and Lemon Souvlaki',
    description:
      'Lamb Souvlaki skewers are Greek kebabs with bold garlic-lemon-oregano flavour. Sensational flavours for lamb! The smell when they hit the grill are to-die-for. Make wraps with pita bread or plates with lemon rice or Greek lemon potatoes.',
    video: 'https://www.youtube.com/watch?v=krR4rhjR75Y',
    img: 'https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg',
    prepTime: '16-30',
    cookTime: '0-15',
    serves: '5-6',
    ingredients:
      '2 garlic cloves, finely chopped; 2 tsp sea salt; 4 tbsp olive oil; zest and juice 1 lemon; 1 tbsp finely chopped fresh dill; 700g lean lamb such as neck fillet or boneless leg, trimmed, then cut into large chunks; pitta bread or flatbread, to serve; ',
    instructions:
      'Pound the garlic with sea salt in a pestle and mortar (or use a small food processor), until the garlic forms a paste. Whisk together the oil, lemon juice, zest, dill and garlic. Mix in the lamb and combine well. Cover and marinate for at least 2 hrs or overnight in the fridge. If you’re going to use bamboo skewers, soak them in cold water.; If you’ve prepared the lamb the previous day, take it out of the fridge 30 mins before cooking. Thread the meat onto the soaked or metal skewers. Heat the grill to high or have a hot griddle pan or barbecue ready. Cook the skewers for 2-3 mins on each side, basting with the remaining marinade. Heat the pitta or flatbreads briefly, then stuff with the souvlaki. Add Greek salad.',
  },
];

export default database;
