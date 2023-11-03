const Material = require("./models/Material");

// Calculate carbon footprint percentage based on materials and weight
async function calculateCarbonFootprintPercentage(materials, weight) {
  let totalCarbonFootprint = 0;
  let totalMaterialsCount = 0;

  for (let i = 0; i < materials.length; i++) {
    const material = materials[i];
    try {
      const materialData = await Material.findOne({ name: material });
      if (materialData) {
        totalCarbonFootprint += materialData.carbonFootprint;
        totalCarbonFootprint *= weight / materials.length;
        console.log(totalCarbonFootprint)
        totalMaterialsCount++;
      } else {
        // Handle unknown materials or assign a default value
        totalCarbonFootprint += 0;
        totalMaterialsCount++;
      }
    } catch (error) {
      // Handle any errors that occurred during database retrieval
      console.error("Error retrieving material data:", error);
      totalCarbonFootprint += 0;
      totalMaterialsCount++;
    }
  }

  const carbonFootprintPercentage = (totalCarbonFootprint / totalMaterialsCount) * weight;

  return carbonFootprintPercentage;
}

module.exports = {
  calculateCarbonFootprintPercentage,
};
