export const recipe = `
<script type="application/ld+json"> // визначаємо тип скрипта
  {
    "@context": "https://schema.org/", // вказуємо контекст схеми
    "@type": "Recipe", // визначаємо тип схеми на основі документації schema.org
    "name": "Apple Pie by Grandma", // описуємо схему
    "author": "Elaine Smith",
    "image": "https://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
    "description": "A classic apple pie.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "7462",
      "bestRating": "5",
      "worstRating": "1"
    },
    "prepTime": "PT30M",
    "totalTime": "PT1H30M",
    "recipeYield": "8",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "512 calories"
    },
    "recipeIngredient": [
      "1 box refrigerated pie crusts, softened as directed on box",
      "6 cups thinly sliced, peeled apples (6 medium)"
    ]
  }
</script>`
