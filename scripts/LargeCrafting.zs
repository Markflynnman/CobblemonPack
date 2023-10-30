import mods.create.MechanicalCrafterManager;
import crafttweaker.api.recipe.IRecipeManager;

//Tempad:
//Extended Crafting
mods.extendedcrafting.TableCrafting.addShaped("ec/tempad/he_who_remains_tempad", <item:tempad:he_who_remains_tempad>, [
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/netherite>, <item:minecraft:beacon>, <tag:items:forge:storage_blocks/netherite>, <item:minecraft:air>], 
    [<tag:items:forge:storage_blocks/netherite>, <item:extendedcrafting:flux_star>, <tag:items:forge:glass/tinted>, <item:extendedcrafting:flux_star>, <tag:items:forge:storage_blocks/netherite>], 
    [<tag:items:forge:storage_blocks/nether_star>, <tag:items:forge:glass/tinted>, <item:tempad:tempad>, <tag:items:forge:glass/tinted>, <tag:items:forge:storage_blocks/nether_star>], 
    [<tag:items:forge:storage_blocks/netherite>, <item:extendedcrafting:flux_star>, <tag:items:forge:glass/tinted>, <item:extendedcrafting:flux_star>, <tag:items:forge:storage_blocks/netherite>], 
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/netherite>, <tag:items:forge:storage_blocks/ender_star>, <tag:items:forge:storage_blocks/netherite>, <item:minecraft:air>]]);

//Create Mechanical Crafter
<recipetype:create:mechanical_crafting>.addRecipe("create/tempad/he_who_remains_tempad", <item:tempad:he_who_remains_tempad>, [
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/netherite>, <item:minecraft:beacon>, <tag:items:forge:storage_blocks/netherite>, <item:minecraft:air>], 
    [<tag:items:forge:storage_blocks/netherite>, <item:extendedcrafting:flux_star>, <tag:items:forge:glass/tinted>, <item:extendedcrafting:flux_star>, <tag:items:forge:storage_blocks/netherite>], 
    [<tag:items:forge:storage_blocks/nether_star>, <tag:items:forge:glass/tinted>, <item:tempad:tempad>, <tag:items:forge:glass/tinted>, <tag:items:forge:storage_blocks/nether_star>], 
    [<tag:items:forge:storage_blocks/netherite>, <item:extendedcrafting:flux_star>, <tag:items:forge:glass/tinted>, <item:extendedcrafting:flux_star>, <tag:items:forge:storage_blocks/netherite>], 
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/netherite>, <tag:items:forge:storage_blocks/ender_star>, <tag:items:forge:storage_blocks/netherite>, <item:minecraft:air>]]);


/*craftingTable.addShaped("create:mechanical_crafting/crushing_wheel", <item:create:crushing_wheel> * 2, [
    [IIngredientEmpty.getInstance(), <item:create:andesite_alloy>, <item:create:andesite_alloy>, <item:create:andesite_alloy>, IIngredientEmpty.getInstance()], 
    [<item:create:andesite_alloy>, <item:create:andesite_alloy>, <tag:items:minecraft:planks>, <item:create:andesite_alloy>, <item:create:andesite_alloy>], 
    [<item:create:andesite_alloy>, <tag:items:minecraft:planks>, <tag:items:forge:stone>, <tag:items:minecraft:planks>, <item:create:andesite_alloy>], 
    [<item:create:andesite_alloy>, <item:create:andesite_alloy>, <tag:items:minecraft:planks>, <item:create:andesite_alloy>, <item:create:andesite_alloy>], 
    [IIngredientEmpty.getInstance(), <item:create:andesite_alloy>, <item:create:andesite_alloy>, <item:create:andesite_alloy>, IIngredientEmpty.getInstance()]]);
*/