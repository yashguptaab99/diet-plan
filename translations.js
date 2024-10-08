const translations = {
    en: {
        title: "Weekly Diet Plan",
        today: "Today",
        showAll: "Show All",
        breakfast: "Breakfast",
        midMorningSnack: "Mid-Morning Snack",
        lunch: "Lunch",
        preWorkoutSnack: "Pre-Workout Snack",
        postWorkout: "Post-Workout",
        dinner: "Dinner",
        lightSnack: "Light Snack",
        selectOption: "Select an Option",
        supply360: "1 Serving of supply® 360 + 1 Fruit",
        cappuccino: "300-400 ml Cappuccino Coffee, 1 Fruit",
        wheyProteinShake: "24g Whey Protein Shake",
        preWorkoutDrink: "1 Serving of Pre-Workout Drink, 1 Fruit",
        wheyProteinWithWater: "1 Scoop of Whey Protein with Water",
        mealTimes: {
            monday: {
                breakfast: "Breakfast (10:30 AM)",
                midMorningSnack: "Mid-Morning Snack (1:00 PM)",
                lunch: "Lunch (2:00 PM)",
                preWorkoutSnack: "Pre-Workout Snack (4:00 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (8:00 PM)",
                lightSnack: "Light Snack (10:30 PM)"
            },
            tuesday: {
                midMorningSnack: "Mid-Morning Snack (11:00 AM)",
                lunch: "Lunch (1:30 PM)",
                preWorkoutSnack: "Pre-Workout Snack (3:30 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (7:30 PM)",
                lightSnack: "Light Snack (9:30 PM)"
            },
            wednesday: {
                breakfast: "Breakfast (10:30 AM)",
                midMorningSnack: "Mid-Morning Snack (1:00 PM)",
                lunch: "Lunch (2:00 PM)",
                preWorkoutSnack: "Pre-Workout Snack (4:00 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (8:00 PM)",
                lightSnack: "Light Snack (10:30 PM)"
            },
            thursday: {
                midMorningSnack: "Mid-Morning Snack (11:00 AM)",
                lunch: "Lunch (1:30 PM)",
                preWorkoutSnack: "Pre-Workout Snack (3:30 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (7:30 PM)",
                lightSnack: "Light Snack (9:30 PM)"
            },
            friday: {
                breakfast: "Breakfast (10:30 AM)",
                midMorningSnack: "Mid-Morning Snack (1:00 PM)",
                lunch: "Lunch (2:00 PM)",
                preWorkoutSnack: "Pre-Workout Snack (4:00 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (8:00 PM)",
                lightSnack: "Light Snack (10:30 PM)"
            },
            saturday: {
                midMorningSnack: "Mid-Morning Snack (11:00 AM)",
                lunch: "Lunch (1:30 PM)",
                preWorkoutSnack: "Pre-Workout Snack (3:30 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (7:30 PM)",
                lightSnack: "Light Snack (9:30 PM)"
            },
            sunday: {
                breakfast: "Breakfast (10:30 AM)",
                midMorningSnack: "Mid-Morning Snack (1:00 PM)",
                lunch: "Lunch (2:00 PM)",
                preWorkoutSnack: "Pre-Workout Snack (4:00 PM)",
                postWorkout: "Post-Workout (5:30 PM)",
                dinner: "Dinner (8:00 PM)",
                lightSnack: "Light Snack (10:30 PM)"
            }
        },
        days: {
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday"
        },
        mealOptions: {
            breakfast: [
                "300-400 ml Milk with Bournvita, 2 Almonds, 1 Whole Wheat Toast, 1 Boiled Egg",
                "Paneer Scramble with Spinach (20g protein) 100g paneer scrambled with spinach, onions, and tomatoes.",
                "Oats with Berries and Almonds (15g protein) Oats cooked with 300ml milk, topped with berries and 5-6 almonds.",
                "Egg White Veggie Omelette (25g protein) 4 egg whites with bell peppers, onions, and spinach.",
                "Soya Chunks and Quinoa Bowl (20g protein) 100g cooked soya chunks mixed with 1/2 cup quinoa, sautéed veggies.",
                "Greek Yogurt Parfait (20g protein) 200g Greek yogurt with mixed berries, chia seeds, and almonds.",
                "Chickpea Pancakes (15g protein) 100g chickpea flour pancakes with herbs and spices.",
                "Boiled Eggs with Toast (20g protein) 2 boiled eggs with whole wheat toast.",
                "Masala Oats with Paneer (18g protein) Spicy oats cooked with 50g crumbled paneer, carrots, and peas.",
                "Mung Dal Chilla (Pancake) (15g protein) 100g mung dal batter with chopped veggies, pan-fried."
            ],
            lunchDinner: [
                "100g Paneer Salad, 1 Multigrain Roti, Mixed Veg Salad",
                "Rajma (Kidney Bean) Curry with Rice (18g protein) 1 cup rajma curry with 1/2 cup steamed rice.",
                "Paneer Curry with Chapati (20g protein) 100g paneer cooked in curry served with 1 chapati.",
                "Chana Masala with Rice (20g protein) 1 cup chana masala (chickpea curry) with 1/2 cup rice.",
                "Soya Chunks Pulao (20g protein) 1/2 cup rice cooked with 50g soya chunks and vegetables.",
                "Vegetable Khichdi with Curd (18g protein) 1 cup vegetable khichdi made with dal and rice, served with curd.",
                "Egg Curry with Chapati (20g protein) 2 boiled eggs cooked in curry sauce with 1 chapati.",
                "Tofu and Mixed Vegetable Stir-fry with Rice (20g protein) 100g tofu with veggies, served with 1/2 cup steamed rice.",
                "Paneer Makhani with Chapati (20g protein) 100g paneer in a rich tomato-based gravy with 1 chapati.",
                "Lentil (Dal) Soup with Rice (18g protein) 1 cup masoor dal soup with 1/2 cup rice.",
                "Vegetable Pulao with Paneer (18g protein) 1/2 cup rice with paneer cubes and mixed vegetables.",
                "100g Chickpea Chaat with Cucumber, Tomato, and Spices (Chickpea Salad)",
                "100g Paneer Tikka, 1 Cup Quinoa, Mixed Veggies",
                "100g Sprouts Salad with Mixed Vegetables, Lemon, and Spices",
                "100g Soya Chunks Curry, 1 Multigrain Roti, Steamed Vegetables",
                "100g Masoor Dal, 1 Cup Quinoa, Mixed Veggies",
                "100g Soya Chunks with Spinach, 1 Multigrain Roti, Mixed Salad",
                "Kadhi with Rice (12g protein) Yogurt-based curry with besan served with 1 cup rice.",
                "Paneer Bhurji with 1 Chapati (20g protein) Scrambled paneer with spices and a chapati.",
                "Vegetable Khichdi with Curd (15g protein) Rice and lentil khichdi with mixed vegetables, served with curd.",
                "Soya Chunks Biryani with Raita (20g protein) Soya chunks cooked with rice and served with raita.",
                "Mixed Vegetable Sabzi with 2 Chapatis (12g protein) Mixed vegetables cooked with Indian spices and served with 2 chapatis.",
                "Masoor Dal with Rice (15g protein) Red lentil curry with 1 cup rice.",
                "Methi Malai Paneer with 1 Chapati (20g protein) Fenugreek leaves and paneer in a creamy gravy with a chapati.",
                "Aloo Gobi with Rice (10g protein) Potatoes and cauliflower cooked with spices, served with rice.",
                "Daal Palak with Roti (15g protein) Spinach and lentil curry with 1 roti.",
                "Paneer Kathi Roll (20g protein) Whole wheat roti stuffed with paneer and vegetables.",
                "100g Soya Chunks Curry, 1/2 Cup Brown Rice, Steamed Vegetables"
            ],
            snacks: [
                "1 Small Bowl of Greek Yogurt with 1 tsp Honey",
                "Roasted Chickpeas with Spices",
                "1 Small Bowl of Roasted Makhanas (Fox Nuts)",
                "1 Small Bowl of Sprouted Moong with Spices",
                "1 Small Bowl of Cottage Cheese with Cucumber",
                "Roasted Chana with Spices (15g protein) Roasted chickpeas with a sprinkle of chaat masala.",
                "Cucumber and Carrot Sticks with Hummus Sliced cucumber and carrot sticks with 2 tbsp hummus.",
                "Fruit Salad with Chaat Masala A bowl of mixed fruits with chaat masala.",
                "Murmura (Puffed Rice) with Peanuts Puffed rice mixed with roasted peanuts and spices.",
                "Masala Oats Pancake (10g protein) Savory pancake made with oats and vegetables.",
                "Sprouted Moong Bhel (12g protein) Sprouted moong"
            ]
        }
    },
    hi: {
        title: "साप्ताहिक आहार योजना",
        today: "आज",
        showAll: "सभी दिखाएँ",
        breakfast: "नाश्ता",
        midMorningSnack: "मध्य सुबह का नाश्ता",
        lunch: "दोपहर का भोजन",
        preWorkoutSnack: "पूर्व-व्यायाम नाश्ता",
        postWorkout: "व्यायाम के बाद",
        dinner: "रात का खाना",
        lightSnack: "हल्का नाश्ता",
        selectOption: "एक विकल्प चुनें",
        supply360: "1 सर्विंग सप्लाई® 360 + 1 फल",
        cappuccino: "300-400 मिली कैप्पुचीनो कॉफी, 1 फल",
        wheyProteinShake: "24 ग्राम व्हे प्रोटीन शेक",
        preWorkoutDrink: "1 सर्विंग प्री-वर्कआउट ड्रिंक, 1 फल",
        wheyProteinWithWater: "1 स्कूप व्हे प्रोटीन पानी के साथ",
        mealTimes: {
            monday: {
                breakfast: "नाश्ता (10:30 बजे)",
                midMorningSnack: "मध्य-सुबह का नाश्ता (1:00 बजे)",
                lunch: "दोपहर का भोजन (2:00 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (4:00 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (8:00 बजे)",
                lightSnack: "हल्का नाश्ता (10:30 बजे)"
            },
            tuesday: {
                midMorningSnack: "मध्य-सुबह का नाश्ता (11:00 बजे)",
                lunch: "दोपहर का भोजन (1:30 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (3:30 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (7:30 बजे)",
                lightSnack: "हल्का नाश्ता (9:30 बजे)"
            },
            wednesday: {
                breakfast: "नाश्ता (10:30 बजे)",
                midMorningSnack: "मध्य-सुबह का नाश्ता (1:00 बजे)",
                lunch: "दोपहर का भोजन (2:00 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (4:00 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (8:00 बजे)",
                lightSnack: "हल्का नाश्ता (10:30 बजे)"
            },
            thursday: {
                midMorningSnack: "मध्य-सुबह का नाश्ता (11:00 बजे)",
                lunch: "दोपहर का भोजन (1:30 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (3:30 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (7:30 बजे)",
                lightSnack: "हल्का नाश्ता (9:30 बजे)"
            },
            friday: {
                breakfast: "नाश्ता (10:30 बजे)",
                midMorningSnack: "मध्य-सुबह का नाश्ता (1:00 बजे)",
                lunch: "दोपहर का भोजन (2:00 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (4:00 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (8:00 बजे)",
                lightSnack: "हल्का नाश्ता (10:30 बजे)"
            },
            saturday: {
                midMorningSnack: "मध्य-सुबह का नाश्ता (11:00 बजे)",
                lunch: "दोपहर का भोजन (1:30 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (3:30 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (7:30 बजे)",
                lightSnack: "हल्का नाश्ता (9:30 बजे)"
            },
            sunday: {
                breakfast: "नाश्ता (10:30 बजे)",
                midMorningSnack: "मध्य-सुबह का नाश्ता (1:00 बजे)",
                lunch: "दोपहर का भोजन (2:00 बजे)",
                preWorkoutSnack: "पूर्व-व्यायाम नाश्ता (4:00 बजे)",
                postWorkout: "व्यायाम के बाद (5:30 बजे)",
                dinner: "रात का भोजन (8:00 बजे)",
                lightSnack: "हल्का नाश्ता (10:30 बजे)"
            }
        },
        days: {
            sunday: "रविवार",
            monday: "सोमवार",
            tuesday: "मंगलवार",
            wednesday: "बुधवार",
            thursday: "गुरुवार",
            friday: "शुक्रवार",
            saturday: "शनिवार"
        },
        mealOptions: {
            breakfast: [
                "300-400 मिली दूध बौर्नविटा के साथ, 2 बादाम, 1 साबुत गेहूं की टोस्ट, 1 उबला अंडा",
                "पनीर पकोड़ी पालक के साथ (20 ग्राम प्रोटीन) 100 ग्राम पनीर पालक, प्याज और टमाटर के साथ तली हुई।",
                "जई और जामुन और बादाम (15 ग्राम प्रोटीन) 300 मिली दूध के साथ पकाया गया ओट्स, जामुन और 5-6 बादाम के साथ टॉप किया गया।",
                "अंडे का सफेद सब्जी ऑमलेट (25 ग्राम प्रोटीन) 4 अंडे के सफेद मिर्च, प्याज और पालक के साथ।",
                "सोया चंक्स और क्विनोआ कटोरा (20 ग्राम प्रोटीन) 100 ग्राम पके हुए सोया चंक्स 1/2 कप क्विनोआ, तली हुई सब्जियों के साथ मिश्रित।",
                "ग्रीक योगर्ट पार्फेट (20 ग्राम प्रोटीन) 200 ग्राम ग्रीक योगर्ट जामुन, चिया बीज, और बादाम के साथ।",
                "चिकपी पेनकेक्स (15 ग्राम प्रोटीन) 100 ग्राम चने का आटा पेनकेक्स जड़ी बूटियों और मसालों के साथ।",
                "टोस्ट के साथ उबले हुए अंडे (20 ग्राम प्रोटीन) 2 उबले हुए अंडे साबुत गेहूं के टोस्ट के साथ।",
                "पनीर के साथ मसाला ओट्स (18 ग्राम प्रोटीन) मसालेदार ओट्स पका हुआ 50 ग्राम क्रम्बल्ड पनीर, गाजर और मटर के साथ।",
                "मूंग दाल चिल्ला (पैनकेक) (15 ग्राम प्रोटीन) 100 ग्राम मूंग दाल का मिश्रण कटा हुआ सब्जियों के साथ, पैन-तली हुई।"
            ],
            lunchDinner: [
                "100 ग्राम पनीर सलाद, 1 मल्टीग्रेन रोटी, मिक्स्ड वेज सलाद",
                "राजमा करी चावल के साथ (18 ग्राम प्रोटीन) 1 कप राजमा करी 1/2 कप भाप में पकाए चावल के साथ।",
                "चपाती के साथ पनीर करी (20 ग्राम प्रोटीन) 100 ग्राम पनीर करी में पकाया हुआ 1 चपाती के साथ।",
                "चने का मसाला चावल के साथ (20 ग्राम प्रोटीन) 1 कप चना मसाला (चना करी) 1/2 कप चावल के साथ।",
                "सोया चंक्स पुलाव (20 ग्राम प्रोटीन) 1/2 कप चावल 50 ग्राम सोया चंक्स और सब्जियों के साथ पकाया।",
                "दही के साथ वेजिटेबल खिचड़ी (18 ग्राम प्रोटीन) 1 कप सब्जी खिचड़ी दाल और चावल से बनी, दही के साथ परोसी जाती है।",
                "अंडा करी चपाती के साथ (20 ग्राम प्रोटीन) 2 उबले अंडे करी सॉस में पकाया गया 1 चपाती के साथ।",
                "टॉफू और मिक्स वेजिटेबल स्टिर-फ्राई चावल के साथ (20 ग्राम प्रोटीन) 100 ग्राम टॉफू सब्जियों के साथ, 1/2 कप भाप में पकाए चावल के साथ।",
                "पनीर मखानी चपाती के साथ (20 ग्राम प्रोटीन) 100 ग्राम पनीर टमाटर-आधारित ग्रेवी में समृद्ध 1 चपाती के साथ।",
                "दाल सूप चावल के साथ (18 ग्राम प्रोटीन) 1 कप मसूर दाल सूप 1/2 कप चावल के साथ।",
                "पनीर के साथ वेजिटेबल पुलाव (18 ग्राम प्रोटीन) 1/2 कप चावल पनीर के क्यूब्स और मिक्स सब्जियों के साथ।",
                "100 ग्राम चना चाट खीरा, टमाटर और मसालों के साथ (चना सलाद)",
                "100 ग्राम पनीर टिक्का, 1 कप क्विनोआ, मिक्स वेजिटेबल्स",
                "100 ग्राम अंकुरित सलाद मिक्स सब्जियों, नींबू, और मसालों के साथ",
                "100 ग्राम सोया चंक्स करी, 1 मल्टीग्रेन रोटी, स्टीम्ड सब्जियां",
                "100 ग्राम मसूर दाल, 1 कप क्विनोआ, मिक्स वेजिटेबल्स",
                "100 ग्राम सोया चंक्स पालक के साथ, 1 मल्टीग्रेन रोटी, मिक्स सलाद",
                "कढ़ी चावल के साथ (12 ग्राम प्रोटीन) बेसन के साथ दही-आधारित करी 1 कप चावल के साथ परोसी जाती है।",
                "पनीर भुर्जी 1 चपाती के साथ (20 ग्राम प्रोटीन) मसालों के साथ तली हुई पनीर और एक चपाती।",
                "दही के साथ वेजिटेबल खिचड़ी (15 ग्राम प्रोटीन) चावल और दाल की खिचड़ी मिक्स सब्जियों के साथ, दही के साथ परोसी जाती है।",
                "रायता के साथ सोया चंक्स बिरयानी (20 ग्राम प्रोटीन) सोया चंक्स चावल के साथ पकाया जाता है और रायता के साथ परोसा जाता है।",
                "मिक्स्ड वेजिटेबल सब्जी 2 चपातियों के साथ (12 ग्राम प्रोटीन) भारतीय मसालों के साथ पकाया गया मिक्स सब्जियां और 2 चपातियों के साथ परोसी जाती है।",
                "मसूर दाल चावल के साथ (15 ग्राम प्रोटीन) 1 कप चावल के साथ लाल मसूर दाल करी।",
                "मेथी मलाई पनीर 1 चपाती के साथ (20 ग्राम प्रोटीन) फेनुग्रीक के पत्तों और मलाईदार ग्रेवी में पनीर एक चपाती के साथ।",
                "आलू गोभी चावल के साथ (10 ग्राम प्रोटीन) मसालों के साथ पकाए गए आलू और फूलगोभी, चावल के साथ परोसी जाती है।",
                "दाल पालक रोटी के साथ (15 ग्राम प्रोटीन) पालक और दाल की करी एक रोटी के साथ।",
                "पनीर काठी रोल (20 ग्राम प्रोटीन) साबुत गेहूं की रोटी पनीर और सब्जियों के साथ भरी हुई।",
                "100 ग्राम सोया चंक्स करी, 1/2 कप ब्राउन राइस, स्टीम्ड वेजिटेबल्स"
            ],
            snacks: [
                "1 छोटा कटोरा ग्रीक योगर्ट 1 चम्मच शहद के साथ",
                "मसालों के साथ भुना हुआ चना",
                "1 छोटा कटोरा भुना हुआ मखाना (फॉक्स नट्स)",
                "1 छोटा कटोरा अंकुरित मूंग मसालों के साथ",
                "खीरे के साथ पनीर का छोटा कटोरा",
                "मसालों के साथ भुना चना (15 ग्राम प्रोटीन) मसालों के साथ भुना हुआ चना।",
                "खीरा और गाजर की स्टिक हम्मस के साथ कटी हुई खीरा और गाजर की स्टिक 2 टेबलस्पून हम्मस के साथ।",
                "फल सलाद चाट मसाला के साथ विभिन्न फलों का कटोरा चाट मसाला के साथ।",
                "मुरमुरा (फुलाया हुआ चावल) मूंगफली के साथ फुलाया हुआ चावल भुनी हुई मूंगफली और मसालों के साथ।",
                "मसाला ओट्स पेनकेक (10 ग्राम प्रोटीन) सब्जियों और मसालों के साथ बना नमकीन पेनकेक।",
                "अंकुरित मूंग भेल (12 ग्राम प्रोटीन) अंकुरित मूंग"
            ]
        }
    }
};
