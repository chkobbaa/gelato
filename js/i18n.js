/* =========================================
   GELATO DREAMS — i18n (Internationalization)
   ========================================= */

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.flavors": "Flavors",
    "nav.process": "How It's Made",
    "nav.testimonials": "Reviews",
    "nav.contact": "Visit Us",

    // Hero
    "hero.badge": "✨ Artisan Gelato Since 1987",
    "hero.title.1": "Crafted with",
    "hero.title.2": "Passion,",
    "hero.title.3": "Served with Love",
    "hero.cta.primary": "Explore Flavors",
    "hero.cta.secondary": "Our Story",
    "hero.scroll": "Scroll to explore",

    // Story
    "story.badge": "Our Story",
    "story.title": "A Family Tradition of Sweet Perfection",
    "story.p1": "Born in the sun-kissed hills of Tuscany in 1987, Gelato Dreams began as a small family cart on the cobblestone streets of Florence. Our founder, Nonna Maria, believed that gelato wasn't just a dessert — it was a way to make people smile.",
    "story.p2": "Three generations later, we still use her original recipes, sourcing the finest ingredients from local farmers and bringing that same warmth and joy to every scoop we serve.",
    "story.counter.years": "Years",
    "story.counter.flavors": "Flavors",
    "story.counter.customers": "Happy Customers",

    // Flavors
    "flavors.badge": "Our Menu",
    "flavors.title": "Discover Our Artisan Flavors",
    "flavors.subtitle": "Each flavor is handcrafted daily using traditional Italian methods and the finest seasonal ingredients.",
    "flavors.filter.all": "All",
    "flavors.filter.classic": "Classic",
    "flavors.filter.fruity": "Fruity",
    "flavors.filter.exotic": "Exotic",
    "flavors.filter.seasonal": "Seasonal",
    "flavors.sweetness": "Sweetness",
    "flavors.ingredients": "Ingredients",
    "flavors.allergens": "Allergens",
    "flavors.calories": "Calories",

    // Flavor names & descriptions
    "flavor.vanilla.name": "Tahitian Vanilla",
    "flavor.vanilla.desc": "Pure Tahitian vanilla beans infused into our creamy base for an unforgettable classic.",
    "flavor.vanilla.long": "Our signature vanilla gelato uses hand-selected Tahitian vanilla beans, known for their floral and fruity notes. Slowly infused over 24 hours into our fresh cream base, this is the flavor that started it all.",
    "flavor.vanilla.ingredients": "Fresh cream, whole milk, Tahitian vanilla beans, cane sugar",
    "flavor.vanilla.allergens": "Dairy",
    "flavor.vanilla.calories": "180 kcal per serving",

    "flavor.strawberry.name": "Wild Strawberry",
    "flavor.strawberry.desc": "Hand-picked wild strawberries from local farms blended into a dreamy pink perfection.",
    "flavor.strawberry.long": "We source our strawberries from the countryside farms each morning. These tiny, intensely flavorful wild berries are gently folded into our cream base, creating a gelato that tastes like a summer afternoon.",
    "flavor.strawberry.ingredients": "Wild strawberries, fresh cream, whole milk, cane sugar, lemon zest",
    "flavor.strawberry.allergens": "Dairy",
    "flavor.strawberry.calories": "165 kcal per serving",

    "flavor.pistachio.name": "Sicilian Pistachio",
    "flavor.pistachio.desc": "Roasted Bronte pistachios ground into a velvety, nutty gelato masterpiece.",
    "flavor.pistachio.long": "Made exclusively with pistachios from Bronte, Sicily — the finest in the world. Each batch requires hours of slow roasting and careful grinding to achieve our signature velvety texture.",
    "flavor.pistachio.ingredients": "Bronte pistachios, fresh cream, whole milk, cane sugar",
    "flavor.pistachio.allergens": "Dairy, Tree Nuts",
    "flavor.pistachio.calories": "210 kcal per serving",

    "flavor.chocolate.name": "Dark Chocolate Truffle",
    "flavor.chocolate.desc": "Rich Belgian dark chocolate with ribbons of truffle ganache throughout.",
    "flavor.chocolate.long": "A chocolate lover's paradise. We use 72% single-origin Belgian dark chocolate melted into our cream base, then swirl in handmade truffle ganache for moments of pure indulgence.",
    "flavor.chocolate.ingredients": "Belgian dark chocolate (72%), fresh cream, whole milk, cocoa butter, truffle ganache",
    "flavor.chocolate.allergens": "Dairy, Soy",
    "flavor.chocolate.calories": "225 kcal per serving",

    "flavor.mango.name": "Alphonso Mango Sorbet",
    "flavor.mango.desc": "Vibrant, dairy-free sorbet made from the king of mangoes — pure tropical bliss.",
    "flavor.mango.long": "This vegan-friendly sorbet features Alphonso mangoes from India, renowned as the sweetest mangoes on Earth. No cream, no dairy — just pure fruit intensity with a hint of lime.",
    "flavor.mango.ingredients": "Alphonso mango purée, cane sugar, lime juice, water",
    "flavor.mango.allergens": "None",
    "flavor.mango.calories": "140 kcal per serving",

    "flavor.blueberry.name": "Blueberry Lavender",
    "flavor.blueberry.desc": "Fragrant Provençal lavender meets bursting blueberries in this seasonal wonder.",
    "flavor.blueberry.long": "A limited seasonal creation that captures the essence of a French countryside. We infuse dried Provençal lavender into our cream base, then fold in plump, juicy blueberries picked at peak ripeness.",
    "flavor.blueberry.ingredients": "Blueberries, fresh cream, Provençal lavender, whole milk, honey",
    "flavor.blueberry.allergens": "Dairy",
    "flavor.blueberry.calories": "175 kcal per serving",

    "flavor.mint.name": "Fresh Mint Chip",
    "flavor.mint.desc": "Real garden mint leaves steeped into cream with handmade chocolate chips.",
    "flavor.mint.long": "Forget artificial mint — we steep fresh garden mint leaves overnight to extract their natural, delicate flavor. Paired with hand-chopped dark chocolate chips for the perfect contrast.",
    "flavor.mint.ingredients": "Fresh mint leaves, dark chocolate chips, fresh cream, whole milk, cane sugar",
    "flavor.mint.allergens": "Dairy, Soy",
    "flavor.mint.calories": "195 kcal per serving",

    "flavor.caramel.name": "Salted Caramel Swirl",
    "flavor.caramel.desc": "Buttery caramel with Fleur de Sel — the perfect balance of sweet and savory.",
    "flavor.caramel.long": "Our caramel is made in-house daily, cooked low and slow until it reaches a deep amber color. Swirled through vanilla gelato and finished with hand-harvested Fleur de Sel from Guérande.",
    "flavor.caramel.ingredients": "Butter, cane sugar, Fleur de Sel, fresh cream, whole milk, vanilla",
    "flavor.caramel.allergens": "Dairy",
    "flavor.caramel.calories": "220 kcal per serving",

    // Process
    "process.badge": "Our Craft",
    "process.title": "How We Make Magic",
    "process.subtitle": "Every scoop tells a story of passion, patience, and perfection.",
    "process.step1.title": "Source the Finest",
    "process.step1.desc": "Each morning, we handpick the freshest seasonal ingredients from local farms and trusted artisan suppliers around the world.",
    "process.step2.title": "Slow Churn Perfection",
    "process.step2.desc": "Using traditional Italian batch freezers, we slowly churn small batches to create the densest, creamiest texture possible.",
    "process.step3.title": "Craft with Love",
    "process.step3.desc": "Our gelato artisans fold, swirl, and layer each flavor by hand — creating unique textures and flavor profiles in every batch.",
    "process.step4.title": "Serve with Joy",
    "process.step4.desc": "From our display case to your cone, every scoop is served with a smile and the promise of pure happiness.",

    // Testimonials
    "testimonials.badge": "What People Say",
    "testimonials.title": "Loved by Thousands",
    "testimonials.subtitle": "Don't take our word for it — hear from the gelato lovers who keep coming back.",

    "testimonial.1.quote": "The Sicilian Pistachio gelato transported me straight to Italy. I've been coming back every week since I discovered this gem. Absolutely life-changing!",
    "testimonial.1.name": "Sophie Laurent",
    "testimonial.1.title": "Food Blogger",
    "testimonial.2.quote": "Best ice cream I've ever had, period. The attention to detail and quality of ingredients is evident in every single bite. My kids are obsessed with the vanilla.",
    "testimonial.2.name": "Marco Rossini",
    "testimonial.2.title": "Local Regular",
    "testimonial.3.quote": "As someone with dairy allergies, finding the Mango Sorbet was a dream come true. Pure, intense flavor without any compromise. Thank you, Gelato Dreams!",
    "testimonial.3.name": "Aria Chen",
    "testimonial.3.title": "Satisfied Customer",
    "testimonial.4.quote": "The Blueberry Lavender is poetry in a cup. I've traveled the world tasting gelato, and this little shop rivals the best I've found in Rome and Florence.",
    "testimonial.4.name": "James McAllister",
    "testimonial.4.title": "Travel Writer",

    // Contact
    "contact.badge": "Visit Us",
    "contact.title": "Come Say Hello",
    "contact.subtitle": "We'd love to welcome you. Stop by for a scoop, a smile, and a taste of something extraordinary.",
    "contact.address.label": "Find Us",
    "contact.address.value": "42 Gelato Lane, Florence District\nDowntown, Suite 100",
    "contact.hours.label": "Opening Hours",
    "contact.hours.value": "Mon-Thu: 11am – 9pm\nFri-Sat: 11am – 11pm\nSun: 12pm – 8pm",
    "contact.phone.label": "Call Us",
    "contact.phone.value": "+1 (555) 123-GELATO",
    "contact.email.label": "Email",
    "contact.email.value": "hello@gelatodreams.com",
    "contact.open": "Open Now",
    "contact.closed": "Currently Closed",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success.title": "Message Sent!",
    "contact.form.success.text": "Thanks for reaching out. We'll get back to you within 24 hours.",

    // Footer
    "footer.description": "Handcrafted artisan gelato made with love since 1987. Every scoop is a journey to Italy.",
    "footer.col1.title": "Quick Links",
    "footer.col1.link1": "Our Menu",
    "footer.col1.link2": "About Us",
    "footer.col1.link3": "Catering",
    "footer.col1.link4": "Careers",
    "footer.col2.title": "Legal",
    "footer.col2.link1": "Privacy Policy",
    "footer.col2.link2": "Terms of Service",
    "footer.col2.link3": "Cookie Policy",
    "footer.newsletter.title": "Stay in the Loop",
    "footer.newsletter.text": "Subscribe for seasonal flavor drops, events, and exclusive offers.",
    "footer.newsletter.placeholder": "your@email.com",
    "footer.newsletter.btn": "Subscribe",
    "footer.copyright": "© 2026 Gelato Dreams. All rights reserved.",
    "footer.made": "Made with 🍦 and ❤️",

    // Misc
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    "lang.en": "English",
    "lang.fr": "Français",
    "lang.ar": "العربية"
  },

  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.story": "Notre Histoire",
    "nav.flavors": "Saveurs",
    "nav.process": "Fabrication",
    "nav.testimonials": "Avis",
    "nav.contact": "Nous Trouver",

    // Hero
    "hero.badge": "✨ Gelato Artisanal Depuis 1987",
    "hero.title.1": "Créé avec",
    "hero.title.2": "Passion,",
    "hero.title.3": "Servi avec Amour",
    "hero.cta.primary": "Découvrir les Saveurs",
    "hero.cta.secondary": "Notre Histoire",
    "hero.scroll": "Défiler pour explorer",

    // Story
    "story.badge": "Notre Histoire",
    "story.title": "Une Tradition Familiale de Perfection Sucrée",
    "story.p1": "Née dans les collines ensoleillées de Toscane en 1987, Gelato Dreams a commencé comme un petit chariot familial dans les rues pavées de Florence. Notre fondatrice, Nonna Maria, croyait que le gelato n'était pas juste un dessert — c'était un moyen de faire sourire les gens.",
    "story.p2": "Trois générations plus tard, nous utilisons toujours ses recettes originales, en nous approvisionnant auprès des meilleurs producteurs locaux et en apportant cette même chaleur et joie à chaque boule que nous servons.",
    "story.counter.years": "Années",
    "story.counter.flavors": "Saveurs",
    "story.counter.customers": "Clients Satisfaits",

    // Flavors
    "flavors.badge": "Notre Menu",
    "flavors.title": "Découvrez Nos Saveurs Artisanales",
    "flavors.subtitle": "Chaque saveur est élaborée quotidiennement selon les méthodes traditionnelles italiennes avec les meilleurs ingrédients de saison.",
    "flavors.filter.all": "Toutes",
    "flavors.filter.classic": "Classiques",
    "flavors.filter.fruity": "Fruités",
    "flavors.filter.exotic": "Exotiques",
    "flavors.filter.seasonal": "De Saison",
    "flavors.sweetness": "Douceur",
    "flavors.ingredients": "Ingrédients",
    "flavors.allergens": "Allergènes",
    "flavors.calories": "Calories",

    // Flavor names
    "flavor.vanilla.name": "Vanille de Tahiti",
    "flavor.vanilla.desc": "Gousses de vanille de Tahiti pure infusées dans notre base crémeuse pour un classique inoubliable.",
    "flavor.vanilla.long": "Notre gelato signature à la vanille utilise des gousses de vanille de Tahiti sélectionnées à la main, connues pour leurs notes florales et fruitées. Infusé lentement pendant 24 heures dans notre base de crème fraîche.",
    "flavor.vanilla.ingredients": "Crème fraîche, lait entier, gousses de vanille de Tahiti, sucre de canne",
    "flavor.vanilla.allergens": "Lait",
    "flavor.vanilla.calories": "180 kcal par portion",

    "flavor.strawberry.name": "Fraise Sauvage",
    "flavor.strawberry.desc": "Fraises sauvages cueillies à la main dans les fermes locales, mélangées en une perfection rose rêveuse.",
    "flavor.strawberry.long": "Nous nous approvisionnons en fraises auprès des fermes de campagne chaque matin. Ces petites baies sauvages au goût intense sont délicatement incorporées dans notre base crémeuse.",
    "flavor.strawberry.ingredients": "Fraises sauvages, crème fraîche, lait entier, sucre de canne, zeste de citron",
    "flavor.strawberry.allergens": "Lait",
    "flavor.strawberry.calories": "165 kcal par portion",

    "flavor.pistachio.name": "Pistache de Sicile",
    "flavor.pistachio.desc": "Pistaches de Bronte torréfiées, moulues en un chef-d'œuvre de gelato velouté et noisetté.",
    "flavor.pistachio.long": "Fabriqué exclusivement avec des pistaches de Bronte, en Sicile — les meilleures au monde. Chaque lot nécessite des heures de torréfaction lente.",
    "flavor.pistachio.ingredients": "Pistaches de Bronte, crème fraîche, lait entier, sucre de canne",
    "flavor.pistachio.allergens": "Lait, Fruits à coque",
    "flavor.pistachio.calories": "210 kcal par portion",

    "flavor.chocolate.name": "Truffe au Chocolat Noir",
    "flavor.chocolate.desc": "Riche chocolat noir belge avec des rubans de ganache truffée.",
    "flavor.chocolate.long": "Un paradis pour les amateurs de chocolat. Nous utilisons du chocolat noir belge à 72% fondu dans notre base crémeuse, puis y tourbillonnons de la ganache truffée faite main.",
    "flavor.chocolate.ingredients": "Chocolat noir belge (72%), crème fraîche, lait entier, beurre de cacao, ganache truffée",
    "flavor.chocolate.allergens": "Lait, Soja",
    "flavor.chocolate.calories": "225 kcal par portion",

    "flavor.mango.name": "Sorbet Mangue Alphonso",
    "flavor.mango.desc": "Sorbet vibrant sans produits laitiers fait avec le roi des mangues — pur bonheur tropical.",
    "flavor.mango.long": "Ce sorbet végan présente des mangues Alphonso d'Inde, réputées comme les plus sucrées au monde. Sans crème, sans lait — juste l'intensité pure du fruit.",
    "flavor.mango.ingredients": "Purée de mangue Alphonso, sucre de canne, jus de citron vert, eau",
    "flavor.mango.allergens": "Aucun",
    "flavor.mango.calories": "140 kcal par portion",

    "flavor.blueberry.name": "Myrtille Lavande",
    "flavor.blueberry.desc": "La lavande parfumée de Provence rencontre les myrtilles éclatantes dans cette merveille saisonnière.",
    "flavor.blueberry.long": "Une création saisonnière limitée qui capture l'essence de la campagne française. Nous infusons de la lavande séchée de Provence dans notre base crémeuse.",
    "flavor.blueberry.ingredients": "Myrtilles, crème fraîche, lavande de Provence, lait entier, miel",
    "flavor.blueberry.allergens": "Lait",
    "flavor.blueberry.calories": "175 kcal par portion",

    "flavor.mint.name": "Menthe Fraîche Pépites",
    "flavor.mint.desc": "Vraies feuilles de menthe du jardin infusées dans la crème avec des pépites de chocolat artisanales.",
    "flavor.mint.long": "Oubliez la menthe artificielle — nous infusons des feuilles de menthe fraîche du jardin toute la nuit pour extraire leur saveur naturelle et délicate.",
    "flavor.mint.ingredients": "Feuilles de menthe fraîche, pépites de chocolat noir, crème fraîche, lait entier, sucre de canne",
    "flavor.mint.allergens": "Lait, Soja",
    "flavor.mint.calories": "195 kcal par portion",

    "flavor.caramel.name": "Caramel Salé",
    "flavor.caramel.desc": "Caramel au beurre avec Fleur de Sel — l'équilibre parfait entre sucré et salé.",
    "flavor.caramel.long": "Notre caramel est fait maison chaque jour, cuit à feu doux jusqu'à obtenir une couleur ambrée profonde. Tourbillonné dans le gelato vanille et fini avec de la Fleur de Sel de Guérande.",
    "flavor.caramel.ingredients": "Beurre, sucre de canne, Fleur de Sel, crème fraîche, lait entier, vanille",
    "flavor.caramel.allergens": "Lait",
    "flavor.caramel.calories": "220 kcal par portion",

    // Process
    "process.badge": "Notre Savoir-Faire",
    "process.title": "Comment Nous Créons la Magie",
    "process.subtitle": "Chaque boule raconte une histoire de passion, de patience et de perfection.",
    "process.step1.title": "Les Meilleurs Ingrédients",
    "process.step1.desc": "Chaque matin, nous sélectionnons les ingrédients saisonniers les plus frais auprès de fermes locales et de fournisseurs artisans de confiance.",
    "process.step2.title": "Turbinage Lent et Parfait",
    "process.step2.desc": "En utilisant des turbines à glace italiennes traditionnelles, nous turbinons lentement de petits lots pour créer la texture la plus dense et crémeuse.",
    "process.step3.title": "Façonné avec Amour",
    "process.step3.desc": "Nos artisans glaciers plient, tourbillonnent et superposent chaque saveur à la main — créant des textures et profils uniques.",
    "process.step4.title": "Servi avec Joie",
    "process.step4.desc": "De notre vitrine à votre cornet, chaque boule est servie avec un sourire et la promesse d'un pur bonheur.",

    // Testimonials
    "testimonials.badge": "Témoignages",
    "testimonials.title": "Aimé par des Milliers",
    "testimonials.subtitle": "Ne nous croyez pas sur parole — écoutez les amoureux du gelato qui reviennent sans cesse.",
    "testimonial.1.quote": "Le gelato à la pistache sicilienne m'a transportée directement en Italie. J'y retourne chaque semaine depuis ma découverte. Absolument incroyable !",
    "testimonial.1.name": "Sophie Laurent",
    "testimonial.1.title": "Blogueuse Culinaire",
    "testimonial.2.quote": "La meilleure glace que j'ai jamais mangée, point final. L'attention aux détails et la qualité des ingrédients sont évidentes dans chaque bouchée.",
    "testimonial.2.name": "Marco Rossini",
    "testimonial.2.title": "Client Régulier",
    "testimonial.3.quote": "En tant que personne allergique aux produits laitiers, trouver le sorbet mangue a été un rêve devenu réalité. Saveur pure et intense sans compromis !",
    "testimonial.3.name": "Aria Chen",
    "testimonial.3.title": "Cliente Satisfaite",
    "testimonial.4.quote": "La Myrtille Lavande est de la poésie dans une coupe. J'ai voyagé dans le monde entier pour goûter des gelatos, et cette petite boutique rivalise avec les meilleurs.",
    "testimonial.4.name": "James McAllister",
    "testimonial.4.title": "Écrivain Voyageur",

    // Contact
    "contact.badge": "Nous Trouver",
    "contact.title": "Venez Nous Dire Bonjour",
    "contact.subtitle": "Nous serions ravis de vous accueillir. Passez pour une boule, un sourire et un goût d'extraordinaire.",
    "contact.address.label": "Nous Trouver",
    "contact.address.value": "42 Rue du Gelato, Quartier Florence\nCentre-Ville, Suite 100",
    "contact.hours.label": "Horaires d'Ouverture",
    "contact.hours.value": "Lun-Jeu: 11h – 21h\nVen-Sam: 11h – 23h\nDim: 12h – 20h",
    "contact.phone.label": "Nous Appeler",
    "contact.phone.value": "+1 (555) 123-GELATO",
    "contact.email.label": "Email",
    "contact.email.value": "hello@gelatodreams.com",
    "contact.open": "Ouvert Maintenant",
    "contact.closed": "Actuellement Fermé",
    "contact.form.title": "Envoyez-nous un Message",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Votre Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Votre Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success.title": "Message Envoyé !",
    "contact.form.success.text": "Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.",

    // Footer
    "footer.description": "Gelato artisanal fait avec amour depuis 1987. Chaque boule est un voyage en Italie.",
    "footer.col1.title": "Liens Rapides",
    "footer.col1.link1": "Notre Menu",
    "footer.col1.link2": "À Propos",
    "footer.col1.link3": "Traiteur",
    "footer.col1.link4": "Carrières",
    "footer.col2.title": "Légal",
    "footer.col2.link1": "Politique de Confidentialité",
    "footer.col2.link2": "Conditions d'Utilisation",
    "footer.col2.link3": "Politique de Cookies",
    "footer.newsletter.title": "Restez Informé",
    "footer.newsletter.text": "Abonnez-vous pour les nouvelles saveurs de saison, événements et offres exclusives.",
    "footer.newsletter.placeholder": "votre@email.com",
    "footer.newsletter.btn": "S'abonner",
    "footer.copyright": "© 2026 Gelato Dreams. Tous droits réservés.",
    "footer.made": "Fait avec 🍦 et ❤️",

    // Misc
    "theme.light": "Mode Clair",
    "theme.dark": "Mode Sombre",
    "lang.en": "English",
    "lang.fr": "Français",
    "lang.ar": "العربية"
  },

  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.story": "قصتنا",
    "nav.flavors": "النكهات",
    "nav.process": "طريقة الصنع",
    "nav.testimonials": "آراء العملاء",
    "nav.contact": "زورونا",

    // Hero
    "hero.badge": "✨ جيلاتو حرفي منذ 1987",
    "hero.title.1": "صُنع",
    "hero.title.2": "بشغف،",
    "hero.title.3": "يُقدَّم بحب",
    "hero.cta.primary": "اكتشف النكهات",
    "hero.cta.secondary": "قصتنا",
    "hero.scroll": "مرر للاستكشاف",

    // Story
    "story.badge": "قصتنا",
    "story.title": "تقليد عائلي من الإتقان الحلو",
    "story.p1": "وُلدت في تلال توسكانا المشمسة عام 1987، بدأت جيلاتو دريمز كعربة عائلية صغيرة في شوارع فلورنسا المرصوفة بالحصى. آمنت مؤسستنا، الجدة ماريا، أن الجيلاتو ليس مجرد حلوى — بل طريقة لإسعاد الناس.",
    "story.p2": "بعد ثلاثة أجيال، لا نزال نستخدم وصفاتها الأصلية، نختار أجود المكونات من المزارعين المحليين ونقدم نفس الدفء والفرح في كل كرة نقدمها.",
    "story.counter.years": "سنوات",
    "story.counter.flavors": "نكهة",
    "story.counter.customers": "عميل سعيد",

    // Flavors
    "flavors.badge": "قائمتنا",
    "flavors.title": "اكتشف نكهاتنا الحرفية",
    "flavors.subtitle": "كل نكهة مصنوعة يدوياً يومياً باستخدام الأساليب الإيطالية التقليدية وأجود المكونات الموسمية.",
    "flavors.filter.all": "الكل",
    "flavors.filter.classic": "كلاسيك",
    "flavors.filter.fruity": "فواكه",
    "flavors.filter.exotic": "غريبة",
    "flavors.filter.seasonal": "موسمية",
    "flavors.sweetness": "الحلاوة",
    "flavors.ingredients": "المكونات",
    "flavors.allergens": "مسببات الحساسية",
    "flavors.calories": "السعرات",

    "flavor.vanilla.name": "فانيليا تاهيتي",
    "flavor.vanilla.desc": "حبوب فانيليا تاهيتي النقية منقوعة في قاعدتنا الكريمية لكلاسيكية لا تُنسى.",
    "flavor.vanilla.long": "يستخدم جيلاتو الفانيليا المميز لدينا حبوب فانيليا تاهيتي المختارة يدوياً، المعروفة بنكهاتها الزهرية والفاكهية.",
    "flavor.vanilla.ingredients": "كريمة طازجة، حليب كامل، حبوب فانيليا تاهيتي، سكر قصب",
    "flavor.vanilla.allergens": "ألبان",
    "flavor.vanilla.calories": "180 سعرة حرارية لكل حصة",

    "flavor.strawberry.name": "فراولة برية",
    "flavor.strawberry.desc": "فراولة برية مقطوفة يدوياً من المزارع المحلية ممزوجة في كمال وردي حالم.",
    "flavor.strawberry.long": "نحصل على الفراولة من مزارع الريف كل صباح. هذه التوتات الصغيرة ذات النكهة المكثفة.",
    "flavor.strawberry.ingredients": "فراولة برية، كريمة طازجة، حليب كامل، سكر قصب، قشر ليمون",
    "flavor.strawberry.allergens": "ألبان",
    "flavor.strawberry.calories": "165 سعرة حرارية لكل حصة",

    "flavor.pistachio.name": "فستق صقلي",
    "flavor.pistachio.desc": "فستق برونتي المحمص مطحون في تحفة جيلاتو مخملية.",
    "flavor.pistachio.long": "مصنوع حصرياً من فستق برونتي، صقلية — الأفضل في العالم.",
    "flavor.pistachio.ingredients": "فستق برونتي، كريمة طازجة، حليب كامل، سكر قصب",
    "flavor.pistachio.allergens": "ألبان، مكسرات",
    "flavor.pistachio.calories": "210 سعرة حرارية لكل حصة",

    "flavor.chocolate.name": "ترافل شوكولاتة داكنة",
    "flavor.chocolate.desc": "شوكولاتة بلجيكية داكنة غنية مع شرائط من غاناش الترافل.",
    "flavor.chocolate.long": "جنة لعشاق الشوكولاتة. نستخدم شوكولاتة بلجيكية داكنة 72%.",
    "flavor.chocolate.ingredients": "شوكولاتة بلجيكية داكنة (72%)، كريمة طازجة، حليب كامل، زبدة كاكاو، غاناش ترافل",
    "flavor.chocolate.allergens": "ألبان، صويا",
    "flavor.chocolate.calories": "225 سعرة حرارية لكل حصة",

    "flavor.mango.name": "سوربيه مانجو ألفونسو",
    "flavor.mango.desc": "سوربيه نابض بالحياة خالٍ من الألبان مصنوع من ملك المانجو.",
    "flavor.mango.long": "هذا السوربيه النباتي يضم مانجو ألفونسو من الهند، المعروفة بأنها أحلى مانجو على وجه الأرض.",
    "flavor.mango.ingredients": "بوريه مانجو ألفونسو، سكر قصب، عصير ليمون، ماء",
    "flavor.mango.allergens": "لا يوجد",
    "flavor.mango.calories": "140 سعرة حرارية لكل حصة",

    "flavor.blueberry.name": "توت أزرق لافندر",
    "flavor.blueberry.desc": "لافندر بروفانس العطري يلتقي بالتوت الأزرق في هذا الإبداع الموسمي.",
    "flavor.blueberry.long": "إبداع موسمي محدود يجسد جوهر الريف الفرنسي.",
    "flavor.blueberry.ingredients": "توت أزرق، كريمة طازجة، لافندر بروفانس، حليب كامل، عسل",
    "flavor.blueberry.allergens": "ألبان",
    "flavor.blueberry.calories": "175 سعرة حرارية لكل حصة",

    "flavor.mint.name": "نعناع طازج بالشوكولاتة",
    "flavor.mint.desc": "أوراق نعناع حقيقية من الحديقة منقوعة في الكريمة مع رقائق شوكولاتة يدوية.",
    "flavor.mint.long": "انسَ النعناع الاصطناعي — ننقع أوراق النعناع الطازجة من الحديقة طوال الليل.",
    "flavor.mint.ingredients": "أوراق نعناع طازجة، رقائق شوكولاتة داكنة، كريمة طازجة، حليب كامل، سكر قصب",
    "flavor.mint.allergens": "ألبان، صويا",
    "flavor.mint.calories": "195 سعرة حرارية لكل حصة",

    "flavor.caramel.name": "كراميل مالح",
    "flavor.caramel.desc": "كراميل بالزبدة مع فلور دي سيل — التوازن المثالي بين الحلو والمالح.",
    "flavor.caramel.long": "كراميلنا يُصنع يدوياً يومياً، يُطهى ببطء حتى يصل إلى لون كهرماني عميق.",
    "flavor.caramel.ingredients": "زبدة، سكر قصب، فلور دي سيل، كريمة طازجة، حليب كامل، فانيليا",
    "flavor.caramel.allergens": "ألبان",
    "flavor.caramel.calories": "220 سعرة حرارية لكل حصة",

    // Process
    "process.badge": "صناعتنا",
    "process.title": "كيف نصنع السحر",
    "process.subtitle": "كل كرة تروي قصة شغف وصبر وإتقان.",
    "process.step1.title": "نختار الأفضل",
    "process.step1.desc": "كل صباح، نختار بعناية أطزج المكونات الموسمية من المزارع المحلية والموردين الحرفيين الموثوقين.",
    "process.step2.title": "خلط بطيء ومثالي",
    "process.step2.desc": "باستخدام آلات التجميد الإيطالية التقليدية، نخلط ببطء دفعات صغيرة لخلق أكثف وأكرم قوام ممكن.",
    "process.step3.title": "صُنع بحب",
    "process.step3.desc": "حرفيو الجيلاتو لدينا يطوون ويدورون ويرتبون كل نكهة يدوياً — يبتكرون قوامات وملامح نكهة فريدة.",
    "process.step4.title": "يُقدَّم بفرح",
    "process.step4.desc": "من واجهة العرض إلى مخروطك، كل كرة تُقدم بابتسامة ووعد بالسعادة الخالصة.",

    // Testimonials
    "testimonials.badge": "آراء العملاء",
    "testimonials.title": "محبوب من الآلاف",
    "testimonials.subtitle": "لا تأخذ كلمتنا فقط — استمع لعشاق الجيلاتو الذين يعودون دائماً.",
    "testimonial.1.quote": "جيلاتو الفستق الصقلي نقلني مباشرة إلى إيطاليا. أعود كل أسبوع منذ اكتشاف هذه الجوهرة!",
    "testimonial.1.name": "سوفي لوران",
    "testimonial.1.title": "مدونة طعام",
    "testimonial.2.quote": "أفضل آيس كريم تذوقته على الإطلاق. الاهتمام بالتفاصيل وجودة المكونات واضحة في كل قضمة.",
    "testimonial.2.name": "ماركو روسيني",
    "testimonial.2.title": "عميل دائم",
    "testimonial.3.quote": "كشخص يعاني من حساسية الألبان، كان إيجاد سوربيه المانجو حلماً تحقق. نكهة نقية ومكثفة!",
    "testimonial.3.name": "آريا تشين",
    "testimonial.3.title": "عميلة سعيدة",
    "testimonial.4.quote": "التوت الأزرق واللافندر شعر في كوب. سافرت حول العالم لتذوق الجيلاتو، وهذا المتجر ينافس الأفضل.",
    "testimonial.4.name": "جيمس ماكاليستر",
    "testimonial.4.title": "كاتب سفر",

    // Contact
    "contact.badge": "زورونا",
    "contact.title": "تعالوا وألقوا التحية",
    "contact.subtitle": "نحب أن نرحب بكم. مروا لكرة جيلاتو وابتسامة وتذوق شيء استثنائي.",
    "contact.address.label": "اعثر علينا",
    "contact.address.value": "42 شارع الجيلاتو، حي فلورنسا\nوسط المدينة، جناح 100",
    "contact.hours.label": "ساعات العمل",
    "contact.hours.value": "الإثنين-الخميس: 11ص – 9م\nالجمعة-السبت: 11ص – 11م\nالأحد: 12م – 8م",
    "contact.phone.label": "اتصل بنا",
    "contact.phone.value": "+1 (555) 123-GELATO",
    "contact.email.label": "البريد الإلكتروني",
    "contact.email.value": "hello@gelatodreams.com",
    "contact.open": "مفتوح الآن",
    "contact.closed": "مغلق حالياً",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.name": "اسمك",
    "contact.form.email": "بريدك الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.sending": "جاري الإرسال...",
    "contact.form.success.title": "تم إرسال الرسالة!",
    "contact.form.success.text": "شكراً لتواصلكم. سنرد عليكم خلال 24 ساعة.",

    // Footer
    "footer.description": "جيلاتو حرفي مصنوع بحب منذ 1987. كل كرة هي رحلة إلى إيطاليا.",
    "footer.col1.title": "روابط سريعة",
    "footer.col1.link1": "قائمتنا",
    "footer.col1.link2": "من نحن",
    "footer.col1.link3": "خدمات التموين",
    "footer.col1.link4": "وظائف",
    "footer.col2.title": "قانوني",
    "footer.col2.link1": "سياسة الخصوصية",
    "footer.col2.link2": "شروط الخدمة",
    "footer.col2.link3": "سياسة ملفات تعريف الارتباط",
    "footer.newsletter.title": "ابقَ على اطلاع",
    "footer.newsletter.text": "اشترك للحصول على أحدث النكهات الموسمية والفعاليات والعروض الحصرية.",
    "footer.newsletter.placeholder": "بريدك@الإلكتروني.com",
    "footer.newsletter.btn": "اشترك",
    "footer.copyright": "© 2026 جيلاتو دريمز. جميع الحقوق محفوظة.",
    "footer.made": "صُنع بـ 🍦 و ❤️",

    // Misc
    "theme.light": "الوضع الفاتح",
    "theme.dark": "الوضع الداكن",
    "lang.en": "English",
    "lang.fr": "Français",
    "lang.ar": "العربية"
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('gelato-lang') || 'en';
    this.listeners = [];
  }

  t(key) {
    return translations[this.currentLang]?.[key] || translations['en']?.[key] || key;
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('gelato-lang', lang);

    // Set direction for RTL languages
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Update all translatable elements
    this.updateDOM();

    // Notify listeners
    this.listeners.forEach(fn => fn(lang));
  }

  updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.t(key);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', this.t(key));
    });
  }

  onLanguageChange(fn) {
    this.listeners.push(fn);
  }

  init() {
    this.setLanguage(this.currentLang);
  }
}

// Export singleton
window.i18n = new I18n();
