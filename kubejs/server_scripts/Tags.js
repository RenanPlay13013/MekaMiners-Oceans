ServerEvents.tags('item', event => {

//Tornando MekaHammer uma Wrench
const tags = ['forge:tools/wrench', 'forge:tools/wrenches']
tags.forEach(TAGS =>{ 
event.add(`${TAGS}`,'mekamod:meka_paxel')
})
})