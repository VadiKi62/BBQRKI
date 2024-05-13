import { ru } from "./justMenu/ru";
import { ro } from "./justMenu/ro";
import { ua } from "./justMenu/ua";
import { el } from "./justMenu/el";
import { de } from "./justMenu/de";
import { se } from "./justMenu/se";
import { en } from "./justMenu/en";

export const initialMenu = {
  menu: [
    {
      langKey: "en",
      items: [
        {
          menuNumber: 1,
          image: "/menu/your_bar/caesar.jpg",
          title: "Caesar Salad",
          category: "Salad",
          subCategory: "vegan",
          ingredients:
            "Lettuce, croutons, parmesan cheese, Caesar dressing, black pepper, lemon",
        },
        {
          menuNumber: 2,
          image: "/menu/your_bar/bread-barrel.jpg",
          title: "Garlic Bread",
          category: "Starter",
          ingredients: "Freshly baked bread, garlic butter, parsley",
        },
        {
          menuNumber: 3,
          image: "/menu/your_bar/greek-salad.jpg",
          title: "Greek Salad",
          category: "Salad",
          subCategory: "vegan",
          ingredients:
            "Cucumber, tomatoes, olives, feta cheese, Greek dressing, oregano",
        },
        {
          menuNumber: 4,
          image: "/menu/your_bar/spinach-salad.jpg",
          title: "Spinach Salad",
          category: "Salad",
          ingredients:
            "Fresh spinach, bacon bits, hard-boiled eggs, red onion, vinaigrette dressing",
        },
        {
          menuNumber: 5,
          image: "/menu/your_bar/cake.jpg",
          title: "Greek Cake",
          category: "Desserts",
          ingredients:
            "Sponge cake, honey, nuts, cinnamon, sugar, whipped cream",
        },
        {
          menuNumber: 6,
          image: "/menu/your_bar/baklava-sweets.jpg",
          title: "Baklava sweets",
          category: "Desserts",
          ingredients: "Layers of phyllo dough, honey, walnuts or pistachios",
        },
        {
          id: 7,
          image: "/menu/your_bar/pumpkin-pie.jpg",
          title: "Pumpkin Pie",
          price: "5",
          category: "Desserts",
          ingredients: "Pumpkin puree, pie crust, sugar, spices, whipped cream",
        },
        {
          id: 8,
          image: "/menu/your_bar/chocolate-ice-cream.jpg",
          title: "Chocolate Ice Cream",
          price: "5",
          category: "Desserts",
          ingredients: "Milk, cream, sugar, cocoa powder, chocolate chips",
        },
        {
          id: 9,
          image: "/menu/your_bar/lobster-roll.jpg",
          title: "Lobster Roll",
          price: "15",
          category: "Main",
          subCategory: "Seafood",
          ingredients: "Lobster meat, mayonnaise, buttered roll",
        },
        {
          id: 10,
          image: "/menu/your_bar/lobster-bisque.jpg",
          title: "Lobster Bisque",
          price: "15",
          category: "Main",
          subCategory: "Seafood",
          ingredients: "Lobster meat, cream, tomatoes, herbs, spices",
        },
        {
          id: 11,
          image: "/menu/your_bar/mozzarella.jpg",
          title: "Mozzarella",
          price: "5",
          category: "Starter",
          ingredients: "Fresh mozzarella, tomatoes, basil, balsamic glaze",
        },
        {
          id: 12,
          image: "/menu/your_bar/tuscan-grilled.jpg",
          title: "Tuscan Grilled",
          price: "15",
          category: "Main",
          subCategory: "Meat",
          ingredients: "Grilled meat, vegetables, Tuscan seasoning",
        },
      ],
    },
    {
      langKey: "el",
      items: [
        {
          id: 1,
          image: "/menu/your_bar/caesar.jpg",
          title: "Σαλάτα Καίσαρ",
          price: "5",
          category: "Σαλάτα",
          subCategory: "vegan",
          ingredients:
            "Φύλλα σαλάτας, κρουτόν, τυρί παρμεζάν, dressing Καίσαρ, μαύρο πιπέρι, λεμόνι",
        },
        {
          id: 2,
          image: "/menu/your_bar/bread-barrel.jpg",
          title: "Ψωμί με σκόρδο",
          price: "5",
          category: "Ορεκτικό",
          ingredients: "Φρέσκο ψωμί, βούτυρο σκόρδου, μαϊντανός",
        },
        {
          id: 3,
          image: "/menu/your_bar/greek-salad.jpg",
          title: "Ελληνική Σαλάτα",
          price: "5",
          category: "Σαλάτα",
          subCategory: "vegan",
          ingredients:
            "Αγγούρι, ντομάτες, ελιές Καλαμάτας, φέτα, ελληνική σάλτσα, ρίγανη",
        },
        {
          id: 4,
          image: "/menu/your_bar/spinach-salad.jpg",
          title: "Σαλάτα με σπανάκι",
          price: "5",
          category: "Σαλάτα",
          ingredients:
            "Φρέσκο σπανάκι, μπέικον, αυγά βραστά, κόκκινο κρεμμύδι, σάλτσα βινεγκρέτ",
        },
        {
          id: 5,
          image: "/menu/your_bar/cake.jpg",
          title: "Ελληνικό κέικ",
          price: "5",
          category: "Επιδόρπια",
          ingredients:
            "Σπογγώδες κέικ, μέλι, ξηροί καρποί, κανέλα, ζάχαρη, σαντιγί",
        },
        {
          id: 6,
          image: "/menu/your_bar/baklava-sweets.jpg",
          title: "Μπακλαβάς",
          price: "5",
          category: "Επιδόρπια",
          ingredients: "Φύλλα φύλλου, μέλι, καρύδια ή φιστίκια",
        },
        {
          id: 7,
          image: "/menu/your_bar/pumpkin-pie.jpg",
          title: "Κολοκυθόπιτα",
          price: "5",
          category: "Επιδόρπια",
          ingredients: "Κολοκύθα, ζύμη πίτας, ζάχαρη, μπαχαρικά, σαντιγί",
        },
        {
          id: 8,
          image: "/menu/your_bar/chocolate-ice-cream.jpg",
          title: "Παγωτό σοκολάτα",
          price: "5",
          category: "Επιδόρπια",
          ingredients: "Γάλα, κρέμα γάλακτος, ζάχαρη, κακάο, σοκολατάκια",
        },
        {
          id: 9,
          image: "/menu/your_bar/lobster-roll.jpg",
          title: "Ρολό με αστακό",
          price: "15",
          category: "Κυρίως",
          subCategory: "Θαλασσινά",
          ingredients: "Κρέας αστακού, μαγιονέζα, ψωμί με βούτυρο",
        },
        {
          id: 10,
          image: "/menu/your_bar/lobster-bisque.jpg",
          title: "Μπισκ Αστακού",
          price: "15",
          category: "Κυρίως",
          subCategory: "Θαλασσινά",
          ingredients:
            "Κρέας αστακού, κρέμα γάλακτος, ντομάτες, μυρωδικά, μπαχαρικά",
        },
        {
          id: 11,
          image: "/menu/your_bar/mozzarella.jpg",
          title: "Μοτσαρέλα",
          price: "5",
          category: "Ορεκτικό",
          ingredients:
            "Φρέσκια μοτσαρέλα, ντομάτες, βασιλικός, σάλτσα βαλσάμικου",
        },
        {
          id: 12,
          image: "/menu/your_bar/tuscan-grilled.jpg",
          title: "Κρεατικά σχάρας Τοσκάνης",
          price: "15",
          category: "Κυρίως",
          subCategory: "Κρεατικά",
          ingredients: "Ψητά κρέατα, λαχανικά, μπαχαρικά Τοσκάνης",
        },
      ],
    },
    {
      langKey: "de",
      items: [
        {
          id: 1,
          image: "/menu/your_bar/caesar.jpg",
          title: "Caesar Salat",
          price: "5",
          category: "Salat",
          subCategory: "vegan",
          ingredients:
            "Römersalat, Croutons, Parmesankäse, Caesar Dressing, schwarzer Pfeffer, Zitrone",
        },
        {
          id: 2,
          image: "/menu/your_bar/bread-barrel.jpg",
          title: "Knoblauchbrot",
          price: "5",
          category: "Vorspeise",
          ingredients: "Frisch gebackenes Brot, Knoblauchbutter, Petersilie",
        },
        {
          id: 3,
          image: "/menu/your_bar/greek-salad.jpg",
          title: "Griechischer Salat",
          price: "5",
          category: "Salat",
          subCategory: "vegan",
          ingredients:
            "Gurke, Tomaten, Kalamata-Oliven, Fetakäse, griechisches Dressing, Oregano",
        },
        {
          id: 4,
          image: "/menu/your_bar/spinach-salad.jpg",
          title: "Spinat Salat",
          price: "5",
          category: "Salat",
          ingredients:
            "Frischer Spinat, Speckwürfel, hartgekochte Eier, rote Zwiebeln, Vinaigrette Dressing",
        },
        {
          id: 5,
          image: "/menu/your_bar/cake.jpg",
          title: "Griechischer Kuchen",
          price: "5",
          category: "Dessert",
          ingredients: "Schwammkuchen, Honig, Nüsse, Zimt, Zucker, Schlagsahne",
        },
        {
          id: 6,
          image: "/menu/your_bar/baklava-sweets.jpg",
          title: "Baklava Süßigkeiten",
          price: "5",
          category: "Dessert",
          ingredients: "Blätterteigschichten, Honig, Walnüsse oder Pistazien",
        },
        {
          id: 7,
          image: "/menu/your_bar/pumpkin-pie.jpg",
          title: "Kürbiskuchen",
          price: "5",
          category: "Dessert",
          ingredients: "Kürbispüree, Kuchenboden, Zucker, Gewürze, Schlagsahne",
        },
        {
          id: 8,
          image: "/menu/your_bar/chocolate-ice-cream.jpg",
          title: "Schokoladen-Eis",
          price: "5",
          category: "Dessert",
          ingredients:
            "Milch, Sahne, Zucker, Kakaopulver, Schokoladenstückchen",
        },
        {
          id: 9,
          image: "/menu/your_bar/lobster-roll.jpg",
          title: "Hummerrolle",
          price: "15",
          category: "Hauptgericht",
          subCategory: "Seafood",
          ingredients: "Hummerschwanzfleisch, Mayonnaise, Buttered Roll",
        },
        {
          id: 10,
          image: "/menu/your_bar/lobster-bisque.jpg",
          title: "Hummerbisque",
          price: "15",
          category: "Hauptgericht",
          subCategory: "Seafood",
          ingredients: "Hummerschwanzfleisch, Sahne, Tomaten, Kräuter, Gewürze",
        },
        {
          id: 11,
          image: "/menu/your_bar/mozzarella.jpg",
          title: "Mozzarella",
          price: "5",
          category: "Vorspeise",
          ingredients:
            "Frische Mozzarella, Tomaten, Basilikum, Balsamico-Glasur",
        },
        {
          id: 12,
          image: "/menu/your_bar/tuscan-grilled.jpg",
          title: "Toskanisch Gegrillt",
          price: "15",
          category: "Hauptgericht",
          subCategory: "Fleisch",
          ingredients: "Gegrilltes Fleisch, Gemüse, Toskanische Würzung",
        },
      ],
    },
    {
      langKey: "ru",
      items: [
        {
          id: 1,
          image: "/menu/your_bar/caesar.jpg",
          title: "Цезарь салат",
          price: "5",
          category: "Салат",
          subCategory: "vegan",
          ingredients:
            "Салат, гренки, сыр пармезан, соус Цезарь, черный перец, лимон",
        },
        {
          id: 2,
          image: "/menu/your_bar/bread-barrel.jpg",
          title: "Чесночный хлеб",
          price: "5",
          category: "Закуски",
          ingredients: "Свежеиспеченный хлеб, чесночное масло, петрушка",
        },
        {
          id: 3,
          image: "/menu/your_bar/greek-salad.jpg",
          title: "Греческий салат",
          price: "5",
          category: "Салат",
          subCategory: "vegan",
          ingredients:
            "Огурцы, помидоры, оливки, сыр фета, греческий соус, майоран",
        },
        {
          id: 4,
          image: "/menu/your_bar/spinach-salad.jpg",
          title: "Спинатовый салат",
          price: "5",
          category: "Салат",
          ingredients:
            "Свежий спинат, кусочки бекона, куриное яйцо, красный лук, заправка винегрет",
        },
        {
          id: 5,
          image: "/menu/your_bar/cake.jpg",
          title: "Греческий торт",
          price: "5",
          category: "Десерты",
          ingredients:
            "Бисквитный торт, мед, орехи, корица, сахар, взбитые сливки",
        },
        {
          id: 6,
          image: "/menu/your_bar/baklava-sweets.jpg",
          title: "Баклава",
          price: "5",
          category: "Десерты",
          ingredients: "Слои теста фило, мед, грецкие орехи или фисташки",
        },
        {
          id: 7,
          image: "/menu/your_bar/pumpkin-pie.jpg",
          title: "Тыквенный пирог",
          price: "5",
          category: "Десерты",
          ingredients:
            "Тыквенное пюре, корж для пирога, сахар, специи, взбитые сливки",
        },
        {
          id: 8,
          image: "/menu/your_bar/chocolate-ice-cream.jpg",
          title: "Шоколадное мороженое",
          price: "5",
          category: "Десерты",
          ingredients:
            "Молоко, сливки, сахар, какао-порошок, шоколадные кусочки",
        },
        {
          id: 9,
          image: "/menu/your_bar/lobster-roll.jpg",
          title: "Лобстер Ролл",
          price: "15",
          category: "Основное",
          subCategory: "Морепродукты",
          ingredients: "Мясо лобстера, майонез, поджаренная булочка",
        },
        {
          id: 10,
          image: "/menu/your_bar/lobster-bisque.jpg",
          title: "Суп с лобстером",
          price: "15",
          category: "Основное",
          subCategory: "Морепродукты",
          ingredients: "Мясо лобстера, сливки, помидоры, травы, специи",
        },
        {
          id: 11,
          image: "/menu/your_bar/mozzarella.jpg",
          title: "Моццарелла",
          price: "5",
          category: "Закуски",
          ingredients:
            "Свежая моццарелла, помидоры, базилик, бальзамическая глазурь",
        },
        {
          id: 12,
          image: "/menu/your_bar/tuscan-grilled.jpg",
          title: "Тосканский гриль",
          price: "15",
          category: "Основное",
          subCategory: "Мясо",
          ingredients: "Жареное мясо, овощи, приправа по-тоскански",
        },
      ],
    },
    {
      langKey: "ua",
      items: [
        {
          id: 1,
          image: "/menu/your_bar/caesar.jpg",
          title: "Цезарь салат",
          price: "5",
          category: "Салат",
          subCategory: "веган",
          ingredients:
            "Салат, гренки, сир пармезан, соус Цезарь, чорний перець, лимон",
        },
        {
          id: 2,
          image: "/menu/your_bar/bread-barrel.jpg",
          title: "Часниковий хліб",
          price: "5",
          category: "Закуски",
          ingredients: "Свіжозапечений хліб, часникова олія, петрушка",
        },
        {
          id: 3,
          image: "/menu/your_bar/greek-salad.jpg",
          title: "Грецький салат",
          price: "5",
          category: "Салат",
          subCategory: "веган",
          ingredients:
            "Огірки, помідори, оливки, сир фета, грецький соус, майоран",
        },
        {
          id: 4,
          image: "/menu/your_bar/spinach-salad.jpg",
          title: "Спанаковий салат",
          price: "5",
          category: "Салат",
          ingredients:
            "Свіжий шпинат, шматочки бекона, куряче яйце, червона цибуля, заправка вінегрет",
        },
        {
          id: 5,
          image: "/menu/your_bar/cake.jpg",
          title: "Грецький торт",
          price: "5",
          category: "Десерти",
          ingredients:
            "Бісквітний торт, мед, горіхи, кориця, цукор, взбите сливки",
        },
        {
          id: 6,
          image: "/menu/your_bar/baklava-sweets.jpg",
          title: "Баклава",
          price: "5",
          category: "Десерти",
          ingredients: "Шари тіста філо, мед, грецькі горіхи або фісташки",
        },
        {
          id: 7,
          image: "/menu/your_bar/pumpkin-pie.jpg",
          title: "Тиквений пиріг",
          price: "5",
          category: "Десерти",
          ingredients:
            "Тиквове пюре, корж для пирога, цукор, спеції, взбите сливки",
        },
        {
          id: 8,
          image: "/menu/your_bar/chocolate-ice-cream.jpg",
          title: "Шоколадне морозиво",
          price: "5",
          category: "Десерти",
          ingredients:
            "Молоко, вершки, цукор, какао-порошок, шоколадні кришталі",
        },
        {
          id: 9,
          image: "/menu/your_bar/lobster-roll.jpg",
          title: "Лобстер Ролл",
          price: "15",
          category: "Основне",
          subCategory: "Морепродукти",
          ingredients: "М'ясо лобстера, майонез, піджарений булочка",
        },
        {
          id: 10,
          image: "/menu/your_bar/lobster-bisque.jpg",
          title: "Суп з лобстером",
          price: "15",
          category: "Основне",
          subCategory: "Морепродукти",
          ingredients: "М'ясо лобстера, вершки, помідори, трави, спеції",
        },
        {
          id: 11,
          image: "/menu/your_bar/mozzarella.jpg",
          title: "Моцарелла",
          price: "5",
          category: "Закуски",
          ingredients: "Свіжа моцарелла, помідори, базилік, бальзамічна глазур",
        },
        {
          id: 12,
          image: "/menu/your_bar/tuscan-grilled.jpg",
          title: "Тосканський гриль",
          price: "15",
          category: "Основне",
          subCategory: "М'ясо",
          ingredients: "Смажене м'ясо, овочі, приправа по-тосканськи",
        },
      ],
    },
    {
      langKey: "se",
      items: [
        {
          id: 1,
          image: "/menu/your_bar/caesar.jpg",
          title: "Цезарева салата",
          price: "5",
          category: "Салата",
          subCategory: "веган",
          ingredients:
            "Салата, хрскаве погаче, пармезан, Цезарев сос, црни бибер, лимун",
        },
        {
          id: 2,
          image: "/menu/your_bar/bread-barrel.jpg",
          title: "Хлеб са белим луком",
          price: "5",
          category: "Хрскаве закуске",
          ingredients: "Свеже печен хлеб, уље са белим луком, першун",
        },
        {
          id: 3,
          image: "/menu/your_bar/greek-salad.jpg",
          title: "Грчка салата",
          price: "5",
          category: "Салата",
          subCategory: "веган",
          ingredients:
            "Краставци, парадајз, маслине, фета сир, грчки сос, мајоран",
        },
        {
          id: 4,
          image: "/menu/your_bar/spinach-salad.jpg",
          title: "Салата од спанаћа",
          price: "5",
          category: "Салата",
          ingredients:
            "Свеж спанаћ, коматићи шунке, кувано јаје, црвени лук, винегрет",
        },
        {
          id: 5,
          image: "/menu/your_bar/cake.jpg",
          title: "Грчка торта",
          price: "5",
          category: "Десерти",
          ingredients: "Тортица, мед, орашасти плодови, цимет, шећер, шлаг",
        },
        {
          id: 6,
          image: "/menu/your_bar/baklava-sweets.jpg",
          title: "Баклава",
          price: "5",
          category: "Десерти",
          ingredients:
            "Кора фила теста, мед, грчки орашасти плодови или бадеми",
        },
        {
          id: 7,
          image: "/menu/your_bar/pumpkin-pie.jpg",
          title: "Бундева пита",
          price: "5",
          category: "Десерти",
          ingredients: "Пире од бундеве, корица за питу, шећер, зачини, шлаг",
        },
        {
          id: 8,
          image: "/menu/your_bar/chocolate-ice-cream.jpg",
          title: "Чоколадно сладолед",
          price: "5",
          category: "Десерти",
          ingredients: "Млеко, павлака, шећер, какао прах, чоколадне коцкице",
        },
        {
          id: 9,
          image: "/menu/your_bar/lobster-roll.jpg",
          title: "Ролна од јастога",
          price: "15",
          category: "Главно јело",
          subCategory: "Морски плодови",
          ingredients: "Месо јастога, мајонез, запржена пециво",
        },
        {
          id: 10,
          image: "/menu/your_bar/lobster-bisque.jpg",
          title: "Чорба од јастога",
          price: "15",
          category: "Главно јело",
          subCategory: "Морски плодови",
          ingredients: "Месо јастога, павлака, парадајз, зачини, биље",
        },
        {
          id: 11,
          image: "/menu/your_bar/mozzarella.jpg",
          title: "Моцарела",
          price: "5",
          category: "Хрскаве закуске",
          ingredients: "Свежа моцарела, парадајз, босиљак, балзамички сирће",
        },
        {
          id: 12,
          image: "/menu/your_bar/tuscan-grilled.jpg",
          title: "Тоскански роштиљ",
          price: "15",
          category: "Главно јело",
          subCategory: "Месо",
          ingredients: "Роштиљано месо, поврће, тоскански зачини",
        },
      ],
    },
  ],
  restId: "65f99151a749ec66638925cf",
};

//items for adding to addItems endpoint
export const justItems = [
  {
    menuNumber: 207,
    image: "/menu/burger_with_giro.jpg",
    title: "Burger with giros pork",
    price: "13",
    category: "Hamburgers",
    ingredients:
      "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros pork with potatoes",
    sorting: "02",
  },
  {
    menuNumber: 208,
    image: "/menu/burger_with_giro.jpg",
    title: "Burger with giros chicken",
    price: "13",
    category: "Hamburgers",
    ingredients:
      "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros chicken with potatoes",
    sorting: "02",
  },
  {
    menuNumber: 415,
    image: "/menu/club_sandwich_giros.jpg",
    title: "Club sandwich giros pork",
    price: "13",
    category: "Sandwiches",
    ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
    sorting: "04",
  },
  {
    menuNumber: 416,
    image: "/menu/club_sandwich_giros.jpg",
    title: " Club sandwich giros chicken",
    price: "13",
    category: "Sandwiches",
    ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
    sorting: "04",
  },
];

export const justItemsLANGS = [
  {
    langKey: "se",
    items: [
      {
        menuNumber: 207,
        title: "Burger with giros pork",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros pork with potatoes",
      },
      {
        menuNumber: 208,
        title: "Burger with giros chicken",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros chicken with potatoes",
      },
      {
        menuNumber: 415,
        title: "Club sandwich giros pork",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
      {
        menuNumber: 416,
        title: " Club sandwich giros chicken",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
    ],
  },
  {
    langKey: "el",
    items: [
      {
        menuNumber: 207,
        title: "Burger with giros pork",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros pork with potatoes",
      },
      {
        menuNumber: 208,
        title: "Burger with giros chicken",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros chicken with potatoes",
      },
      {
        menuNumber: 415,
        title: "Club sandwich giros pork",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
      {
        menuNumber: 416,
        title: " Club sandwich giros chicken",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
    ],
  },
  {
    langKey: "de",
    items: [
      {
        menuNumber: 207,
        title: "Burger with giros pork",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros pork with potatoes",
      },
      {
        menuNumber: 208,
        title: "Burger with giros chicken",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros chicken with potatoes",
      },
      {
        menuNumber: 415,
        title: "Club sandwich giros pork",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
      {
        menuNumber: 416,
        title: " Club sandwich giros chicken",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
    ],
  },
  {
    langKey: "ro",
    items: [
      {
        menuNumber: 207,
        title: "Burger with giros pork",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros pork with potatoes",
      },
      {
        menuNumber: 208,
        title: "Burger with giros chicken",
        category: "Hamburgers",
        ingredients:
          "With brioche bread, tomatoe, onion, green salad, ketchup, mustard & giros chicken with potatoes",
      },
      {
        menuNumber: 415,
        title: "Club sandwich giros pork",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
      {
        menuNumber: 416,
        title: " Club sandwich giros chicken",
        category: "Sandwiches",
        ingredients: "With pita, tzatziki, tomatoe, onion, green salad",
      },
    ],
  },
  {
    langKey: "ru",
    items: [
      {
        menuNumber: 207,
        title: "Бургер с гиросом из свинины",
        category: "Гамбургеры",
        ingredients:
          "С булочкой бриош, помидором, луком, зелёным салатом, кетчупом, горчицей и гиросом из свинины, а также ртофелем",
      },
      {
        menuNumber: 208,
        title: "Бургер с гиросом из курицы",
        category: "Гамбургеры",
        ingredients:
          "С булочкой бриош, помидором, луком, зелёным салатом, кетчупом, горчицей и гиросом из курицы,  а также картофелем",
      },
      {
        menuNumber: 415,
        title: "Клубный сэндвич с гиросом из свинины",
        category: "Сэндвичи",
        ingredients: "С питой, дзадзыки, помидором, луком, зелёным салатом",
      },
      {
        menuNumber: 416,
        title: "Клубный сэндвич с гиросом из курицы",
        category: "Сэндвичи",
        ingredients: "С питой, дзадзыки, помидором, луком, зелёным салатом",
      },
    ],
  },
];

//eng MENU
export const justMenuEn = {
  menu: [
    {
      langKey: "en",
      items: en,
    },
  ],
};

//serbian menu
export const justItemsToAddSe = [
  {
    langKey: "se",
    items: se,
  },
];
export const justItemsToAddDe = [
  {
    langKey: "de",
    items: de,
  },
];
export const justItemsToAddEl = [
  {
    langKey: "el",
    items: el,
  },
];
export const justItemsToAddRo = [
  {
    langKey: "ro",
    items: ro,
  },
];
export const justItemsToAddRu = [
  {
    langKey: "ru",
    items: ru,
  },
];
