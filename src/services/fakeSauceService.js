import * as typesAPI from "./fakeTypesService";

const sauces = [
  {
    _id: "134",
    name: "Ass in the Tub - Ghost Pepper Sauce",
    brand: "Ass in the Tub",
    ingredients:
      "Bhut Jolokia (Ghost) Peppers, Carrots, Papayas, Lime Juice, Vinegar, Onions, Passion Fruit, Citric Acid, Garlic, Salt, Xanthan Gum.",
    description:
      "Legend has it that the Ghost Pepper or Bhut Jolokia is named so because it is so hot that your spirit or ghost leaves your body when you eat it... Yeah Right!Well...Just ask Joe Chilihead about his encounter with this paranormal pod. He can attest to such a phenomenon. At over one million Scoville Units, Ass in the Tub Ghost Pepper Sauce is guaranteed to burn Twice!",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/519/ass-in-the-tub-ghost-pepper-sauce.jpg",
    avaRating: 5,
    country: "Colombia"
  },
  {
    _id: "149",
    name: "Volcanic Peppers - I-O Thor's Hammer: Super Hot Sauce",
    brand: "Volcanic Peppers",
    ingredients:
      "Hot Chile Peppers (Red And Chocolate Ghost, 7-Pot Douglah, Carolina Reaper, Moruga Scorpion, Jigsaw, And Thai), Vinegar, Garlic, Sugar, Salt, Spices, Xanthan Gum",
    description:
      "I-O (eye-oh) is the innermost moon of Jupiter with over 400 active volcanoes making it the most geologically active object in our solar system. Thor is an active volcano on I-O and Thor's Hammer is loaded with molten Super-Hot Chile Peppers that come together for a complete and lasting burn, bring the might of Thor's Hammer to your next meal but use in moderation or Loki may play tricks on you later.",
    pepperType:
      "Bhut Jolokia (Ghost Chili), Thai, Trinidad Scorpion, Carolina Reaper",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/504/volcanic-peppers-io-thors-hammer.jpg",
    avaRating: 4.7,
    country: "United States",
    reviews: [
      {
        rating_letter: "A+",
        aroma_review:
          "Surprisingly you do not get a whole lot of hot pepper smell from this but rather a sweet garlic aroma. Incredibly inviting smell given its loaded with so many peppers.",
        taste_review:
          "Sweet, garlic and fruity flavors are incorporated and then of course, all those peppers. Volcanic Pepper does a superb job creating this SUPER HOT sauce while delivering top notch flavor!",
        heat_review:
          "One of the very hottest non-extract sauces on the market today. At least when compared to the many I have either purchased or sampled.",
        label_review:
          "Art work is very cool. Norse mythology, Thor's Hammer! Love the company logo as well with the hot pepper incorporated in it and the volcano blowing its top! It all ties to volcano's on one of Jupiter's moons, I-O. ",
        looks_review:
          "I love the look of this sauce. A nice bold red with speckles of spices throughout. It's got a nice thick consistency but still pours well even after being refrigerated.",
        overall_review:
          "This sauce is a must for the serious chili-head. I keep a bottle in my fridge and when I run low, order more to keep the supply live! It is a bit on the pricey side but its well worth every penny!",
        aroma_rating: 4.9,
        taste_rating: 4.9,
        heat_rating: 4.9,
        label_rating: 4.5,
        looks_rating: 4.5,
        rating_score: 4.7
      }
    ]
  },
  {
    _id: "157",
    name: "Golden Toad - Xtinction Sauce Original Ghost Pepper",
    brand: "Golden Toad",
    ingredients:
      "Naga Jolokia, Red Habanero, Vinegar, Water, Salt, Honey, Garlic (Garlic, Citric Acid, Soybean Oil, Olive Oil), Black Pepper And Spices",
    description:
      "This sauce is made with the Ghost Pepper (Naga Jolokia) which averages over 1,000,000 Scoville Units. It's hot enough to spice up anything you desire!  Keep away from anything you are fond of, especially your eyes and your children. Not recommended for people with health conditions including heart and respiratory issues.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/494/golden_toad_xtinction_sauce_ghost_pepper.jpg",
    avaRating: 4.5,
    country: "United States"
  },
  {
    _id: "161",
    name: "Bravado Spice - Ghost Pepper & Blueberry",
    brand: "Bravado Spice Co.",
    ingredients:
      "Blueberry, White Wine Vinegar, Ghost Pepper, Sea Salt, Black Pepper ",
    description:
      "Dive into the deep end with fiery Ghost Peppers, cracked black pepper, and delicious blueberries. Itâ€™s time to step up your hot sauce game.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/488/bravado_ghost_pepper_blueberry_sauce.jpg",
    avaRating: 4.1,
    country: "United States"
  },
  {
    _id: "337",
    name: "Tropical Pepper Co. - Ghost Pepper Naga Jolokia",
    brand: "Tropical Pepper Co.",
    ingredients:
      "Naga Jolokia Peppers, Water, Salt, Acetic Acid, Garlic Pulp, Xanthan Gum",
    description:
      "This sauce will haunt your dreams with fevered nightmares of apocalyptic horsemen dragging your soul to the burning pits of Hell.  Made from the world's hottest pepper: the Naga Jolokia Ghost Pepper, never meant to cross human lips.  Turn back now while there's still time...and don't forget...you were warned.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/273/tropical_pepper_co_naga.jpg",
    avaRating: 4,
    country: "Costa Rica"
  },
  {
    _id: "406",
    name: "Rex's Pure Hell Hot Sauce",
    brand: "Rex Vice",
    ingredients:
      "Naga Jolokia Peppers, Water, Onion, Salt, Lemon Juice, Acetic Acid, Garlic Pulp, Xanthan Gum",
    description:
      "Rex's Pure Hell Hot Sauce is made with Naga Jolokia Peppers. It is just right for those that truly like it hot and flavorful.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/196/rexs_pure_hell_hot_sauce.jpg",
    avaRating: 4.9,
    country: "Costa Rica"
  },

  {
    _id: "412",
    name: "CaJohns - Reaper Sling Blade Hot Sauce",
    brand: "Cajohns Fiery Foods",
    ingredients:
      "Chile Peppers (Carolina Reaper, Bhut Jolokia), Apple Cider Vinegar, Distilled Vinegar, Tomato Paste, Lemon Juice, Onion, Garlic, Salt, Spices",
    description:
      "Ed Currie's Smokin Ed's Carolina Reaper is mixed with spices, lemon juice & tomato paste to form Sling Blade.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/190/reaper_sling_blade_hotsauce_bottle.jpg",
    avaRating: 4.4,
    country: "United States"
  },

  {
    _id: "524",
    name: "Melinda's - Naga Jolokia Hot Sauce",
    brand: "Melinda's",
    ingredients:
      "Naga Jolokia Pepper, Fresh Carrots, Papayas, Lime Juice, Vinegar, Onion, Passion Fruit Juice, Garlic, Salt 5 Oz",
    description:
      "Melinda's Naga Jolokia Hot Sauce will thrill the most seasoned hot sauce lover. Fire and flavor is what this sauce is all about!",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/59/melindas_naga_jolokia_lg.jpg",
    avaRating: 4.2,
    country: "United States"
  },
  {
    _id: "63",
    name: "Ghost Scream - Original Hot Sauce",
    brand: "Ghost Scream",
    ingredients:
      "Red Wine Vinegar, Fresh Onions, Water, Fresh Red Bell Peppers, Fresh Garlic, Fresh Ghost Peppers, Canola Oil, Salt, Natural Flavors, Spices, Xanthan Gum",
    description:
      "Ghost Scream Hot Sauce is a great everyday table sauce. We love it on sushi, seafood, eggs, tacos, pizza, soups and chili.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/591/ghost-scream-original-hot-sauce.jpg",
    avaRating: "",
    country: "United States"
  },
  {
    _id: "385",
    name: "Red Hawk Premium Peppers - B3 Hot Sauce (Berries & Banana)",
    brand: "Red Hawk Premium Peppers",
    ingredients:
      "Blueberries, Strawberries, Bananas, Carrots, Bhut Jolokia, Red Wine Vinegar, Grape Juice, Onion, Water, Brown Sugar",
    description:
      "This 3rd place winner at 2012 Zest Fest's Fiery Food Challenge is a thick, medium heat hot sauce that defies all expectations of a normal hot sauce by combining the Bhut Jolokia pepper with berries and bananas for an amazingly sweet yet savory sauce.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo: "https://hotsaucefever.com/images/layout/sauce_placeholder_v2.jpg",
    avaRating: 3.8,
    country: "United States"
  },
  {
    _id: "556",
    name: "Dave's Gourmet - Ghost Pepper Naga Jolokia Hot Sauce ",
    brand: "Dave's Gourmet",
    ingredients:
      "Ghost Pepper,Naga Jolokia, Hot Pepper Extract, Salt, Vegetable Oil, Roasted Garlic Pulp, Acetic Acid",
    description:
      "So Hot It's Spooky. Slightly hotter than the new hottest sauce in the universe (Ultimate Insanity). This sauce is distinctive for the sweet fruity flavor that sits over the top of the sauce's heat.",
    pepperType: "Bhut Jolokia (Ghost Chili)",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/26/daves_ghost_pepper_naga_jolokia_sauce.jpg",
    avaRating: 3.8,
    country: "United States"
  },
  {
    _id: "67",
    name: "Clark + Hopkins - Assam Pepper Sauce",
    brand: "Clark + Hopkins",
    ingredients:
      "Apple Cider Vinegar, Tomatoes, Onion, Garlic, Ginger, Water, 7-pot Primo Peppers, Ghost Peppers, Tamarind, Black Mustard Seed, Salt, Turbinado Sugar, Spices",
    description:
      "Assam is a state in north eastern India and home to the ghost pepper.  As a homage to the region, we created a fragrant sauce with a depth of flavor which perfectly balances the warmth of the ghost pepper and the added heat of the 7 pot primo.Pair this sauce with reduced coconut milk for an amazingly quick yet complex curry.",
    pepperType: "Bhut Jolokia (Ghost Chili), 7-Pot",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/587/clark-hopkins-assam-pepper-sauce.jpg",
    avaRating: "",
    country: "United States"
  },
  {
    _id: "107",
    name: "Culley's - Brutality Hot Sauce 13/10",
    brand: "Culley's",
    ingredients:
      "Reaper Pepper Mash (reaper Peppers And Vinegar),  Apple Cider Vinegar, Jolokia Pepper Mash (bhut Jolokia Peppers, Salt), Trinidad Scorpion Pepper Mash (Trinidad Scorpion Peppers, Salt), Coconut Palm Sugar, Passionfruit Concentrate, Onions, Roasted Red Peppers (roasted Red Peppers, Water, Salt, Citric Acid), Mango, Garlic, Lemon Juice, Chia Seed Powder ",
    description:
      "Culley's of New Zealand isn't known for doing anything in half measure, and their hottest sauce yet is no exception. Loaded with a mix of peppers that deliver a 1-2-3 punch, the real knockout comes from the flavor with the sweetness will melt into a trifecta of burning sensations from the tip of the tongue down to the top of your belly. Rounded out with a little roasted red pepper, this is a burner for the ages.",
    pepperType: "Bhut Jolokia (Ghost Chili), Trinidad Scorpion",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/546/culleys-brutality-hot-sauce.jpg",
    avaRating: "",
    country: "New Zealand"
  },
  {
    _id: "224",
    name: "Grim Reaper Foods - Evil One",
    brand: "Grim Reaper Foods",
    ingredients:
      "Red Pepper, Chilli (Scotch Bonnet 15.5%, Naga 3%), Cyder Vinegar, Onion, Orange, Lemon, Carrot, Sugar, Garlic, 1 Million SHU Chilli Extract, Salt",
    description:
      "Deathly Hot Chilli Sauce: Scotch Bonnet and Naga with a hint of citrus. Ideal for chicken, fish or to fire up a stir fry.",
    pepperType: "Bhut Jolokia (Ghost Chili), Scotch Bonnet",
    pepperTypeShort: { _id: "2", name: "Bhut Jolokia (Ghost Chili)" },
    photo:
      "https://hotsaucefever.com/images/sauces/405/grim_reaper_foods_evil_one.jpg",
    avaRating: "",
    country: "United Kingdom"
  },
  {
    _id: "243",
    name: "South Devon Chilli Farm - Scorpion Chilli Sauce",
    brand: "South Devon Chilli Farm",
    ingredients: "Fresh Scorpion Chillies, Spirit Vinegar, Salt.",
    description:
      "The Scorpion Chilli Sauce is one of our new range of Super chilli sauces. (launched in Dec 2015). Like its namesake this sauce will Sting you! Packaged in a pocket-sized bottle as you only need one drop for extreme heat. If you love Hot Chillies you'll love this sauce, just go steady when you try it until you know how much you need to reach the perfect heat.This extremely hot and fruity sauce is made with just fresh Scorpion chillies, spirit vinegar and salt. The Scorpion chilli has been measured at just over 1.4 million on the Scoville Heat Unit scale. If you still want something hotter have a look at the Reaper Chilli Sauce, the hottest sauce in this range.",
    pepperType: "Trinidad Scorpion",
    pepperTypeShort: { _id: "20", name: "Trinidad Scorpion" },
    photo:
      "https://hotsaucefever.com/images/sauces/379/south_devon_scorpion_chilli.jpg",
    avaRating: 4.2,
    country: "United Kingdom"
  },
  {
    _id: "336",
    name: "Tropical Pepper Co. - Scorpion Pepper Hot Sauce",
    brand: "Tropical Pepper Co.",
    ingredients: "Scorpion Peppers, Water, Salt, Acetic Acid, Xanthan Gum ",
    description:
      "Unforgiving as the scorpion's sting, this deadly pepper sauce will ignite the fire of your senses.",
    pepperType: "Trinidad Scorpion",
    pepperTypeShort: { _id: "20", name: "Trinidad Scorpion" },
    photo:
      "https://hotsaucefever.com/images/sauces/274/tropical_pepper_scorpion.jpg",
    avaRating: 4,
    country: "Costa Rica"
  },
  {
    _id: "55",
    name: "Grim Reaper Foods - Mort Sauce",
    brand: "Grim Reaper Foods",
    ingredients:
      "Plum Tomatoes, Scorpion Chillies, Red Wine Vinegar, Shallots, Garlic, Sugar, Tomato Puree, Salt, Rapeseed Oil",
    description:
      "A limited edition Scorpion chilli sauce, produced yearly in numbered and signed bottles. Sharp and savory.",
    pepperType: "Trinidad Scorpion",
    pepperTypeShort: { _id: "20", name: "Trinidad Scorpion" },
    photo:
      "https://hotsaucefever.com/images/sauces/599/grim-reaper-foods-mort-sauce.jpg",
    avaRating: "",
    country: "United Kingdom"
  },
  {
    _id: "425",
    name: "King Scorpion - Yellow Moruga Scorpion Hot Sauce",
    brand: "King Scorpion",
    ingredients: "Yellow Moruga Scorpion Peppers , Vinegars , Lime ",
    description:
      "Yellow Moruga Scorpion Peppers sauce with a sweet vinegar flavor, extremely hot.",
    pepperType: "Trinidad Scorpion",
    pepperTypeShort: { _id: "20", name: "Trinidad Scorpion" },
    photo: "https://hotsaucefever.com/images/layout/sauce_placeholder_v2.jpg",
    avaRating: "",
    country: "United States"
  },
  {
    _id: "109",
    name: "TABASCO - Scorpion Sauce",
    brand: "McIlhenny Company",
    ingredients:
      "Scorpion Pepper, Distilled Vinegar, Sugar, Guava Puree, Pineapple, Salt, Guava Powder, Pineapple Powder, TABASCO Brand Pepper Sauce (distilled Vinegar, Red Pepper, Salt).",
    description:
      "Introducing our hottest sauce yet: TABASCO Scorpion Pepper Sauce. Culled from the flames of flavor, this fiery sauce features a dynamic mix of scorpion peppers, guava, and pineapple all blended with a splash of TABASCOÂ® sauce. While typical red peppers used to make TABASCO brand Pepper Sauce falls around 50,000 Scoville Units, one scorpion pepper can pack a potent punch of roughly 2 million. TABASCO Scorpion Pepper Sauce...not for the faint of heart. Flavor responsibly!",
    pepperType: "Trinidad Scorpion",
    pepperTypeShort: { _id: "20", name: "Trinidad Scorpion" },
    photo:
      "https://hotsaucefever.com/images/sauces/544/tabasco_scorpion_sauce.jpg",
    avaRating: "",
    country: "United States"
  },
  {
    _id: "116",
    name: "Gindo's Spice Of Life - Chocolate Moruga Scorpion",
    brand: "Gindo's Spice of Life",
    ingredients:
      "Red Bell Pepper, Vinegar, Water, Tomato, Chocolate Moruga Scorpion, Aji Rico Pepper, Onion, Garlic, Shallots, Kalamata Olive, Pink Himalayan Salt, Cilantro, Organic Cane Sugar, Ground Peppercorns, Xantham Gum",
    description:
      "The flavor of this particular Chocolate Moruga Scorpion is truly special, and although we wanted to feature the pepper by itself, it's simply too hot not to add other flavor profiles to somewhat tame the heat. Our goal, as with all of our sauces, was to make this super hot pepper palatable. TASTE:  Rich and savory up front with subtle hints of smoke and zest followed by billowing waves of intense heat.",
    pepperType: "Trinidad Scorpion",
    pepperTypeShort: { _id: "20", name: "Trinidad Scorpion" },
    photo:
      "https://hotsaucefever.com/images/sauces/537/gindos-chocolate-moruga-scorpion.jpg",
    avaRating: "",
    country: "United States"
  },
  {
    _id: "5",
    name: "Walkerswood - Jamaican Firestick Pepper Sauce",
    brand: "Walkerswood",
    ingredients:
      "Hot Peppers, Water, Vinegar, Brown Sugar, Salt, Modified Corn Starch, Xanthan Gum, Ascorbic Acid, Garlic Powder, Onion Powder, Potassium Sorbate",
    description:
      "The saying goes...â€Old firestick is easy to catchâ€. Once you have had a flame in your heart it is easy to rekindle. This sauce should warm up all kinds of things. Go easy!",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/653/walkerswood-jamaican-firestick-pepper-sauce.jpg",
    avaRating: 4,
    country: "Jamaica"
  },
  {
    _id: "68",
    name: "CaJohns - Tiki Bar Torch Hot Sauce",
    brand: "CaJohns Fiery Foods",
    ingredients:
      "Chile Sauce (Water, Distilled Vinegar, Sugar, Chiles, Garlic, Xanthan Gum), Mango, Papaya, Pineapple, Sweet Soy Sauce (Palm Sugar, Water, Salt, Soybeans, Wheat), Brown Sugar, Chiles, Lemon Juice, Spices, Contains Gluten",
    description:
      "This sauce was inspired by the art of Stevo Stevotomic of Las Vegas, Nevada. This tasty treat harkens back to the Polynesian supper clubs of the 60's and 70's. Retro but relevant to today's tastes, a sweet hot wave of flavor awaits! Mahalo!",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Pepper blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/586/cajohns-tiki-bar-torch-hot-sauce.jpg",
    avaRating: 5,
    country: "United States"
  },
  {
    _id: "159",
    name: "Allegheny City Farms - Kung-Pao Rush: Oak Barrel Aged Edition",
    brand: "Allegheny City Farms",
    ingredients:
      "Kung Pao And Sugar Rush Peach Peppers, Rice Vinegar, Lemon Juice, Honey, Garlic, Pink Himalayan Salt, Black Pepper, Ginger, Coriander",
    description:
      "The 2nd hottest sauce in our Flavor Bomb Series features fresh Kung Pao and Sugar Rush Peach peppers that infuse harmoniously with honey, fresh garlic, ginger and coriander to create this unique Asian inspired hot sauce.",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/490/allegheny_kung-pao_rush_sauce.jpg",
    avaRating: 4,
    country: "United States"
  },
  {
    _id: "184",
    name: "Humble House - Ancho and Morita Hot Sauce",
    brand: "Humble House",
    ingredients:
      "Aged Tamarind Paste (raisins, Tamarind Concentrate, Gluten-free Soy Sauce, Balsamic Vinegar, Morita Chile, Ancho Chile, Kosher Salt), Vinegar, Cane Sugar, Fresh Garlic",
    description:
      "Smokey Tamarind sauce is a unique umami bomb of super savory flavor with deep and rich notes of ancho and morita chiles. The sauce is aged allowing the flavor to intensify while the heat mellows out to a nice simmer. Use this as a glaze for pork belly, or baby back ribs. WARNING! once you put this sauce on your favorite foods there is no turning back.",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/451/ancho_and_morita_smokey_tamarind_sauce.jpg",
    avaRating: 4.8,
    country: "United States"
  },
  {
    _id: "220",
    name: "Nongporn Seafood Chilli Sauce ",
    brand: "Nongporn Brand",
    ingredients:
      "Fresh Chilli Padi (25%), Garlic (20%), Lime Juice (15%), Vinegar (11%), Monosodium Glutamate, INS211",
    description: "Nongporn Seafood Chilli Sauce",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/409/nonporn-seafood-chilli.jpg",
    avaRating: 3.1,
    country: "Thailand"
  },
  {
    _id: "223",
    name: "Encona - Thai Sweet Chilli Sauce",
    brand: "Grace Foods",
    ingredients:
      "Sugar, Water, Chilli Mash (Chillis, Water, Acetic Acid, Salt) (15%), Garlic, Salt, Lime Juice, Stabiliser: Xanthan Gum, Colour (Paprika Extract), Spirit Vinegar, Preservative (Potassium Sorbate).",
    description:
      "Explore the taste of the Far-East with Encona Thai Sweet Chilli Sauce. Made to a classic Thai recipe, this universal favourite combines an authentic blend of chillies, garlic and lime juice. A delicious, spicy sauce with a sweet chilli flavour, it is a great addition to all your favourite Eastern and Western foods.",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/406/encona_sweet_chilli_medium.jpg",
    avaRating: 3,
    country: "United Kingdom"
  },
  {
    _id: "316",
    name: "Heirloom Hot Sauce - Beaver Dam Pepper",
    brand: "Scrumptious Pantry",
    ingredients:
      "Water, Peppers, Organic Distilled White Vinegar, Organic Honey, Sea Salt, Tomato Paste, Beaver Dam Peppers, Onions, Garlic, Lime Juice Concentrate, Sesame Paste, Spices, Cane Sugar",
    description:
      "This hot sauce has a mild overture and finishes with a flavorful heat â€“ a true representative of the Beaver Dam Pepperâ€™s characteristic flavor profile. The delayed heat paired with a little sweetness and bright acidity makes it a great allrounder. To create this complex flavor experience, we roast all the peppers to concentrate the sugars and then wild ferment the mash for two to three weeks. Delicious on succulent meat, BBQ, macâ€™nâ€™cheese or leafy greens. Gives a surprising twist to a vinaigrette, too",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/294/beaver_dam_pepper_sauce.jpg",
    avaRating: 3.7,
    country: "United States"
  },
  {
    _id: "317",
    name: "Heirloom Hot Sauce - Chiltepin Pepper ",
    brand: "Scrumptious Pantry",
    ingredients:
      "Water, Organic Distilled White Vinegar, Peppers, Tomato Paste, Sea Salt, Organic Honey, Lime Juice Concentrate, Chiltepin Powder, Spices",
    description:
      "The Chiltepin pepper might be tiny, but it packs a punch! This is the hottest of our three hot sauces â€“ representing the pungent characteristic of the Chiltepinâ€™s heat, while still showcasing its flavor. To bring out the sauceâ€™s complexity, we roast all the peppers to concentrate the sugars and then wild ferment the mash for two to three weeks.  This is our go to sauce to pour on meats, hearty vegetables, eggs or chili.",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/293/chiltepin_pepper_heirloom.jpg",
    avaRating: 3,
    country: "United States"
  },
  {
    _id: "384",
    name: "Bandar - Spicy Mango Chili Sauce",
    brand: "Bandar Foods",
    ingredients:
      "Mango, Water, Salt, Green Chili, Mixed Spices (chili Powder, Yellow Mustard, Fenugreek, Asafoetida), Non-hydrogenated Vegetable (Palmolein) Oil, Cilantro Leaves, Acetic Acid And Citric Acid",
    description:
      "Naughty or playful? You decide. We meddled with the achar pickling tradition to give you our Spicy Mango Chili Sauce. Its bold flavor and savory notes are great mixed in soups, rice, pizza, hot dogs and any other dishes that need a tangy lift.",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/225/bandar_spicy_mango_chili_sauce.jpg",
    avaRating: 3.5,
    country: "India"
  },
  {
    _id: "478",
    name: "Sambel Asli - Cap Ibu Jari Jempol (Chili Sauce)",
    brand: "Sambel Cap Jempol Co.",
    ingredients: "Pure Chilli, Sugar, Salt, Garlic, Vinegar, Food Additives",
    description: "Jempol Chili Sauce",
    pepperType: "",
    pepperTypeShort: { _id: "21", name: "Peppers blend" },
    photo:
      "https://hotsaucefever.com/images/sauces/109/sambel_asli_chili_sauce.jpg",
    avaRating: 3.7,
    country: "Indonesia"
  }
];

export function getSauces() {
  return sauces;
}

export function getSauce(id) {
  return sauces.find(m => m._id === id);
}

export function saveSauce(sauce) {
  let sauceInDb = sauces.find(s => s._id === sauce._id) || {};
  sauceInDb.name = sauce.name;
  sauceInDb.brand = sauce.brand;
  sauceInDb.ingredients = sauce.ingredients;
  sauceInDb.description = sauce.description;
  sauceInDb.pepperType = sauce.pepperTypes;
  sauceInDb.pepperTypeShort = typesAPI.types.find(
    t => t._id === sauce.pepperType._id
  );
  sauceInDb.photo = sauce.url;
  sauceInDb.avaRating = sauce.rating;
  sauceInDb.country = sauce.country;

  if (!sauceInDb._id) {
    sauceInDb._id = Date.now().toString();
    sauces.push(sauceInDb);
  }

  return sauceInDb;
}

export function deleteSauce(id) {
  let sauceInDb = sauces.find(s => s._id === id);
  sauces.splice(sauces.indexOf(sauceInDb), 1);
  return sauceInDb;
}
