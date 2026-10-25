// Catálogo Oficial de 80 materiales nativos .SKM extraídos y emparejados desde EGGER FV.zip
const DEFAULT_MATERIALS = [
    {
        "id":  "fp_skm_55",
        "code":  "160NAT",
        "title":  "Venezia",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_55_160NAT_Venezia.jpg",
        "skmPath":  "assets/skm/fp_55_160NAT_Venezia.skm",
        "originalSkmName":  "160NAT Venezia.skm",
        "desc":  "Es un diseño que combina el atractivo de un efecto patinado y el aspecto de una madera natural, otorgándole una gran expresividad con sus matices creando combinaciones con distintos materiales y colores. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001500,
        "similType":  "Simil Madera",
        "toneLum":  233.7,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_54",
        "code":  "047NAT",
        "title":  "Teka Artico",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_54_047NAT_Teka_Artico.jpg",
        "skmPath":  "assets/skm/fp_54_047NAT_Teka_Artico.skm",
        "originalSkmName":  "047NAT Teka Artico.skm",
        "desc":  "Se destaca por tener una estructura suave que refleja el equilibrio de la naturaleza. Por su neutralidad se adapta fácilmente a diferentes estilos de proyecto otorgándoles delicadeza y sofisticación a los muebles. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001499,
        "similType":  "Simil Madera",
        "toneLum":  230.2,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_30",
        "code":  "H3433 ST22",
        "title":  "Pino Aland polar",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/30_H3433_ST22_Pino_Aland_polar.jpg",
        "skmPath":  "assets/skm/30_H3433_ST22_Pino_Aland_polar.skm",
        "originalSkmName":  "H3433 ST22 Pino Aland polar_.skm",
        "desc":  "Madera clara nórdica con vetas lineales cepilladas en acabado Deepskin Linear.",
        "updatedAt":  1700001498,
        "similType":  "Simil Madera",
        "toneLum":  220.9,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_18",
        "code":  "219MES",
        "title":  "Kiri",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_18_219MES_Kiri.jpg",
        "skmPath":  "assets/skm/fp_18_219MES_Kiri.skm",
        "originalSkmName":  "219MES Kiri.skm",
        "desc":  "Su color natural es suave y cálido, con una veta sutil pero atractiva, que añade un toque de elegancia a cualquier proyecto. El diseño se presenta en la textura Bark, que simula la corteza de un árbol, resaltando sus tonos que van desde un blanco cremoso hasta un suave beige. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001497,
        "similType":  "Simil Madera",
        "toneLum":  219.7,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_12",
        "code":  "H1401 ST22",
        "title":  "Pino Cascina",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/12_H1401_ST22_Pino_Cascina.jpg",
        "skmPath":  "assets/skm/12_H1401_ST22_Pino_Cascina.skm",
        "originalSkmName":  "H1401 ST22 Pino Cascina.skm",
        "desc":  "Pino blanco cepillado con efecto de madera patinada y acabado lineal profundo Deepskin Linear.",
        "updatedAt":  1700001496,
        "similType":  "Simil Madera",
        "toneLum":  207.8,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_40",
        "code":  "072NAT",
        "title":  "Mont Blanc",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_40_072NAT_Mont_Blanc.jpg",
        "skmPath":  "assets/skm/fp_40_072NAT_Mont_Blanc.skm",
        "originalSkmName":  "072NAT Mont Blanc.skm",
        "desc":  "Mont Blanc es un diseño elegante, donde su estructura lineal hace que sea apto para cualquier ambiente. Es una mezcla de colores esenciales y contemporáneos ideales para buscar la armonía y la luminosidad. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001495,
        "similType":  "Simil Madera",
        "toneLum":  206.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_25",
        "code":  "143BAR",
        "title":  "Amaranto",
        "line":  "Línea Blend",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_25_143BAR_Amaranto.jpg",
        "skmPath":  "assets/skm/fp_25_143BAR_Amaranto.skm",
        "originalSkmName":  "143BAR Amaranto.skm",
        "desc":  "Con la naturalidad de un roble de suaves nudos, se presenta como un diseño atemporal. Su versatilidad, permite combinaciones con diferentes tipos de materiales y tonos. (Línea Blend • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001494,
        "similType":  "Simil Madera",
        "toneLum":  205.2,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_29",
        "code":  "H3430 ST22",
        "title":  "Pino Aland blanco",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/29_H3430_ST22_Pino_Aland_blanco.jpg",
        "skmPath":  "assets/skm/29_H3430_ST22_Pino_Aland_blanco.skm",
        "originalSkmName":  "H3430 ST22 Pino Aland blanco_.skm",
        "desc":  "Pino pintado de blanco que deja traslucir la estructura lineal de la veta Deepskin Linear.",
        "updatedAt":  1700001493,
        "similType":  "Simil Madera",
        "toneLum":  196.6,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_43",
        "code":  "089NOR",
        "title":  "Helsinki",
        "line":  "Línea Nórdica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_43_089NOR_Helsinki.jpg",
        "skmPath":  "assets/skm/fp_43_089NOR_Helsinki.skm",
        "originalSkmName":  "089NOR Helsinki.skm",
        "desc":  "Personalidad rústica con características naturales, delicadas grietas y sutiles variaciones de tono, otorga a los ambientes luminosidad y calidez, invitándonos a un agradable viaje en el tiempo. (Línea Nórdica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001492,
        "similType":  "Simil Madera",
        "toneLum":  193.8,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_46",
        "code":  "098NOR",
        "title":  "Roble Escandinavo",
        "line":  "Línea Nórdica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_46_098NOR_Roble_Escandinavo.jpg",
        "skmPath":  "assets/skm/fp_46_098NOR_Roble_Escandinavo.skm",
        "originalSkmName":  "098NOR Roble Escandinavo.skm",
        "desc":  "Inspirado en el estilo de vida campestre de las ciudades Nórdicas, este diseño presenta una estructura refinada de roble con una apariencia muy natural, con sus poros blancos claramente delineados, uniendo rusticidad y delicadeza. (Línea Nórdica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001491,
        "similType":  "Simil Madera",
        "toneLum":  186.8,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_06",
        "code":  "H1312 ST10",
        "title":  "Roble Whiteriver beige arena",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/06_H1312_ST10_Roble_Whiteriver_beige_arena.jpg",
        "skmPath":  "assets/skm/06_H1312_ST10_Roble_Whiteriver_beige_arena.skm",
        "originalSkmName":  "H1312 ST10 Roble Whiteriver beige arena.skm",
        "desc":  "Roble blanqueado de tono arena luminoso con textura natural Deepskin Rough.",
        "updatedAt":  1700001490,
        "similType":  "Simil Madera",
        "toneLum":  186.8,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_22",
        "code":  "140BAR",
        "title":  "Camellia",
        "line":  "Línea Blend",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_22_140BAR_Camellia.jpg",
        "skmPath":  "assets/skm/fp_22_140BAR_Camellia.skm",
        "originalSkmName":  "140BAR Camellia.skm",
        "desc":  "El perfecto equilibrio entre moderno y elegante. Su innovador diseño presenta una estructura única que lo convierte en el compañero ideal de todos los ambientes. (Línea Blend • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001489,
        "similType":  "Simil Madera",
        "toneLum":  186.7,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_27",
        "code":  "H3349 ST19",
        "title":  "Roble Kaisersberg",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/27_H3349_ST19_Roble_Kaisersberg.jpg",
        "skmPath":  "assets/skm/27_H3349_ST19_Roble_Kaisersberg.skm",
        "originalSkmName":  "H3349 ST19 Roble Kaisersberg_.skm",
        "desc":  "Roble rústico con grietas reparadas sutiles y textura Deepskin Excellent.",
        "updatedAt":  1700001488,
        "similType":  "Simil Madera",
        "toneLum":  184.1,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_06",
        "code":  "228IMP",
        "title":  "Sándalo",
        "line":  "Línea Imperial",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_06_228IMP_Sandalo.jpg",
        "skmPath":  "assets/skm/fp_06_228IMP_Sandalo.skm",
        "originalSkmName":  "228IMP Sándalo.skm",
        "desc":  "Una madera de tonalidad suave y vetas delicadas que transmite calma, sofisticación y una belleza atemporal capaz de realzar cualquier espacio. (Línea Imperial • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001487,
        "similType":  "Simil Madera",
        "toneLum":  182.8,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_14",
        "code":  "H1710 ST10",
        "title":  "Castaño Kentucky arena",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/14_H1710_ST10_Castano_Kentucky_arena.jpg",
        "skmPath":  "assets/skm/14_H1710_ST10_Castano_Kentucky_arena.skm",
        "originalSkmName":  "H1710 ST10 Castaño Kentucky arena_.skm",
        "desc":  "Castaño claro de vetas marcadas en matiz arena con textura rústica Deepskin Rough.",
        "updatedAt":  1700001486,
        "similType":  "Simil Madera",
        "toneLum":  182.4,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_08",
        "code":  "H1367 ST40",
        "title":  "Roble Casella natural claro",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/08_H1367_ST40_Roble_Casella_natural_claro.jpg",
        "skmPath":  "assets/skm/08_H1367_ST40_Roble_Casella_natural_claro.skm",
        "originalSkmName":  "H1367 ST40 Roble Casella natural claro.skm",
        "desc":  "Poros sincronizados Feelwood Oakgrain con veta suave, elegante y tonalidad clara natural.",
        "updatedAt":  1700001485,
        "similType":  "Simil Madera",
        "toneLum":  181.2,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_18",
        "code":  "H3131 ST12",
        "title":  "Roble Davos natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/18_H3131_ST12_Roble_Davos_natural.jpg",
        "skmPath":  "assets/skm/18_H3131_ST12_Roble_Davos_natural.skm",
        "originalSkmName":  "H3131 ST12 Roble Davos natural_.skm",
        "desc":  "Roble blanqueado suave con poros finos Omnipore Matt y aspecto escandinavo limpio.",
        "updatedAt":  1700001484,
        "similType":  "Simil Madera",
        "toneLum":  176.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_38",
        "code":  "065NAT",
        "title":  "Cajú",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_38_065NAT_Caju.jpg",
        "skmPath":  "assets/skm/fp_38_065NAT_Caju.skm",
        "originalSkmName":  "065NAT Cajú.skm",
        "desc":  "Cajú es un diseño que combina los tonos claros y oscuros de la madera, pasando por distintas tonalidades inspirándose en la esencia de la naturaleza para impregnarse en nuestros sentidos. Su tonalidad versátil hace que sea un color que permite alternativas y combinaciones en el bienestar que buscamos en un ambiente. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001483,
        "similType":  "Simil Madera",
        "toneLum":  176,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_17",
        "code":  "H3012 ST22",
        "title":  "Coco bolo",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/17_H3012_ST22_Coco_bolo.jpg",
        "skmPath":  "assets/skm/17_H3012_ST22_Coco_bolo.skm",
        "originalSkmName":  "H3012 ST22 Coco bolo.skm",
        "desc":  "Madera exótica clara con veteado oscuro contrastante en textura lineal Deepskin Linear.",
        "updatedAt":  1700001482,
        "similType":  "Simil Madera",
        "toneLum":  172.7,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_19",
        "code":  "218MES",
        "title":  "Paraíso",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_19_218MES_Paraiso.jpg",
        "skmPath":  "assets/skm/fp_19_218MES_Paraiso.skm",
        "originalSkmName":  "218MES Paraíso.skm",
        "desc":  "Diseño de aspecto elegante y atemporal. Presenta un tono medio y cálido con una veta rojiza muy distintiva que añade un encanto único a cualquier proyecto. Su textura maderada lineal resalta a la perfección las catedrales características de esta madera. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001481,
        "similType":  "Simil Madera",
        "toneLum":  171.8,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_01",
        "code":  "H1145 ST10",
        "title":  "Roble Bardolino natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/01_H1145_ST10_Roble_Bardolino_natural.jpg",
        "skmPath":  "assets/skm/01_H1145_ST10_Roble_Bardolino_natural.skm",
        "originalSkmName":  "H1145 ST10 Roble Bardolino natural_.skm",
        "desc":  "Vetas con marcas de aserrado rústico en acabado Deepskin Rough que combina con tonos neutros.",
        "updatedAt":  1700001480,
        "similType":  "Simil Madera",
        "toneLum":  168.5,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_25",
        "code":  "H3331 ST10",
        "title":  "Roble de Nebraska natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/25_H3331_ST10_Roble_de_Nebraska_natural.jpg",
        "skmPath":  "assets/skm/25_H3331_ST10_Roble_de_Nebraska_natural.skm",
        "originalSkmName":  "H3331 ST10 Roble de Nebraska natural_.skm",
        "desc":  "Aspecto rústico auténtico con nudos marcados y textura profunda Deepskin Rough.",
        "updatedAt":  1700001479,
        "similType":  "Simil Madera",
        "toneLum":  166.9,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_58",
        "code":  "030NAT",
        "title":  "Roble Americano Nature",
        "line":  "Línea Maderas clásicas",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_58_030NAT_Roble_Americano_Nature.jpg",
        "skmPath":  "assets/skm/fp_58_030NAT_Roble_Americano_Nature.skm",
        "originalSkmName":  "030NAT Roble Americano Nature.skm",
        "desc":  "Su naturalidad y calidez genera en los espacios un ambiente armonioso y de gran sutileza. (Línea Maderas clásicas • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001478,
        "similType":  "Simil Madera",
        "toneLum":  165.5,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_32",
        "code":  "H3730 ST10",
        "title":  "Hickory natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/32_H3730_ST10_Hickory_natural.jpg",
        "skmPath":  "assets/skm/32_H3730_ST10_Hickory_natural.skm",
        "originalSkmName":  "H3730 ST10 Hickory natural_.skm",
        "desc":  "Madera clara con juego de colores intensos entre albura y duramen en Deepskin Rough.",
        "updatedAt":  1700001477,
        "similType":  "Simil Madera",
        "toneLum":  165.2,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_22",
        "code":  "H3170 ST12",
        "title":  "Roble Kendal natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/22_H3170_ST12_Roble_Kendal_natural.jpg",
        "skmPath":  "assets/skm/22_H3170_ST12_Roble_Kendal_natural.skm",
        "originalSkmName":  "H3170 ST12 Roble Kendal natural_.skm",
        "desc":  "Roble versátil y atemporal con nudos suaves y acabado natural Omnipore Matt.",
        "updatedAt":  1700001476,
        "similType":  "Simil Madera",
        "toneLum":  164.3,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_37",
        "code":  "028NAT",
        "title":  "Praga",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_37_028NAT_Praga.jpg",
        "skmPath":  "assets/skm/fp_37_028NAT_Praga.skm",
        "originalSkmName":  "028NAT Praga.skm",
        "desc":  "Praga es un diseño rústico con una lectura contemporánea. Los detalles de la madera con efectos de desgaste por el tiempo traen rastros de su historia, es parte de su identidad, siendo su principal marca. Es una buena elección para quien busca personalidad para sus ambientes en un patrón enmaderado. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001475,
        "similType":  "Simil Madera",
        "toneLum":  157.7,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_39",
        "code":  "027NAT",
        "title":  "Gaudí",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_39_027NAT_Gaudi.jpg",
        "skmPath":  "assets/skm/fp_39_027NAT_Gaudi.skm",
        "originalSkmName":  "027NAT Gaudí.skm",
        "desc":  "Gaudí es clásico, muy fiel a la madera natural. Posee líneas suaves, delicadas y tonalidades claras, que facilitan su aplicación y combinaciones. Ideal para quien desea traer la naturalidad, tranquilidad y confort a sus ambientes. El equilibrio entre rusticidad y la elegancia del diseño, demuestra identidad y transmite la sensación de refugio. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001474,
        "similType":  "Simil Madera",
        "toneLum":  156.9,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_20",
        "code":  "H3146 ST19",
        "title":  "Roble Lorenzo arena",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/20_H3146_ST19_Roble_Lorenzo_arena.jpg",
        "skmPath":  "assets/skm/20_H3146_ST19_Roble_Lorenzo_arena.skm",
        "originalSkmName":  "H3146 ST19 Roble Lorenzo arena.skm",
        "desc":  "Veteado tranquilo con finas grietas discretas y textura Deepskin Excellent.",
        "updatedAt":  1700001473,
        "similType":  "Simil Madera",
        "toneLum":  156.7,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_02",
        "code":  "H1180 ST37",
        "title":  "Roble Halifax natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/02_H1180_ST37_Roble_Halifax_natural.jpg",
        "skmPath":  "assets/skm/02_H1180_ST37_Roble_Halifax_natural.skm",
        "originalSkmName":  "H1180 ST37 Roble Halifax natural_.skm",
        "desc":  "Marcadas grietas y nudos oscuros con textura sincronizada Feelwood Rift de carácter auténtico.",
        "updatedAt":  1700001472,
        "similType":  "Simil Madera",
        "toneLum":  155.6,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_31",
        "code":  "H3700 ST10",
        "title":  "Nogal del Pacífico natural",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/31_H3700_ST10_Nogal_del_Pacifico_natural.jpg",
        "skmPath":  "assets/skm/31_H3700_ST10_Nogal_del_Pacifico_natural.skm",
        "originalSkmName":  "H3700 ST10 Nogal del Pacífico natural.skm",
        "desc":  "Veteado vivo con trazos oscuros expresivos y textura natural Deepskin Rough.",
        "updatedAt":  1700001471,
        "similType":  "Simil Madera",
        "toneLum":  151.5,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_23",
        "code":  "H3171 ST12",
        "title":  "Roble Kendal encerado",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/23_H3171_ST12_Roble_Kendal_encerado.jpg",
        "skmPath":  "assets/skm/23_H3171_ST12_Roble_Kendal_encerado.skm",
        "originalSkmName":  "H3171 ST12 Roble Kendal encerado_.skm",
        "desc":  "Tono dorado cálido con apariencia de madera tratada a la cera y poro Omnipore Matt.",
        "updatedAt":  1700001470,
        "similType":  "Simil Madera",
        "toneLum":  149.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_24",
        "code":  "142BAR",
        "title":  "Scotch",
        "line":  "Línea Blend",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_24_142BAR_Scotch.jpg",
        "skmPath":  "assets/skm/fp_24_142BAR_Scotch.skm",
        "originalSkmName":  "142BAR Scotch.skm",
        "desc":  "Inspirado en los nogales, el diseño se destaca por sus tonos caramelos y vetas pronunciadas, iluminando los ambientes con su calidez. (Línea Blend • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001469,
        "similType":  "Simil Madera",
        "toneLum":  146.2,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_45",
        "code":  "096NOR",
        "title":  "Olmo Finlandés",
        "line":  "Línea Nórdica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_45_096NOR_Olmo_Finlandes.jpg",
        "skmPath":  "assets/skm/fp_45_096NOR_Olmo_Finlandes.skm",
        "originalSkmName":  "096NOR Olmo Finlandés.skm",
        "desc":  "Destacada tonalidad cálida, permite una multiplicidad de combinaciones con piezas modernas o tradicionales, recreando la madera natural como base para decoraciones elegantes y minimalistas. (Línea Nórdica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001468,
        "similType":  "Simil Madera",
        "toneLum":  143.8,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_13",
        "code":  "H1636 ST12",
        "title":  "Cerezo Locarno",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/13_H1636_ST12_Cerezo_Locarno.jpg",
        "skmPath":  "assets/skm/13_H1636_ST12_Cerezo_Locarno.skm",
        "originalSkmName":  "H1636 ST12 Cerezo Locarno.skm",
        "desc":  "Clásico tono rojizo cálido de cerezo europeo con poro sedoso Omnipore Matt.",
        "updatedAt":  1700001467,
        "similType":  "Simil Madera",
        "toneLum":  124.6,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_28",
        "code":  "H3398 ST12",
        "title":  "Roble Kendal coñac",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/28_H3398_ST12_Roble_Kendal_conac.jpg",
        "skmPath":  "assets/skm/28_H3398_ST12_Roble_Kendal_conac.skm",
        "originalSkmName":  "H3398 ST12 Roble Kendal coñac_.skm",
        "desc":  "Matiz coñac intenso y elegante que aporta calidez clásica con textura Omnipore Matt.",
        "updatedAt":  1700001466,
        "similType":  "Simil Madera",
        "toneLum":  110.8,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_60",
        "code":  "064NAT",
        "title":  "Cedro Nature",
        "line":  "Línea Maderas clásicas",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_60_064NAT_Cedro_Nature.jpg",
        "skmPath":  "assets/skm/fp_60_064NAT_Cedro_Nature.skm",
        "originalSkmName":  "064NAT Cedro Nature.skm",
        "desc":  "Fuertes tonos rojizos para personalidades que quieren reflejar elegancia y tradición. (Línea Maderas clásicas • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001465,
        "similType":  "Simil Madera",
        "toneLum":  105.1,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_64",
        "code":  "064WTX",
        "title":  "Cedro Woodtext",
        "line":  "Línea Maderas clásicas",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_64_064WTX_Cedro_Woodtext.jpg",
        "skmPath":  "assets/skm/fp_64_064WTX_Cedro_Woodtext.skm",
        "originalSkmName":  "064WTX Cedro Woodtext.skm",
        "desc":  "Fuertes tonos rojizos para personalidades que quieren reflejar elegancia y tradición. (Línea Maderas clásicas • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001464,
        "similType":  "Simil Madera",
        "toneLum":  105.1,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_57",
        "code":  "046NAT",
        "title":  "Nogal Terracota",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_57_046NAT_Nogal_Terracota.jpg",
        "skmPath":  "assets/skm/fp_57_046NAT_Nogal_Terracota.skm",
        "originalSkmName":  "046NAT Nogal Terracota.skm",
        "desc":  "Este diseño refleja vetas, tonos y una textura que rescata toda la naturalidad de la madera. Sus detalles naturales y su variación de tonalidad transfieren al Nogal Terracota un carácter distintivo que le otorga una personalidad única a sus proyectos. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001463,
        "similType":  "Simil Madera",
        "toneLum":  99,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_05",
        "code":  "231IMP",
        "title":  "Bordeaux",
        "line":  "Línea Imperial",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_05_231IMP_Bordeaux.jpg",
        "skmPath":  "assets/skm/fp_05_231IMP_Bordeaux.skm",
        "originalSkmName":  "231IMP Bordeaux.skm",
        "desc":  "Intenso y contemporáneo. Bordeaux reinterpreta la calidez de la madera en una tonalidad audaz que transforma cualquier espacio. (Línea Imperial • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001462,
        "similType":  "Simil Madera",
        "toneLum":  76.4,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_23",
        "code":  "141BAR",
        "title":  "Merlot",
        "line":  "Línea Blend",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_23_141BAR_Merlot.jpg",
        "skmPath":  "assets/skm/fp_23_141BAR_Merlot.skm",
        "originalSkmName":  "141BAR Merlot.skm",
        "desc":  "Un roble oscuro con tonos rojizos y elegantes contrastes, desprendiendo notas a tabaco y chocolate, transmitiendo calidez y exclusividad al mobiliario. (Línea Blend • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001461,
        "similType":  "Simil Madera",
        "toneLum":  63.9,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_11",
        "code":  "H1399 ST10",
        "title":  "Roble Denver marrón trufa",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/11_H1399_ST10_Roble_Denver_marron_trufa.jpg",
        "skmPath":  "assets/skm/11_H1399_ST10_Roble_Denver_marron_trufa.skm",
        "originalSkmName":  "H1399 ST10 Roble Denver marrón trufa.skm",
        "desc":  "Color trufa versátil con nudos discretos y vetas naturales en textura Deepskin Rough.",
        "updatedAt":  1700001460,
        "similType":  "Simil Madera",
        "toneLum":  136.5,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_10",
        "code":  "H1386 ST40",
        "title":  "Roble Casella marrón",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/10_H1386_ST40_Roble_Casella_marron.jpg",
        "skmPath":  "assets/skm/10_H1386_ST40_Roble_Casella_marron.skm",
        "originalSkmName":  "H1386 ST40 Roble Casella marrón.skm",
        "desc":  "Tonalidad cálida de roble medio con textura Feelwood Oakgrain de realismo táctil y visual.",
        "updatedAt":  1700001459,
        "similType":  "Simil Madera",
        "toneLum":  114.6,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_19",
        "code":  "H3133 ST12",
        "title":  "Roble Davos trufa marrón",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/19_H3133_ST12_Roble_Davos_trufa_marron.jpg",
        "skmPath":  "assets/skm/19_H3133_ST12_Roble_Davos_trufa_marron.skm",
        "originalSkmName":  "H3133 ST12 Roble Davos trufa marrón_.skm",
        "desc":  "Tonalidad marrón trufa cálida con elementos claros y oscuros en acabado Omnipore Matt.",
        "updatedAt":  1700001458,
        "similType":  "Simil Madera",
        "toneLum":  114,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_03",
        "code":  "H1181 ST37",
        "title":  "Roble Halifax tabaco",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/03_H1181_ST37_Roble_Halifax_tabaco.jpg",
        "skmPath":  "assets/skm/03_H1181_ST37_Roble_Halifax_tabaco.skm",
        "originalSkmName":  "H1181 ST37 Roble Halifax tabaco_.skm",
        "desc":  "Versión oscura ahumada con grietas características y textura Feelwood Rift para contrastes intensos.",
        "updatedAt":  1700001457,
        "similType":  "Simil Madera",
        "toneLum":  113.5,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_59",
        "code":  "042NAT",
        "title":  "Carvalho Mezzo",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_59_042NAT_Carvalho_Mezzo.jpg",
        "skmPath":  "assets/skm/fp_59_042NAT_Carvalho_Mezzo.skm",
        "originalSkmName":  "042NAT Carvalho Mezzo.skm",
        "desc":  "Su estructura cálida y uniforme, libre de nudos y catedrales, le concede a los espacios una sensación de calma y serenidad. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001456,
        "similType":  "Simil Madera",
        "toneLum":  111.5,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_07",
        "code":  "225MES",
        "title":  "Petiribí",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_07_225MES_Petiribi.jpg",
        "skmPath":  "assets/skm/fp_07_225MES_Petiribi.skm",
        "originalSkmName":  "225MES Petiribí.skm",
        "desc":  "Diseño maderado de estructura lineal, con un leve movimiento en las vetas. Calidez natural y elegancia atemporal, con la riqueza cromática y las vetas únicas del petiribí. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001455,
        "similType":  "Simil Madera",
        "toneLum":  111.2,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_04",
        "code":  "229IMP",
        "title":  "Castaño",
        "line":  "Línea Imperial",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_04_229IMP_Castano.jpg",
        "skmPath":  "assets/skm/fp_04_229IMP_Castano.skm",
        "originalSkmName":  "229IMP Castaño.skm",
        "desc":  "Un diseño que combina profundidad, calidez y carácter. Sus vetas sutiles y su tonalidad equilibrada aportan personalidad y distinción. (Línea Imperial • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001454,
        "similType":  "Simil Madera",
        "toneLum":  95.7,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_16",
        "code":  "H3003 ST19",
        "title":  "Roble Norwich",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/16_H3003_ST19_Roble_Norwich.jpg",
        "skmPath":  "assets/skm/16_H3003_ST19_Roble_Norwich.skm",
        "originalSkmName":  "H3003 ST19 Roble Norwich_.skm",
        "desc":  "Roble clásico de tono miel equilibrado con acabado superficial Deepskin Excellent.",
        "updatedAt":  1700001453,
        "similType":  "Simil Madera",
        "toneLum":  92.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_15",
        "code":  "H1714 ST19",
        "title":  "Nogal Lincoln",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/15_H1714_ST19_Nogal_Lincoln.jpg",
        "skmPath":  "assets/skm/15_H1714_ST19_Nogal_Lincoln.skm",
        "originalSkmName":  "H1714 ST19 Nogal Lincoln_.skm",
        "desc":  "Nogal americano de catedrales elegantes y cambio de brillo mate-satinado Deepskin Excellent.",
        "updatedAt":  1700001452,
        "similType":  "Simil Madera",
        "toneLum":  87.1,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_61",
        "code":  "041NAT",
        "title":  "Nocce Milano",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_61_041NAT_Nocce_Milano.jpg",
        "skmPath":  "assets/skm/fp_61_041NAT_Nocce_Milano.skm",
        "originalSkmName":  "041NAT Nocce Milano.skm",
        "desc":  "Su estructura elegante y moderna, otorga el bienestar perfecto a los ambientes, tornándolos más cálidos y confortables. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001451,
        "similType":  "Simil Madera",
        "toneLum":  79.5,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_36",
        "code":  "029SUP",
        "title":  "Moscú",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_36_029SUP_Moscu.jpg",
        "skmPath":  "assets/skm/fp_36_029SUP_Moscu.skm",
        "originalSkmName":  "029SUP Moscú.skm",
        "desc":  "Si buscás este tipo de tono amarronado profundo, te recomendamos los diseños Merlot y Nogal Terracota. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001450,
        "similType":  "Simil Madera",
        "toneLum":  74.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_05",
        "code":  "H1307 ST19",
        "title":  "Nogal Warmia marrón",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/05_H1307_ST19_Nogal_Warmia_marron.jpg",
        "skmPath":  "assets/skm/05_H1307_ST19_Nogal_Warmia_marron.skm",
        "originalSkmName":  "H1307 ST19 Nogal Warmia marrón.skm",
        "desc":  "Nogal oscuro aterciopelado con veta lineal suave y acabado Deepskin Excellent.",
        "updatedAt":  1700001449,
        "similType":  "Simil Madera",
        "toneLum":  71.4,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_56",
        "code":  "031NAT",
        "title":  "Roble Dakar Nature",
        "line":  "Línea Maderas clásicas",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_56_031NAT_Roble_Dakar_Nature.jpg",
        "skmPath":  "assets/skm/fp_56_031NAT_Roble_Dakar_Nature.skm",
        "originalSkmName":  "031NAT Roble Dakar Nature.skm",
        "desc":  "Madera que inspira sobriedad, fuerza y elegancia. Es una tendencia asentada y que da unos resultados estéticos excelentes, sobre todo cuando se combina con otros materiales. (Línea Maderas clásicas • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001448,
        "similType":  "Simil Madera",
        "toneLum":  68.5,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_63",
        "code":  "031WTX",
        "title":  "Roble Dakar Woodtext",
        "line":  "Línea Maderas clásicas",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_63_031WTX_Roble_Dakar_Woodtext.jpg",
        "skmPath":  "assets/skm/fp_63_031WTX_Roble_Dakar_Woodtext.skm",
        "originalSkmName":  "031WTX Roble Dakar Woodtext.skm",
        "desc":  "Madera que inspira sobriedad, fuerza y elegancia. Es una tendencia asentada y que da unos resultados estéticos excelentes, sobre todo cuando se combina con otros materiales. (Línea Maderas clásicas • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001447,
        "similType":  "Simil Madera",
        "toneLum":  68.5,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_09",
        "code":  "H1369 ST40",
        "title":  "Roble Casella marrón oscuro",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/09_H1369_ST40_Roble_Casella_marron_oscuro.jpg",
        "skmPath":  "assets/skm/09_H1369_ST40_Roble_Casella_marron_oscuro.skm",
        "originalSkmName":  "H1369 ST40 Roble Casella marrón oscuro.skm",
        "desc":  "Diseño de roble oscuro profundo con acabado sincronizado Feelwood Oakgrain de poro mate.",
        "updatedAt":  1700001446,
        "similType":  "Simil Madera",
        "toneLum":  64.7,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_47",
        "code":  "099NOR",
        "title":  "Teka Oslo",
        "line":  "Línea Nórdica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_47_099NOR_Teka_Oslo.jpg",
        "skmPath":  "assets/skm/fp_47_099NOR_Teka_Oslo.skm",
        "originalSkmName":  "099NOR Teka Oslo.skm",
        "desc":  "Si buscás este tipo de madera intensa y con carácter, te recomendamos otras opciones como: Merlot, Nogal Terracota, Carvalho Mezzo y Roble Dakar. (Línea Nórdica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001445,
        "similType":  "Simil Madera",
        "toneLum":  60.2,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_21",
        "code":  "120BAR",
        "title":  "Pinot Gris",
        "line":  "Línea Blend",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_21_120BAR_Pinot_Gris.jpg",
        "skmPath":  "assets/skm/fp_21_120BAR_Pinot_Gris.skm",
        "originalSkmName":  "120BAR Pinot Gris.skm",
        "desc":  "Delicada combinación de matices violáceos y grises, aportando serenidad y calma para tus ambientes. (Línea Blend • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001444,
        "similType":  "Simil Madera",
        "toneLum":  182.3,
        "toneSubFamily":  4
    },
    {
        "id":  "fp_skm_44",
        "code":  "097NOR",
        "title":  "Báltico",
        "line":  "Línea Nórdica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_44_097NOR_Baltico.jpg",
        "skmPath":  "assets/skm/fp_44_097NOR_Baltico.skm",
        "originalSkmName":  "097NOR Báltico.skm",
        "desc":  "Perfecta combinación entre natural y rústico. Su tonalidad versátil y vanguardista, destaca un nuevo concepto de color y alternativa para quien desea diferenciarse. (Línea Nórdica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001443,
        "similType":  "Simil Madera",
        "toneLum":  143.9,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_21",
        "code":  "H3158 ST19",
        "title":  "Roble Vicenza gris",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/21_H3158_ST19_Roble_Vicenza_gris.jpg",
        "skmPath":  "assets/skm/21_H3158_ST19_Roble_Vicenza_gris.skm",
        "originalSkmName":  "H3158 ST19 Roble Vicenza gris_.skm",
        "desc":  "Roble lineal moderno en matiz gris neutro con acabado mate-brillo Deepskin Excellent.",
        "updatedAt":  1700001442,
        "similType":  "Simil Madera",
        "toneLum":  131.8,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_26",
        "code":  "H3332 ST10",
        "title":  "Roble de Nebraska gris",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/26_H3332_ST10_Roble_de_Nebraska_gris.jpg",
        "skmPath":  "assets/skm/26_H3332_ST10_Roble_de_Nebraska_gris.skm",
        "originalSkmName":  "H3332 ST10 Roble de Nebraska gris_.skm",
        "desc":  "Madera envejecida en tono gris cálido con carácter desgastado y tacto Deepskin Rough.",
        "updatedAt":  1700001441,
        "similType":  "Simil Madera",
        "toneLum":  124.4,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_07",
        "code":  "H1313 ST10",
        "title":  "Roble Whiteriver gris marrón",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/07_H1313_ST10_Roble_Whiteriver_gris_marron.jpg",
        "skmPath":  "assets/skm/07_H1313_ST10_Roble_Whiteriver_gris_marron.skm",
        "originalSkmName":  "H1313 ST10 Roble Whiteriver gris marrón_.skm",
        "desc":  "Tonalidad grisácea cálida con poro pronunciado Deepskin Rough para ambientes contemporáneos.",
        "updatedAt":  1700001440,
        "similType":  "Simil Madera",
        "toneLum":  116.9,
        "toneSubFamily":  4
    },
    {
        "id":  "fp_skm_20",
        "code":  "212BAR",
        "title":  "Sauco",
        "line":  "Línea Blend",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_20_212BAR_Sauco.jpg",
        "skmPath":  "assets/skm/fp_20_212BAR_Sauco.skm",
        "originalSkmName":  "212BAR Sauco.skm",
        "desc":  "LANZAMIENTO 2023. El diseño Sauco se incorpora a la Línea Blend en 2023 como una propuesta con carácter e identidad Unica. De color intenso, este diseño de madera negra quemada resalta a la perfección la textura BARK, dándole un toque extra de naturaleza y minimalismo. Con esta incorporación, la Línea Blend ofrece 6 diferentes propuestas entre maderas claras, medias y oscuras que se ajustan a todas las necesidades. Combinaciones ideales: Probá este diseño en combinación con nuestros exclusivos unicolores de la Línea Étnica. Animate también a aplicarlo junto a otros diseños de la línea como el Scotch y el Camellia. #VivíBlend\". (Línea Blend • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001439,
        "similType":  "Simil Madera",
        "toneLum":  59.9,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_24",
        "code":  "H3190 ST19",
        "title":  "Fineline Metallic antracita",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/24_H3190_ST19_Fineline_Metallic_antracita.jpg",
        "skmPath":  "assets/skm/24_H3190_ST19_Fineline_Metallic_antracita.skm",
        "originalSkmName":  "H3190 ST19 Fineline Metallic antracita_.skm",
        "desc":  "Diseño de madera lineal fina en antracita con destellos metálicos y textura Deepskin Excellent.",
        "updatedAt":  1700001438,
        "similType":  "Simil Madera",
        "toneLum":  59.7,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_04",
        "code":  "H1199 ST12",
        "title":  "Roble termo negro",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/04_H1199_ST12_Roble_termo_negro.jpg",
        "skmPath":  "assets/skm/04_H1199_ST12_Roble_termo_negro.skm",
        "originalSkmName":  "H1199 ST12 Roble termo negro.skm",
        "desc":  "Madera tratada térmicamente en tono casi negro con poro cepillado suave Omnipore Matt.",
        "updatedAt":  1700001437,
        "similType":  "Simil Madera",
        "toneLum":  36.1,
        "toneSubFamily":  4
    },
    {
        "id":  "fp_skm_65",
        "code":  "016WTX",
        "title":  "Ebano Negro",
        "line":  "Línea Maderas clásicas",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • MADERAS",
        "filterCat":  "Maderas",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_65_016WTX_Ebano_Negro.jpg",
        "skmPath":  "assets/skm/fp_65_016WTX_Ebano_Negro.skm",
        "originalSkmName":  "016WTX Ebano Negro.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Maderas clásicas • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001436,
        "similType":  "Simil Madera",
        "toneLum":  33.7,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_74",
        "code":  "W1100 PG",
        "title":  "Blanco alpino",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/74_W1100_PG_Blanco_alpino.jpg",
        "skmPath":  "assets/skm/74_W1100_PG_Blanco_alpino.skm",
        "originalSkmName":  "W1100 PG Blanco alpino_.skm",
        "desc":  "Diseño unicolor Blanco alpino (W1100 PG). Acabado laqueado PerfectSense Premium Gloss de efecto espejo y alto brillo.",
        "updatedAt":  1700001435,
        "similType":  "Colores lisos",
        "toneLum":  254,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_76",
        "code":  "W1100 ST9",
        "title":  "Blanco alpino",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/76_W1100_ST9_Blanco_alpino.jpg",
        "skmPath":  "assets/skm/76_W1100_ST9_Blanco_alpino.skm",
        "originalSkmName":  "W1100 ST9 Blanco alpino_.skm",
        "desc":  "Diseño unicolor Blanco alpino (W1100 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001434,
        "similType":  "Colores lisos",
        "toneLum":  254,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_75",
        "code":  "W1100 PM",
        "title":  "Blanco alpino",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/75_W1100_PM_Blanco_alpino.jpg",
        "skmPath":  "assets/skm/75_W1100_PM_Blanco_alpino.skm",
        "originalSkmName":  "W1100 PM Blanco alpino_.skm",
        "desc":  "Diseño unicolor Blanco alpino (W1100 PM). Acabado lacado PerfectSense Premium Matt antihuellas de tacto aterciopelado.",
        "updatedAt":  1700001433,
        "similType":  "Colores lisos",
        "toneLum":  254,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_77",
        "code":  "W1101 ST9",
        "title":  "Blanco alpino sólido",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/77_W1101_ST9_Blanco_alpino_solido.jpg",
        "skmPath":  "assets/skm/77_W1101_ST9_Blanco_alpino_solido.skm",
        "originalSkmName":  "W1101 ST9 Blanco alpino sólido_.skm",
        "desc":  "Diseño unicolor Blanco alpino sólido (W1101 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001432,
        "similType":  "Colores lisos",
        "toneLum":  254,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_73",
        "code":  "135TXT",
        "title":  "Blanco Tundra",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_73_135TXT_Blanco_Tundra.jpg",
        "skmPath":  "assets/skm/fp_73_135TXT_Blanco_Tundra.skm",
        "originalSkmName":  "135TXT Blanco Tundra.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001431,
        "similType":  "Colores lisos",
        "toneLum":  253.1,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_33",
        "code":  "136DMT",
        "title":  "Everest",
        "line":  "Línea Étnica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_33_136DMT_Everest.jpg",
        "skmPath":  "assets/skm/fp_33_136DMT_Everest.skm",
        "originalSkmName":  "136DMT Everest.skm",
        "desc":  "Everest es el diseño ideal para los espacios que necesitan pura claridad. (Línea Étnica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001430,
        "similType":  "Colores lisos",
        "toneLum":  253.1,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_80",
        "code":  "W954 ST14",
        "title":  "Blanco",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/80_W954_ST14_Blanco.jpg",
        "skmPath":  "assets/skm/80_W954_ST14_Blanco.skm",
        "originalSkmName":  "W954 ST14 Blanco_.skm",
        "desc":  "Diseño unicolor Blanco (W954 ST14). Textura Smoothtouch Sand de poro fino ligeramente perlado.",
        "updatedAt":  1700001429,
        "similType":  "Colores lisos",
        "toneLum":  252,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_78",
        "code":  "W954",
        "title":  "Blanco",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/78_W954_Blanco.jpg",
        "skmPath":  "assets/skm/78_W954_Blanco.skm",
        "originalSkmName":  "W954 - Blanco_.skm",
        "desc":  "Diseño unicolor Blanco (W954). Tablero decorativo revestido de melamina EGGER.",
        "updatedAt":  1700001428,
        "similType":  "Colores lisos",
        "toneLum":  252,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_79",
        "code":  "W954 SM",
        "title":  "Blanco",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/79_W954_SM_Blanco.jpg",
        "skmPath":  "assets/skm/79_W954_SM_Blanco.skm",
        "originalSkmName":  "W954 SM Blanco_.skm",
        "desc":  "Diseño unicolor Blanco (W954 SM). Acabado SemiMatt uniforme y resistente para aplicaciones interiores.",
        "updatedAt":  1700001427,
        "similType":  "Colores lisos",
        "toneLum":  252,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_62",
        "code":  "135NAT",
        "title":  "Blanco Nature",
        "line":  "Línea Nature",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_62_135NAT_Blanco_Nature.jpg",
        "skmPath":  "assets/skm/fp_62_135NAT_Blanco_Nature.skm",
        "originalSkmName":  "135NAT Blanco Nature.skm",
        "desc":  "Tablero de partículas (MDP) o fibras (MDF) de madera revestido en ambas caras con papeles decorativos impregnados con resinas melaminicas. (Línea Nature • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001426,
        "similType":  "Colores lisos",
        "toneLum":  249,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_11",
        "code":  "944TAC",
        "title":  "White Extreme Gloss",
        "line":  "Línea Táctil",
        "dimensions":  "1300 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_11_944TAC_White_Extreme_Gloss.jpg",
        "skmPath":  "assets/skm/fp_11_944TAC_White_Extreme_Gloss.skm",
        "originalSkmName":  "944TAC White Extreme Gloss.skm",
        "desc":  "Blanco cálido en terminación EXTREME GLOSS. Su acabado espejado genera ese efecto laqueado tan buscado. (Línea Táctil • Placa 1300 x 2750 mm).",
        "updatedAt":  1700001425,
        "similType":  "Colores lisos",
        "toneLum":  247.1,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_70",
        "code":  "180TXT",
        "title":  "Almendra",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_70_180TXT_Almendra.jpg",
        "skmPath":  "assets/skm/fp_70_180TXT_Almendra.skm",
        "originalSkmName":  "180TXT Almendra.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001424,
        "similType":  "Colores lisos",
        "toneLum":  245.2,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_56",
        "code":  "U702 ST9",
        "title":  "Gris Cachemira",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/56_U702_ST9_Gris_Cachemira.jpg",
        "skmPath":  "assets/skm/56_U702_ST9_Gris_Cachemira.skm",
        "originalSkmName":  "U702 ST9 Gris Cachemira.skm",
        "desc":  "Diseño unicolor Gris Cachemira (U702 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001423,
        "similType":  "Colores lisos",
        "toneLum":  204.7,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_55",
        "code":  "U702 PG",
        "title":  "Gris Cachemira",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/55_U702_PG_Gris_Cachemira.jpg",
        "skmPath":  "assets/skm/55_U702_PG_Gris_Cachemira.skm",
        "originalSkmName":  "U702 PG Gris Cachemira.skm",
        "desc":  "Diseño unicolor Gris Cachemira (U702 PG). Acabado laqueado PerfectSense Premium Gloss de efecto espejo y alto brillo.",
        "updatedAt":  1700001422,
        "similType":  "Colores lisos",
        "toneLum":  204.7,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_72",
        "code":  "205TXT",
        "title":  "Litio",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_72_205TXT_Litio.jpg",
        "skmPath":  "assets/skm/fp_72_205TXT_Litio.skm",
        "originalSkmName":  "205TXT Litio.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001421,
        "similType":  "Colores lisos",
        "toneLum":  192.1,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_29",
        "code":  "112DMT",
        "title":  "Sahara",
        "line":  "Línea Étnica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_29_112DMT_Sahara.jpg",
        "skmPath":  "assets/skm/fp_29_112DMT_Sahara.skm",
        "originalSkmName":  "112DMT Sahara.skm",
        "desc":  "Sahara está pensado para aquellos ambientes que necesitan un diseño neutro para combinar con los distintos lugares de tu hogar. (Línea Étnica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001420,
        "similType":  "Colores lisos",
        "toneLum":  182.7,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_15",
        "code":  "216MES",
        "title":  "Gris Tapir",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_15_216MES_Gris_Tapir.jpg",
        "skmPath":  "assets/skm/fp_15_216MES_Gris_Tapir.skm",
        "originalSkmName":  "216MES Gris Tapir.skm",
        "desc":  "Inspirado en el pelaje de este animal exótico característico de la Mesopotamia, la belleza de este color radica en su capacidad para combinar la calidez de los tonos terrosos con la profundidad del gris. Elegante y sofisticado, su textura supermate añade un toque de distinción y estilo sutil permitiendo crear ambientes acogedores y terrenales. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001419,
        "similType":  "Colores lisos",
        "toneLum":  168.8,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_58",
        "code":  "U727 ST9",
        "title":  "Gris arcilla",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/58_U727_ST9_Gris_arcilla.jpg",
        "skmPath":  "assets/skm/58_U727_ST9_Gris_arcilla.skm",
        "originalSkmName":  "U727 ST9 Gris arcilla_.skm",
        "desc":  "Diseño unicolor Gris arcilla (U727 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001418,
        "similType":  "Colores lisos",
        "toneLum":  155.1,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_57",
        "code":  "U727",
        "title":  "Gris arcilla",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/57_U727_Gris_arcilla.jpg",
        "skmPath":  "assets/skm/57_U727_Gris_arcilla.skm",
        "originalSkmName":  "U727 - Gris arcilla_.skm",
        "desc":  "Diseño unicolor Gris arcilla (U727). Tablero decorativo revestido de melamina EGGER.",
        "updatedAt":  1700001417,
        "similType":  "Colores lisos",
        "toneLum":  155.1,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_01",
        "code":  "233IMP",
        "title":  "Beige Imperial",
        "line":  "Línea Imperial",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_01_233IMP_Beige_Imperial.jpg",
        "skmPath":  "assets/skm/fp_01_233IMP_Beige_Imperial.skm",
        "originalSkmName":  "233IMP Beige Imperial.skm",
        "desc":  "Un beige sereno de textura supermate que combina sobriedad y luminosidad permitiendo infinitas combinaciones. (Línea Imperial • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001416,
        "similType":  "Colores lisos",
        "toneLum":  154.2,
        "toneSubFamily":  2
    },
    {
        "id":  "eg_skm_46",
        "code":  "U250 PM",
        "title":  "Beige Caramelo",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/46_U250_PM_Beige_Caramelo.jpg",
        "skmPath":  "assets/skm/46_U250_PM_Beige_Caramelo.skm",
        "originalSkmName":  "U250 PM Beige Caramelo.skm",
        "desc":  "Diseño unicolor Beige Caramelo (U250 PM). Acabado lacado PerfectSense Premium Matt antihuellas de tacto aterciopelado.",
        "updatedAt":  1700001415,
        "similType":  "Colores lisos",
        "toneLum":  148.8,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_28",
        "code":  "111DMT",
        "title":  "Tribal",
        "line":  "Línea Étnica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_28_111DMT_Tribal.jpg",
        "skmPath":  "assets/skm/fp_28_111DMT_Tribal.skm",
        "originalSkmName":  "111DMT Tribal.skm",
        "desc":  "Tribal es una mezcla de colores tierras, que marca la diferencia para crear una decoración minimalista y nativa en tus ambientes. (Línea Étnica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001414,
        "similType":  "Colores lisos",
        "toneLum":  135.2,
        "toneSubFamily":  2
    },
    {
        "id":  "fp_skm_66",
        "code":  "105TXT",
        "title":  "Ceniza",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_66_105TXT_Ceniza.jpg",
        "skmPath":  "assets/skm/fp_66_105TXT_Ceniza.skm",
        "originalSkmName":  "105TXT Ceniza.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001413,
        "similType":  "Colores lisos",
        "toneLum":  229,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_69",
        "code":  "108TXT",
        "title":  "Gris Humo",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_69_108TXT_Gris_Humo.jpg",
        "skmPath":  "assets/skm/fp_69_108TXT_Gris_Humo.skm",
        "originalSkmName":  "108TXT Gris Humo.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001412,
        "similType":  "Colores lisos",
        "toneLum":  201,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_63",
        "code":  "U763 ST9",
        "title":  "Gris perla",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/63_U763_ST9_Gris_perla.jpg",
        "skmPath":  "assets/skm/63_U763_ST9_Gris_perla.skm",
        "originalSkmName":  "U763 ST9 Gris perla_.skm",
        "desc":  "Diseño unicolor Gris perla (U763 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001411,
        "similType":  "Colores lisos",
        "toneLum":  192.3,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_62",
        "code":  "U763",
        "title":  "Gris perla",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/62_U763_Gris_perla.jpg",
        "skmPath":  "assets/skm/62_U763_Gris_perla.skm",
        "originalSkmName":  "U763 - Gris perla_.skm",
        "desc":  "Diseño unicolor Gris perla (U763). Tablero decorativo revestido de melamina EGGER.",
        "updatedAt":  1700001410,
        "similType":  "Colores lisos",
        "toneLum":  192.3,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_13",
        "code":  "215MES",
        "title":  "Gris Caliza",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_13_215MES_Gris_Caliza.jpg",
        "skmPath":  "assets/skm/fp_13_215MES_Gris_Caliza.skm",
        "originalSkmName":  "215MES Gris Caliza.skm",
        "desc":  "Evocando el color de la piedra caliza, este diseño gris claro se destaca por su facilidad a la hora de combinarlo con otros colores y diseños como las maderas. Su textura supermate perceptible al tacto lo convierte en un diseño versátil que logra transmitir una sensación de calidez y luminosidad a los ambientes. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001409,
        "similType":  "Colores lisos",
        "toneLum":  189.1,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_14",
        "code":  "214MES",
        "title":  "Gris Basalto",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_14_214MES_Gris_Basalto.jpg",
        "skmPath":  "assets/skm/fp_14_214MES_Gris_Basalto.skm",
        "originalSkmName":  "214MES Gris Basalto.skm",
        "desc":  "Tono neutral y versátil. Un gris intermedio, fresco y moderno que transmite una sensación de estabilidad y sobriedad. Un tono atemporal y elegante que se adapta fácilmente a una variedad de estilos de diseño y decoración gracias a su acabado supermate. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001408,
        "similType":  "Colores lisos",
        "toneLum":  148.1,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_60",
        "code":  "U732 PG",
        "title":  "Gris macadán",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/60_U732_PG_Gris_macadan.jpg",
        "skmPath":  "assets/skm/60_U732_PG_Gris_macadan.skm",
        "originalSkmName":  "U732 PG Gris macadán_.skm",
        "desc":  "Diseño unicolor Gris macadán (U732 PG). Acabado laqueado PerfectSense Premium Gloss de efecto espejo y alto brillo.",
        "updatedAt":  1700001407,
        "similType":  "Colores lisos",
        "toneLum":  133.1,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_61",
        "code":  "U732 ST9",
        "title":  "Gris macadán",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/61_U732_ST9_Gris_macadan.jpg",
        "skmPath":  "assets/skm/61_U732_ST9_Gris_macadan.skm",
        "originalSkmName":  "U732 ST9 Gris macadán_.skm",
        "desc":  "Diseño unicolor Gris macadán (U732 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001406,
        "similType":  "Colores lisos",
        "toneLum":  133.1,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_59",
        "code":  "U732",
        "title":  "Gris macadán",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/59_U732_Gris_macadan.jpg",
        "skmPath":  "assets/skm/59_U732_Gris_macadan.skm",
        "originalSkmName":  "U732 - Gris macadán_.skm",
        "desc":  "Diseño unicolor Gris macadán (U732). Tablero decorativo revestido de melamina EGGER.",
        "updatedAt":  1700001405,
        "similType":  "Colores lisos",
        "toneLum":  133.1,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_64",
        "code":  "U767 ST9",
        "title":  "Gris cubanita",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/64_U767_ST9_Gris_cubanita.jpg",
        "skmPath":  "assets/skm/64_U767_ST9_Gris_cubanita.skm",
        "originalSkmName":  "U767 ST9 Gris cubanita_.skm",
        "desc":  "Diseño unicolor Gris cubanita (U767 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001404,
        "similType":  "Colores lisos",
        "toneLum":  128.8,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_12",
        "code":  "942TAC",
        "title":  "Grey Extreme Matt",
        "line":  "Línea Táctil",
        "dimensions":  "1300 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_12_942TAC_Grey_Extreme_Matt.jpg",
        "skmPath":  "assets/skm/fp_12_942TAC_Grey_Extreme_Matt.skm",
        "originalSkmName":  "942TAC Grey Extreme Matt.skm",
        "desc":  "Gris grafito cálido en terminación EXTREME MATT. Su acabado ultra-opaco lo vuelve un complemento ideal para tus proyectos. (Línea Táctil • Placa 1300 x 2750 mm).",
        "updatedAt":  1700001403,
        "similType":  "Colores lisos",
        "toneLum":  92.1,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_67",
        "code":  "107TXT",
        "title":  "Grafito",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_67_107TXT_Grafito.jpg",
        "skmPath":  "assets/skm/fp_67_107TXT_Grafito.skm",
        "originalSkmName":  "107TXT Grafito.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001402,
        "similType":  "Colores lisos",
        "toneLum":  77,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_65",
        "code":  "U963",
        "title":  "Gris sombra",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/65_U963_Gris_sombra.jpg",
        "skmPath":  "assets/skm/65_U963_Gris_sombra.skm",
        "originalSkmName":  "U963 - Gris sombra_.skm",
        "desc":  "Diseño unicolor Gris sombra (U963). Tablero decorativo revestido de melamina EGGER.",
        "updatedAt":  1700001401,
        "similType":  "Colores lisos",
        "toneLum":  74,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_66",
        "code":  "U963 ST9",
        "title":  "Gris sombra",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/66_U963_ST9_Gris_sombra.jpg",
        "skmPath":  "assets/skm/66_U963_ST9_Gris_sombra.skm",
        "originalSkmName":  "U963 ST9 Gris sombra_.skm",
        "desc":  "Diseño unicolor Gris sombra (U963 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001400,
        "similType":  "Colores lisos",
        "toneLum":  74,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_67",
        "code":  "U9631 ST9",
        "title":  "Gris Sombra Sólida",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/67_U9631_ST9_Gris_Sombra_Solida.jpg",
        "skmPath":  "assets/skm/67_U9631_ST9_Gris_Sombra_Solida.skm",
        "originalSkmName":  "U9631 ST9 Gris Sombra Sólida_.skm",
        "desc":  "Diseño unicolor Gris Sombra Sólida (U9631 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001399,
        "similType":  "Colores lisos",
        "toneLum":  74,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_10",
        "code":  "943TAC",
        "title":  "Black Extreme Matt",
        "line":  "Línea Táctil",
        "dimensions":  "1300 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_10_943TAC_Black_Extreme_Matt.jpg",
        "skmPath":  "assets/skm/fp_10_943TAC_Black_Extreme_Matt.skm",
        "originalSkmName":  "943TAC Black Extreme Matt.skm",
        "desc":  "Negro en terminación EXTREME MATT. La alternativa ideal para espacios como cocinas y escritorios gracias a su superficie anti-réflex y su color negro intenso. (Línea Táctil • Placa 1300 x 2750 mm).",
        "updatedAt":  1700001398,
        "similType":  "Colores lisos",
        "toneLum":  53.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_73",
        "code":  "U999 ST9",
        "title":  "Negro",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/73_U999_ST9_Negro.jpg",
        "skmPath":  "assets/skm/73_U999_ST9_Negro.skm",
        "originalSkmName":  "U999 ST9 Negro_.skm",
        "desc":  "Diseño unicolor Negro (U999 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001397,
        "similType":  "Colores lisos",
        "toneLum":  4.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_72",
        "code":  "U999 ST20",
        "title":  "Negro",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/72_U999_ST20_Negro.jpg",
        "skmPath":  "assets/skm/72_U999_ST20_Negro.skm",
        "originalSkmName":  "U999 ST20 Negro_.skm",
        "desc":  "Diseño unicolor Negro (U999 ST20). Textura Metal Brushed de aspecto metálico finamente cepillado.",
        "updatedAt":  1700001396,
        "similType":  "Colores lisos",
        "toneLum":  4.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_69",
        "code":  "U999 PG",
        "title":  "Negro",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/69_U999_PG_Negro.jpg",
        "skmPath":  "assets/skm/69_U999_PG_Negro.skm",
        "originalSkmName":  "U999 PG Negro_.skm",
        "desc":  "Diseño unicolor Negro (U999 PG). Acabado laqueado PerfectSense Premium Gloss de efecto espejo y alto brillo.",
        "updatedAt":  1700001395,
        "similType":  "Colores lisos",
        "toneLum":  4.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_70",
        "code":  "U999 PM",
        "title":  "Negro",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/70_U999_PM_Negro.jpg",
        "skmPath":  "assets/skm/70_U999_PM_Negro.skm",
        "originalSkmName":  "U999 PM Negro_.skm",
        "desc":  "Diseño unicolor Negro (U999 PM). Acabado lacado PerfectSense Premium Matt antihuellas de tacto aterciopelado.",
        "updatedAt":  1700001394,
        "similType":  "Colores lisos",
        "toneLum":  4.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_68",
        "code":  "U999",
        "title":  "Negro",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/68_U999_Negro.jpg",
        "skmPath":  "assets/skm/68_U999_Negro.skm",
        "originalSkmName":  "U999 - Negro_.skm",
        "desc":  "Diseño unicolor Negro (U999). Tablero decorativo revestido de melamina EGGER.",
        "updatedAt":  1700001393,
        "similType":  "Colores lisos",
        "toneLum":  4.2,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_71",
        "code":  "U999 ST19",
        "title":  "Negro",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/71_U999_ST19_Negro.jpg",
        "skmPath":  "assets/skm/71_U999_ST19_Negro.skm",
        "originalSkmName":  "U999 ST19 Negro_.skm",
        "desc":  "Diseño unicolor Negro (U999 ST19). Textura Deepskin Excellent que combina veta de madera mate y poros satinados.",
        "updatedAt":  1700001392,
        "similType":  "Colores lisos",
        "toneLum":  4.2,
        "toneSubFamily":  3
    },
    {
        "id":  "fp_skm_68",
        "code":  "303TXT",
        "title":  "Negro Profundo",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_68_303TXT_Negro_Profundo.jpg",
        "skmPath":  "assets/skm/fp_68_303TXT_Negro_Profundo.skm",
        "originalSkmName":  "303TXT Negro Profundo.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001391,
        "similType":  "Colores lisos",
        "toneLum":  3.9,
        "toneSubFamily":  3
    },
    {
        "id":  "eg_skm_45",
        "code":  "U114 ST9",
        "title":  "Amarillo girasol",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/45_U114_ST9_Amarillo_girasol.jpg",
        "skmPath":  "assets/skm/45_U114_ST9_Amarillo_girasol.skm",
        "originalSkmName":  "U114 ST9 Amarillo girasol_.skm",
        "desc":  "Diseño unicolor Amarillo girasol (U114 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001390,
        "similType":  "Colores lisos",
        "toneLum":  188.9,
        "toneSubFamily":  4
    },
    {
        "id":  "eg_skm_49",
        "code":  "U350 ST9",
        "title":  "Naranja de Siena",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/49_U350_ST9_Naranja_de_Siena.jpg",
        "skmPath":  "assets/skm/49_U350_ST9_Naranja_de_Siena.skm",
        "originalSkmName":  "U350 ST9 Naranja de Siena_.skm",
        "desc":  "Diseño unicolor Naranja de Siena (U350 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001389,
        "similType":  "Colores lisos",
        "toneLum":  127.2,
        "toneSubFamily":  4
    },
    {
        "id":  "fp_skm_09",
        "code":  "223MES",
        "title":  "Terracota",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_09_223MES_Terracota.jpg",
        "skmPath":  "assets/skm/fp_09_223MES_Terracota.skm",
        "originalSkmName":  "223MES Terracota.skm",
        "desc":  "Un tono profundo y vibrante que evoca la intensidad de los suelos mesopotámicos. Este diseño terracota aporta calidez, identidad y un carácter natural a cualquier espacio. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001388,
        "similType":  "Colores lisos",
        "toneLum":  102.7,
        "toneSubFamily":  4
    },
    {
        "id":  "fp_skm_31",
        "code":  "113DMT",
        "title":  "Himalaya",
        "line":  "Línea Étnica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_31_113DMT_Himalaya.jpg",
        "skmPath":  "assets/skm/fp_31_113DMT_Himalaya.skm",
        "originalSkmName":  "113DMT Himalaya.skm",
        "desc":  "Himalaya es un diseño contemporáneo que crea la sensación de suavidad y delicadeza. (Línea Étnica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001387,
        "similType":  "Colores lisos",
        "toneLum":  192.2,
        "toneSubFamily":  5
    },
    {
        "id":  "eg_skm_48",
        "code":  "U325 ST9",
        "title":  "Rosa antiguo",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/48_U325_ST9_Rosa_antiguo.jpg",
        "skmPath":  "assets/skm/48_U325_ST9_Rosa_antiguo.skm",
        "originalSkmName":  "U325 ST9 Rosa antiguo_.skm",
        "desc":  "Diseño unicolor Rosa antiguo (U325 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001386,
        "similType":  "Colores lisos",
        "toneLum":  167.9,
        "toneSubFamily":  5
    },
    {
        "id":  "eg_skm_50",
        "code":  "U398 PM",
        "title":  "Castaño cassis",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/50_U398_PM_Castano_cassis.jpg",
        "skmPath":  "assets/skm/50_U398_PM_Castano_cassis.skm",
        "originalSkmName":  "U398 PM Castaño cassis.skm",
        "desc":  "Diseño unicolor Castaño cassis (U398 PM). Acabado lacado PerfectSense Premium Matt antihuellas de tacto aterciopelado.",
        "updatedAt":  1700001385,
        "similType":  "Colores lisos",
        "toneLum":  83.1,
        "toneSubFamily":  5
    },
    {
        "id":  "eg_skm_47",
        "code":  "U323 ST9",
        "title":  "Rojo cereza",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/47_U323_ST9_Rojo_cereza.jpg",
        "skmPath":  "assets/skm/47_U323_ST9_Rojo_cereza.skm",
        "originalSkmName":  "U323 ST9 Rojo cereza_.skm",
        "desc":  "Diseño unicolor Rojo cereza (U323 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001384,
        "similType":  "Colores lisos",
        "toneLum":  56.8,
        "toneSubFamily":  5
    },
    {
        "id":  "fp_skm_16",
        "code":  "213MES",
        "title":  "Amatista",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_16_213MES_Amatista.jpg",
        "skmPath":  "assets/skm/fp_16_213MES_Amatista.skm",
        "originalSkmName":  "213MES Amatista.skm",
        "desc":  "Inspirado en la piedra amatista y su distintivo color lavanda presentado en una exclusiva textura supermate. Este color tiende a evocar sentimientos de serenidad y paz, lo que lo hace adecuado para crear ambientes tranquilos y apacibles. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001383,
        "similType":  "Colores lisos",
        "toneLum":  179.3,
        "toneSubFamily":  6
    },
    {
        "id":  "fp_skm_17",
        "code":  "217MES",
        "title":  "Jade",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_17_217MES_Jade.jpg",
        "skmPath":  "assets/skm/fp_17_217MES_Jade.skm",
        "originalSkmName":  "217MES Jade.skm",
        "desc":  "Inspirado en la piedra jade, el frescor y la tranquilidad de la naturaleza, este diseño verde suave se destaca por sus versátiles aplicaciones. El acabado supermate reproduce el efecto laqueado mate y traslada a los proyectos la esencia de vida y serenidad. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001382,
        "similType":  "Colores lisos",
        "toneLum":  167.9,
        "toneSubFamily":  7
    },
    {
        "id":  "eg_skm_53",
        "code":  "U626 ST9",
        "title":  "Verde kiwi",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/53_U626_ST9_Verde_kiwi.jpg",
        "skmPath":  "assets/skm/53_U626_ST9_Verde_kiwi.skm",
        "originalSkmName":  "U626 ST9 Verde kiwi_.skm",
        "desc":  "Diseño unicolor Verde kiwi (U626 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001381,
        "similType":  "Colores lisos",
        "toneLum":  138.8,
        "toneSubFamily":  7
    },
    {
        "id":  "fp_skm_32",
        "code":  "115DMT",
        "title":  "Safari",
        "line":  "Línea Étnica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_32_115DMT_Safari.jpg",
        "skmPath":  "assets/skm/fp_32_115DMT_Safari.skm",
        "originalSkmName":  "115DMT Safari.skm",
        "desc":  "Para crear el equilibrio perfecto entre la naturaleza y la armonía de las maderas, se encuentra el diseño Safari. Su tonalidad transmite la conexión con tus raíces. (Línea Étnica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001380,
        "similType":  "Colores lisos",
        "toneLum":  99,
        "toneSubFamily":  7
    },
    {
        "id":  "eg_skm_54",
        "code":  "U665 PM",
        "title":  "Verde Mineral",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/54_U665_PM_Verde_Mineral.jpg",
        "skmPath":  "assets/skm/54_U665_PM_Verde_Mineral.skm",
        "originalSkmName":  "U665 PM Verde Mineral.skm",
        "desc":  "Diseño unicolor Verde Mineral (U665 PM). Acabado lacado PerfectSense Premium Matt antihuellas de tacto aterciopelado.",
        "updatedAt":  1700001379,
        "similType":  "Colores lisos",
        "toneLum":  93.1,
        "toneSubFamily":  7
    },
    {
        "id":  "eg_skm_51",
        "code":  "U504 ST9",
        "title":  "Azul cósmico",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/51_U504_ST9_Azul_cosmico.jpg",
        "skmPath":  "assets/skm/51_U504_ST9_Azul_cosmico.skm",
        "originalSkmName":  "U504 ST9 Azul cósmico_.skm",
        "desc":  "Diseño unicolor Azul cósmico (U504 ST9). Textura Smoothtouch Matt de tacto mate suave y aspecto contemporáneo.",
        "updatedAt":  1700001378,
        "similType":  "Colores lisos",
        "toneLum":  79.3,
        "toneSubFamily":  8
    },
    {
        "id":  "eg_skm_52",
        "code":  "U599 PM",
        "title":  "Azul Indigo",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/52_U599_PM_Azul_Indigo.jpg",
        "skmPath":  "assets/skm/52_U599_PM_Azul_Indigo.skm",
        "originalSkmName":  "U599 PM Azul Indigo.skm",
        "desc":  "Diseño unicolor Azul Indigo (U599 PM). Acabado lacado PerfectSense Premium Matt antihuellas de tacto aterciopelado.",
        "updatedAt":  1700001377,
        "similType":  "Colores lisos",
        "toneLum":  45.7,
        "toneSubFamily":  8
    },
    {
        "id":  "fp_skm_30",
        "code":  "114DMT",
        "title":  "Tuareg",
        "line":  "Línea Étnica",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • UNICOLORES",
        "filterCat":  "Unicolores",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_30_114DMT_Tuareg.jpg",
        "skmPath":  "assets/skm/fp_30_114DMT_Tuareg.skm",
        "originalSkmName":  "114DMT Tuareg.skm",
        "desc":  "Es el diseño perfecto para componer un ambiente con identidad y elegancia. (Línea Étnica • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001376,
        "similType":  "Colores lisos",
        "toneLum":  31,
        "toneSubFamily":  8
    },
    {
        "id":  "eg_skm_42",
        "code":  "F422 ST10",
        "title":  "Lino blanco",
        "category":  "MELAMINAS • TEXTIL",
        "filterCat":  "Textil",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/42_F422_ST10_Lino_blanco.jpg",
        "skmPath":  "assets/skm/42_F422_ST10_Lino_blanco.skm",
        "originalSkmName":  "F422 ST10 Lino blanco_.skm",
        "desc":  "Reproducción de lino fino luminoso ideal para interiores de clósets y vestidores.",
        "updatedAt":  1700001375,
        "similType":  "Simil Textil",
        "toneLum":  241.4,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_51",
        "code":  "135HIL",
        "title":  "Lino Blanco",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_51_135HIL_Lino_Blanco.jpg",
        "skmPath":  "assets/skm/fp_51_135HIL_Lino_Blanco.skm",
        "originalSkmName":  "135HIL Lino Blanco.skm",
        "desc":  "Su exclusiva fibra natural transmite calidez a sus ambientes, logrando soluciones que unen sofisticación, funcionalidad y confort visual a cada nueva creación del proyecto. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001374,
        "similType":  "Simil Textil",
        "toneLum":  239.2,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_50",
        "code":  "153HIL",
        "title":  "Lino Chiaro",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_50_153HIL_Lino_Chiaro.jpg",
        "skmPath":  "assets/skm/fp_50_153HIL_Lino_Chiaro.skm",
        "originalSkmName":  "153HIL Lino Chiaro.skm",
        "desc":  "Su exclusiva fibra natural transmite calidez a sus ambientes, logrando soluciones que unen sofisticación, funcionalidad y confort visual a cada nueva creación del proyecto. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001373,
        "similType":  "Simil Textil",
        "toneLum":  219.5,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_40",
        "code":  "F416 ST10",
        "title":  "Textil beige",
        "category":  "MELAMINAS • TEXTIL",
        "filterCat":  "Textil",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/40_F416_ST10_Textil_beige.jpg",
        "skmPath":  "assets/skm/40_F416_ST10_Textil_beige.skm",
        "originalSkmName":  "F416 ST10 Textil beige_.skm",
        "desc":  "Trama textil tejida de aspecto cálido y natural en tono beige con textura ST10.",
        "updatedAt":  1700001372,
        "similType":  "Simil Textil",
        "toneLum":  196,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_41",
        "code":  "F417 ST10",
        "title":  "Textil gris",
        "category":  "MELAMINAS • TEXTIL",
        "filterCat":  "Textil",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/41_F417_ST10_Textil_gris.jpg",
        "skmPath":  "assets/skm/41_F417_ST10_Textil_gris.skm",
        "originalSkmName":  "F417 ST10 Textil gris_.skm",
        "desc":  "Acabado textil neutro en tono gris medio con relieve áspero Deepskin Rough.",
        "updatedAt":  1700001371,
        "similType":  "Simil Textil",
        "toneLum":  189.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_02",
        "code":  "230IMP",
        "title":  "Kisa",
        "line":  "Línea Imperial",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_02_230IMP_Kisa.jpg",
        "skmPath":  "assets/skm/fp_02_230IMP_Kisa.skm",
        "originalSkmName":  "230IMP Kisa.skm",
        "desc":  "Un diseño de inspiración textil que combina suavidad visual, sofisticación y versatilidad para crear espacios contemporáneos y refinados. (Línea Imperial • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001370,
        "similType":  "Simil Textil",
        "toneLum":  187.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_48",
        "code":  "150HIL",
        "title":  "Seda Giorno",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_48_150HIL_Seda_Giorno.jpg",
        "skmPath":  "assets/skm/fp_48_150HIL_Seda_Giorno.skm",
        "originalSkmName":  "150HIL Seda Giorno.skm",
        "desc":  "Su delicadada trama le otorga al mueble una elegancia exclusiva y distintiva, generando una personalidad única en todos sus ambientes. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001369,
        "similType":  "Simil Textil",
        "toneLum":  182.4,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_08",
        "code":  "224MES",
        "title":  "Yute",
        "line":  "Línea Mesopotamia",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_08_224MES_Yute.jpg",
        "skmPath":  "assets/skm/fp_08_224MES_Yute.skm",
        "originalSkmName":  "224MES Yute.skm",
        "desc":  "Inspirado en la fibra natural del yute, este diseño viene a ofrecer una gran alternativa a textiles naturales o al papel tapiz, incrementando las posibilidades para poder fabricar mobiliario con una apariencia textil en un color completamente natural. (Línea Mesopotamia • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001368,
        "similType":  "Simil Textil",
        "toneLum":  159,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_43",
        "code":  "F424 ST10",
        "title":  "Lino topo",
        "category":  "MELAMINAS • TEXTIL",
        "filterCat":  "Textil",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/43_F424_ST10_Lino_topo.jpg",
        "skmPath":  "assets/skm/43_F424_ST10_Lino_topo.skm",
        "originalSkmName":  "F424 ST10 Lino topo_.skm",
        "desc":  "Tejido de lino en tono topo cálido con sensación táctil auténtica ST10.",
        "updatedAt":  1700001367,
        "similType":  "Simil Textil",
        "toneLum":  137.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_49",
        "code":  "151HIL",
        "title":  "Seda Notte",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_49_151HIL_Seda_Notte.jpg",
        "skmPath":  "assets/skm/fp_49_151HIL_Seda_Notte.skm",
        "originalSkmName":  "151HIL Seda Notte.skm",
        "desc":  "Su delicadada trama le otorga al mueble una elegancia exclusiva y distintiva, generando una personalidad única en todos sus ambientes. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001366,
        "similType":  "Simil Textil",
        "toneLum":  135.8,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_44",
        "code":  "F433 ST10",
        "title":  "Lino antracita",
        "category":  "MELAMINAS • TEXTIL",
        "filterCat":  "Textil",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/44_F433_ST10_Lino_antracita.jpg",
        "skmPath":  "assets/skm/44_F433_ST10_Lino_antracita.skm",
        "originalSkmName":  "F433 ST10 Lino antracita_.skm",
        "desc":  "Trama de lino oscuro en tono antracita para interiores de mobiliario de alta gama.",
        "updatedAt":  1700001365,
        "similType":  "Simil Textil",
        "toneLum":  123.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_52",
        "code":  "152HIL",
        "title":  "Lino Terra",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_52_152HIL_Lino_Terra.jpg",
        "skmPath":  "assets/skm/fp_52_152HIL_Lino_Terra.skm",
        "originalSkmName":  "152HIL Lino Terra.skm",
        "desc":  "Si buscás este tipo de tono para transmitir calidez a tus ambientes, podes probar con el diseño Tribal de la línea Étnica. Si buscás un patrón hilado, te recomendamos Yute como una alternativa cálida y a la vez rústica. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001364,
        "similType":  "Simil Textil",
        "toneLum":  100.7,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_53",
        "code":  "303HIL",
        "title":  "Lino Negro",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_53_303HIL_Lino_Negro.jpg",
        "skmPath":  "assets/skm/fp_53_303HIL_Lino_Negro.skm",
        "originalSkmName":  "303HIL Lino Negro.skm",
        "desc":  "Su exclusiva fibra natural transmite calidez a sus ambientes, logrando soluciones que unen sofisticación, funcionalidad y confort visual a cada nueva creación del proyecto. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001363,
        "similType":  "Simil Textil",
        "toneLum":  34.3,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_27",
        "code":  "118HIL",
        "title":  "Seda Azzurra",
        "line":  "Línea Hilados",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_27_118HIL_Seda_Azzurra.jpg",
        "skmPath":  "assets/skm/fp_27_118HIL_Seda_Azzurra.skm",
        "originalSkmName":  "118HIL Seda Azzurra.skm",
        "desc":  "Si buscás este tipo de tono azulado, te recomendamos el diseño Tuareg. Este azul profundo posee la misma tonalidad del Seda Azurra pero en terminación Supermate. (Línea Hilados • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001362,
        "similType":  "Simil Textil",
        "toneLum":  29.8,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_03",
        "code":  "232IMP",
        "title":  "Travertino",
        "line":  "Línea Imperial",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_03_232IMP_Travertino.jpg",
        "skmPath":  "assets/skm/fp_03_232IMP_Travertino.skm",
        "originalSkmName":  "232IMP Travertino.skm",
        "desc":  "Inspirado en la nobleza de la piedra travertino, este diseño combina texturas sutiles y tonalidades suaves que logran elevar cualquier espacio. (Línea Imperial • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001361,
        "similType":  "Simil Piedra",
        "toneLum":  216.2,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_42",
        "code":  "025STU",
        "title":  "Home",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_42_025STU_Home.jpg",
        "skmPath":  "assets/skm/fp_42_025STU_Home.skm",
        "originalSkmName":  "025STU Home.skm",
        "desc":  "Su tonalidad clara transmite modernidad y una completa sensación de amplitud a cada espacio. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001360,
        "similType":  "Simil Piedra",
        "toneLum":  193.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_35",
        "code":  "026STU",
        "title":  "Viena",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_35_026STU_Viena.jpg",
        "skmPath":  "assets/skm/fp_35_026STU_Viena.skm",
        "originalSkmName":  "026STU Viena.skm",
        "desc":  "Viena es un diseño exclusivo que combina distintos materiales como la piedra y el textil en un solo espacio. Se destaca por ser rústico y vanguardista otorgando identidad a los ambientes. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001359,
        "similType":  "Simil Piedra",
        "toneLum":  186,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_41",
        "code":  "024STU",
        "title":  "Street",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_41_024STU_Street.jpg",
        "skmPath":  "assets/skm/fp_41_024STU_Street.skm",
        "originalSkmName":  "024STU Street.skm",
        "desc":  "Su diseño rústico y renovado, le otorga a los ambientes toques de personalidad y vanguardismo. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001358,
        "similType":  "Simil Piedra",
        "toneLum":  153.7,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_26",
        "code":  "119STU",
        "title":  "Coliseo",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_26_119STU_Coliseo.jpg",
        "skmPath":  "assets/skm/fp_26_119STU_Coliseo.skm",
        "originalSkmName":  "119STU Coliseo.skm",
        "desc":  "Nos remite a una piedra rústica con historia, creando una apariencia robusta e imponente que combina muy bien con el estilo industrial, contemporáneo o minimalista. Esta propuesta versátil, según con qué se la acompañe nos permite crear una infinidad de ambientes y climas. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001357,
        "similType":  "Simil Piedra",
        "toneLum":  112.8,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_38",
        "code":  "F187 ST9",
        "title":  "Hormigón Chicago gris oscuro",
        "category":  "MELAMINAS • PIEDRA",
        "filterCat":  "Piedra",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/38_F187_ST9_Hormigon_Chicago_gris_oscuro.jpg",
        "skmPath":  "assets/skm/38_F187_ST9_Hormigon_Chicago_gris_oscuro.skm",
        "originalSkmName":  "F187 ST9 Hormigón Chicago gris oscuro_.skm",
        "desc":  "Reproducción de hormigón frío en tono gris oscuro para diseños industriales y modernos.",
        "updatedAt":  1700001356,
        "similType":  "Simil Piedra",
        "toneLum":  86.7,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_34",
        "code":  "058DMT",
        "title":  "Amberes",
        "line":  "Línea Urban Concept",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_34_058DMT_Amberes.jpg",
        "skmPath":  "assets/skm/fp_34_058DMT_Amberes.skm",
        "originalSkmName":  "058DMT Amberes.skm",
        "desc":  "Amberes es un mármol negro tipo Marquina, siendo la perfecta combinación con otros materiales para crear un ambiente elegante y moderno. (Línea Urban Concept • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001355,
        "similType":  "Simil Piedra",
        "toneLum":  58.9,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_39",
        "code":  "F206 ST9",
        "title":  "Pietra Grigia negro",
        "category":  "MELAMINAS • PIEDRA",
        "filterCat":  "Piedra",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/39_F206_ST9_Pietra_Grigia_negro.jpg",
        "skmPath":  "assets/skm/39_F206_ST9_Pietra_Grigia_negro.skm",
        "originalSkmName":  "F206 ST9 Pietra Grigia negro_.skm",
        "desc":  "Mármol negro intenso con finas vetas blancas que aportan contraste y elegancia.",
        "updatedAt":  1700001354,
        "similType":  "Simil Piedra",
        "toneLum":  47.3,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_36",
        "code":  "F637 ST10",
        "title":  "Chromix blanco",
        "category":  "MELAMINAS • METAL",
        "filterCat":  "Metal",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/36_F637_ST10_Chromix_blanco.jpg",
        "skmPath":  "assets/skm/36_F637_ST10_Chromix_blanco.skm",
        "originalSkmName":  "F637 ST10 Chromix blanco_.skm",
        "desc":  "Diseño con carácter metálico y aspecto de hormigón oxidado blanco en textura ST10.",
        "updatedAt":  1700001353,
        "similType":  "Simil Metal",
        "toneLum":  216.5,
        "toneSubFamily":  1
    },
    {
        "id":  "fp_skm_71",
        "code":  "202TXT",
        "title":  "Aluminio",
        "line":  "Línea Lisos",
        "dimensions":  "1830 x 2750 mm",
        "category":  "MELAMINAS • REPRODUCCIONES",
        "filterCat":  "Reproducciones",
        "brand":  "FAPLAC",
        "brandClass":  "faplac",
        "img":  "assets/materials/fp_71_202TXT_Aluminio.jpg",
        "skmPath":  "assets/skm/fp_71_202TXT_Aluminio.skm",
        "originalSkmName":  "202TXT Aluminio.skm",
        "desc":  "Tablero de MDP (aglomerado) o MDF revestido en ambas caras con papel decorativo impregnado con resinas melamínicas. (Línea Lisos • Placa 1830 x 2750 mm).",
        "updatedAt":  1700001352,
        "similType":  "Simil Metal",
        "toneLum":  182,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_34",
        "code":  "F527 ST20",
        "title":  "Metal cepillado oro",
        "category":  "MELAMINAS • METAL",
        "filterCat":  "Metal",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/34_F527_ST20_Metal_cepillado_oro.jpg",
        "skmPath":  "assets/skm/34_F527_ST20_Metal_cepillado_oro.skm",
        "originalSkmName":  "F527 ST20 Metal cepillado oro_.skm",
        "desc":  "Superficie metálica dorada cepillada fina para acentos elegantes en mobiliario.",
        "updatedAt":  1700001351,
        "similType":  "Simil Metal",
        "toneLum":  163.8,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_37",
        "code":  "F638 ST10",
        "title":  "Chromix plata",
        "category":  "MELAMINAS • METAL",
        "filterCat":  "Metal",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/37_F638_ST10_Chromix_plata.jpg",
        "skmPath":  "assets/skm/37_F638_ST10_Chromix_plata.skm",
        "originalSkmName":  "F638 ST10 Chromix plata_.skm",
        "desc":  "Superficie de aspecto metálico industrial en tono plata con textura Deepskin Rough.",
        "updatedAt":  1700001350,
        "similType":  "Simil Metal",
        "toneLum":  155.4,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_33",
        "code":  "F500 ST20",
        "title":  "Metallic inox",
        "category":  "MELAMINAS • METAL",
        "filterCat":  "Metal",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/33_F500_ST20_Metallic_inox.jpg",
        "skmPath":  "assets/skm/33_F500_ST20_Metallic_inox.skm",
        "originalSkmName":  "F500 ST20 Metallic inox_.skm",
        "desc":  "Acero inoxidable cepillado frío con acabado auténtico ST20 Metal Brushed.",
        "updatedAt":  1700001349,
        "similType":  "Simil Metal",
        "toneLum":  132.9,
        "toneSubFamily":  1
    },
    {
        "id":  "eg_skm_35",
        "code":  "F528 ST20",
        "title":  "Metal cepillado bronce",
        "category":  "MELAMINAS • METAL",
        "filterCat":  "Metal",
        "brand":  "EGGER",
        "brandClass":  "egger",
        "img":  "assets/materials/35_F528_ST20_Metal_cepillado_bronce.jpg",
        "skmPath":  "assets/skm/35_F528_ST20_Metal_cepillado_bronce.skm",
        "originalSkmName":  "F528 ST20 Metal cepillado bronce_.skm",
        "desc":  "Acabado metálico en bronce cálido con textura lineal cepillada ST20 Metal Brushed.",
        "updatedAt":  1700001348,
        "similType":  "Simil Metal",
        "toneLum":  85.7,
        "toneSubFamily":  1
    }
];


const DEFAULT_MODULES = [
  { id: 'mod_01', title: 'Cajoneras y Sistemas de Cajones', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isCollection: true, isDynamic: true, defaultW: 600, defaultD: 550, defaultH: 720, img: 'assets/modules/mod_01.png', desc: 'Catálogo integral de cajonerías y gaveteros dinámicos con correderas telescópicas y espesor fijo de melamina (18 mm / 15 mm) al escalar.', updatedAt: 1700000016, usageCount: 28 },
  { id: 'mod_02', title: 'Módulos Bajo de Cocina', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isCollection: true, isDynamic: true, defaultW: 800, defaultD: 580, defaultH: 720, img: 'assets/modules/mod_02.png', desc: 'Módulo bajo estandarizado con listones de amarre superiores, estante interno regulable y puertas batientes con espesor fijo.', updatedAt: 1700000015, usageCount: 35 },
  { id: 'mod_03', title: 'Módulos Superiores de Cocina', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isCollection: true, isDynamic: true, defaultW: 800, defaultD: 320, defaultH: 600, img: 'assets/modules/mod_03.png', desc: 'Alacena aérea paramétrica con divisor central, estantes regulables y puertas frontales con espesor de placa constante.', updatedAt: 1700000014, usageCount: 24 },
  { id: 'mod_04', title: 'Esquinero base', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 900, defaultD: 900, defaultH: 720, img: 'assets/modules/mod_04.png', desc: 'Estructura esquinera en L adaptable para cocinas integrales, construida como bloque dinámico con espesor fijo de 18 mm o 15 mm.', updatedAt: 1700000013, usageCount: 19 },
  { id: 'mod_05', title: 'Estructura esquinero diamante', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 900, defaultD: 900, defaultH: 720, img: 'assets/modules/mod_05.png', desc: 'Esquinero pentagonal con frente a 45° diseñado para optimizar esquinas manteniendo el espesor de melamina inalterable.', updatedAt: 1700000012, usageCount: 22 },
  { id: 'mod_06', title: 'Corredera telescópica', category: 'HERRAJES', filterCat: 'Herrajes', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 45, defaultD: 500, defaultH: 45, img: 'assets/modules/mod_06.png', desc: 'Herraje inteligente paramétrico compuesto por riel exterior fijo y perfil interior extensible en acero.', updatedAt: 1700000011, usageCount: 15 },
  { id: 'mod_07', title: 'MS Puertas elevables', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 800, defaultD: 320, defaultH: 720, img: 'assets/modules/mod_07.png', desc: 'Módulo superior con doble frente horizontal de apertura vertical para alacenas contemporáneas.', updatedAt: 1700000010, usageCount: 20 },
  { id: 'mod_08', title: 'Puertas elevables', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 800, defaultD: 18, defaultH: 720, img: 'assets/modules/mod_08.png', desc: 'Frentes horizontales con apertura vertical plegable doble manteniendo 18 mm o 15 mm de espesor fijo.', updatedAt: 1700000009, usageCount: 12 },
  { id: 'mod_09', title: 'Puertas corredizas con D-52', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 1200, defaultD: 65, defaultH: 2000, img: 'assets/modules/mod_09.png', desc: 'Sistema corredizo modular de 2 hojas superpuestas para placares y vestidores con rieles D-52.', updatedAt: 1700000008, usageCount: 18 },
  { id: 'mod_10', title: 'MB Puertas + Cajon', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 800, defaultD: 580, defaultH: 720, img: 'assets/modules/mod_10.png', desc: 'Módulo bajo paramétrico con cajón superior y 2 puertas batientes inferiores con espesor bloqueado al escalar.', updatedAt: 1700000007, usageCount: 31 },
  { id: 'mod_11', title: 'Vinero Rejilla', category: 'ACCESORIOS', filterCat: 'Accesorios', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 450, defaultD: 320, defaultH: 450, img: 'assets/modules/mod_11.png', desc: 'Vinero paramétrico en cuadrícula 3×3 encastrada con divisores de espesor fijo (18 mm / 15 mm).', updatedAt: 1700000006, usageCount: 14 },
  { id: 'mod_12', title: 'Estructura esquinero flotante', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 650, defaultD: 650, defaultH: 600, img: 'assets/modules/mod_12.png', desc: 'Módulo aéreo esquinero en L con repisa intermedia y espesor de placa constante al escalar.', updatedAt: 1700000005, usageCount: 11 },
  { id: 'mod_13', title: 'MB con condimentero', category: 'ACCESORIOS', filterCat: 'Accesorios', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 200, defaultD: 580, defaultH: 720, img: 'assets/modules/mod_13.png', desc: 'Módulo bajo extraíble angosto con bandejas interiores para especieros y botellas.', updatedAt: 1700000004, usageCount: 16 },
  { id: 'mod_14', title: 'Condimentero de madera', category: 'ACCESORIOS', filterCat: 'Accesorios', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 180, defaultD: 500, defaultH: 640, img: 'assets/modules/mod_14.png', desc: 'Organizador extraíble de 3 niveles con barandas laterales en melamina de espesor fijo.', updatedAt: 1700000003, usageCount: 10 },
  { id: 'mod_15', title: 'Módulo abierto', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 500, defaultD: 350, defaultH: 720, img: 'assets/modules/mod_15.png', desc: 'Módulo abierto con 2 repisas regulables, ideal para exhibición conservando 18 mm o 15 mm al escalar.', updatedAt: 1700000002, usageCount: 17 },
  { id: 'mod_16', title: 'Estructura esquinero bajo', category: 'MÓDULO', filterCat: 'Carpintería', brand: 'ENSSAMBLE', isDynamic: true, defaultW: 950, defaultD: 580, defaultH: 720, img: 'assets/modules/mod_16.png', desc: 'Módulo bajo esquinero recto con divisor central y puerta frontal en espesor fijo inalterable.', updatedAt: 1700000001, usageCount: 13 }
];







// ============================================================================
// CATÁLOGO DE HERRAJES CON IMÁGENES DEDICADAS VERIFICADAS (her_01.jpg .. her_08.jpg)
// ============================================================================
const HERRAJES_MATERIALS = [
  {
    id: 'her_mat_01',
    code: 'HER-INOX',
    title: 'Acero Inoxidable Esmerilado 304',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_01.jpg',
    skmPath: 'assets/skm/33_F500_ST20_Metallic_inox.skm',
    desc: 'Acabado metálico acero inoxidable cepillado para tiradores, correderas telescópicas y bisagras.',
    updatedAt: 1700000100,
    usageCount: 30
  },
  {
    id: 'her_mat_02',
    code: 'HER-ALU',
    title: 'Aluminio Anodizado Perfil Gola',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_02.jpg',
    skmPath: 'assets/skm/33_F500_ST20_Metallic_inox.skm',
    desc: 'Aluminio anodizado natural mate para perfiles tirador Gola horizontales y verticales.',
    updatedAt: 1700000099,
    usageCount: 26
  },
  {
    id: 'her_mat_03',
    code: 'HER-BLK',
    title: 'Negro Mate Microtexturado Herrajes',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_03.jpg',
    skmPath: 'assets/skm/71_U999_ST19_Negro.skm',
    desc: 'Acabado termolacado negro mate para manijas minimalistas, guías ocultas y herrajes negros.',
    updatedAt: 1700000098,
    usageCount: 22
  },
  {
    id: 'her_mat_04',
    code: 'HER-BRZ',
    title: 'Bronce / Latón Cepillado Herraje',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_04.jpg',
    skmPath: 'assets/skm/35_F528_ST20_Metal_cepillado_bronce.skm',
    desc: 'Acabado bronce / latón metálico cepillado para tiradores y perfiles decorativos.',
    updatedAt: 1700000097,
    usageCount: 19
  },
  {
    id: 'her_mat_05',
    code: 'HER-COR500',
    title: 'Corredera Telescópica Cierre Suave 500mm',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_05.jpg',
    skmPath: 'assets/skm/33_F500_ST20_Metallic_inox.skm',
    desc: 'Par de guías telescópicas de extracción total en acero zincado/inoxidable con amortiguador.',
    updatedAt: 1700000096,
    usageCount: 24
  },
  {
    id: 'her_mat_06',
    code: 'HER-D52',
    title: 'Kit Sistema Corredizo Integral D-52',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_06.jpg',
    skmPath: 'assets/skm/33_F500_ST20_Metallic_inox.skm',
    desc: 'Rieles superior e inferior en aluminio anodizado con carros rodantes para frentes de placard.',
    updatedAt: 1700000095,
    usageCount: 18
  },
  {
    id: 'her_mat_07',
    code: 'HER-BIS35',
    title: 'Bisagra Cazoleta 35mm Cierre Suave',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_07.jpg',
    skmPath: 'assets/skm/33_F500_ST20_Metallic_inox.skm',
    desc: 'Bisagra cazoleta 35mm en acero niquelado con pistón amortiguador integrado y base clip.',
    updatedAt: 1700000094,
    usageCount: 21
  },
  {
    id: 'her_mat_08',
    code: 'HER-PIS80',
    title: 'Pistón a Gas Neumático Elevable 80N',
    category: 'HERRAJES',
    filterCat: 'Herrajes',
    brand: 'ENSSAMBLE',
    brandClass: 'enssamble',
    img: 'assets/materials/her_08.jpg',
    skmPath: 'assets/skm/33_F500_ST20_Metallic_inox.skm',
    desc: 'Brazo neumático a gas para puertas elevables de alacenas superiores.',
    updatedAt: 1700000093,
    usageCount: 17
  }
];

let materialsList = [...DEFAULT_MATERIALS];
let modulesList   = [...DEFAULT_MODULES, ...HERRAJES_MATERIALS];
let deletedModuleIds = new Set();
let deletedMaterialIds = new Set();
let permanentlyDeletedIds = new Set();
let trashItems = []; // Array of { id, item, originalType: 'module'|'material', originalIndex: number, deletedAt: number }
let moduleCategoryOverrides = {}; // { [id]: { filterCat, category, isCollection } }
let moduleOrderIds = []; // Ordered list of module IDs

const MODULE_CATEGORY_TABS = ['Personalizado', 'Básicos', 'Unidades', 'Colecciones', 'Accesorios', 'Herrajes', 'Iluminación'];

function isModuleItemId(itemId) {
  const s = String(itemId || '');
  return s.startsWith('mod_') || s.startsWith('her_mat_') || modulesList.some(m => m.id === s);
}

function getModuleSubTabCategory(item) {
  if (!item) return 'Básicos';
  const fc = item.filterCat || '';
  if (fc === 'Personalizado') return 'Personalizado';
  if (fc === 'Unidades') return 'Unidades';
  if (fc === 'Colecciones') return 'Colecciones';
  if (fc === 'Accesorios') return 'Accesorios';
  if (fc === 'Herrajes') return 'Herrajes';
  if (fc === 'Iluminación' || fc === 'Iluminacion') return 'Iluminación';
  if (fc === 'Básicos') return 'Básicos';
  if (item.isCollection === true) return 'Colecciones';
  return 'Básicos';
}

function applyModuleOverridesAndOrder() {
  if (moduleCategoryOverrides && typeof moduleCategoryOverrides === 'object') {
    modulesList.forEach(m => {
      const ov = moduleCategoryOverrides[m.id];
      if (ov && typeof ov === 'object') {
        if (ov.filterCat) m.filterCat = ov.filterCat;
        if (ov.category) m.category = ov.category;
        if (typeof ov.isCollection === 'boolean') m.isCollection = ov.isCollection;
      }
    });
  }
  if (Array.isArray(moduleOrderIds) && moduleOrderIds.length > 0) {
    const orderMap = new Map();
    moduleOrderIds.forEach((id, idx) => orderMap.set(id, idx));
    modulesList.sort((a, b) => {
      const ia = orderMap.has(a.id) ? orderMap.get(a.id) : 999999;
      const ib = orderMap.has(b.id) ? orderMap.get(b.id) : 999999;
      return ia - ib;
    });
  }
}

const TOP_MAT_IDS = ['eg_skm_22', 'eg_skm_02', 'eg_skm_08', 'eg_skm_01', 'eg_skm_76', 'eg_skm_15', 'eg_skm_38', 'eg_skm_42', 'eg_skm_56', 'eg_skm_03'];
materialsList.forEach((m, idx) => {
  const rank = TOP_MAT_IDS.indexOf(m.id);
  if (rank !== -1) m.usageCount = 50 - rank * 3;
  else if (!m.usageCount) m.usageCount = Math.max(1, 15 - (idx % 10));
});

const THICKNESS_STEPS = [3, 5, 12, 15, 18, 36];

const PAINT_MODES = [
  { key: 'module',      label: 'Aplicar a todo el módulo' },
  { key: 'single_face', label: 'Aplicar solo a 1 cara' },
  { key: 'both_faces',  label: 'Aplicar a cara y contracara' }
];

let state = {
  activeTab: 'inicio',
  activeMaterialTab: 'Melaminas', // 'Melaminas'
  activeModuleTab: 'Básicos',     // 'Básicos' | 'Unidades' | 'Colecciones' | 'Accesorios' | 'Herrajes' | 'Iluminación' | 'Animaciones'
  sortModulesModeActive: false,
  removeAnimModeActive: false,
  paintModeIdx: 0,                // 0: 'module', 1: 'single_face', 2: 'both_faces'
  paintPointerActive: false,
  rotateTextureActive: false,
  explodeModelActive: false,
  cutOptimizerActive: false,
  activeCutSheetIdx: 0,
  syncRotateFaces: true,
  searchQuery: '',
  username: 'Sebastián',
  studio: '',
  geminiApiKey: '',
  renderAmbientacionPrompt: 'Ambiente interior contemporáneo en alta definición con pared greige de fondo y piso de porcelanato tono arena de formato 120x120 cm con juntas rectificadas finas, iluminación natural suave y sombras de contacto fotorrealistas.',
  gridCols: 8,
  despieceZoom: 100,
  defaultThickness: 18,
  selectedMaterialId: null,
  selectedModuleId: null,
  activeDetailId: null,
  customModImgDataUrl: 'assets/modules/mod_02.png',
  lastUploadedRawImageUrl: null,
  renderCapturedDataUrl: null,
  theme: 'classic',              // 'classic' | 'dark' | 'light'
  cardDeleteEnabled: false,      // Control del menú 3 puntitos
  importUrlEnabled: true,        // Control de activar/desactivar importar desde URL
  contentOpacityOn: false,       // Opacidad del contenido sin blur
  contentOpacity: 100,           // 0 - 100%
  sidebarOpacityOn: false,       // Opacidad de la barra lateral independiente
  sidebarOpacity: 100,           // 0 - 100%
  trashSubTab: 'all',            // 'all' | 'modules' | 'materials'
  trashSearchQuery: '',
  selectedTrashItemId: null
};

let despieceGroups = [];

let xrayState = {
  groupIdx: 0,
  partIdx: 0,
  viewMode: 'piece',
  xrayEnabled: false,
  activeBrush: 1,      // 1 = Tapacanto 1 (Rojo), 2 = Tapacanto 2 (Azul)
  hoveredEdgeIdx: -1
};

function notifySketchUp(callbackName, payload) {
  if (window.sketchup && typeof window.sketchup[callbackName] === 'function') {
    try {
      window.sketchup[callbackName](typeof payload === 'string' ? payload : JSON.stringify(payload));
      return true;
    } catch (e) {
      console.log('SketchUp callback error:', e);
    }
  }
  return false;
}

let isHydratingState = false;

// Sincroniza modulesList y materialsList con trashItems:
// - Reconstruye deletedModuleIds y deletedMaterialIds a partir de trashItems.
// - Quita del catálogo activo cualquier módulo o material que esté en Trash para que
//   permanezca en Trash al cerrar y volver a abrir enssamble y SketchUp.
// - Si un elemento fue recuperado (ya no está en trashItems), garantiza que esté en su catálogo.
function syncCatalogWithTrash() {
  const seenTrash = new Set();
  trashItems = (Array.isArray(trashItems) ? trashItems : []).filter(t => {
    if (!t || !t.id || !t.item || seenTrash.has(t.id) || permanentlyDeletedIds.has(t.id)) return false;
    seenTrash.add(t.id);
    return true;
  });

  deletedModuleIds = new Set(
    trashItems.filter(t => t.originalType === 'module').map(t => t.id)
  );
  deletedMaterialIds = new Set(
    trashItems.filter(t => t.originalType === 'material').map(t => t.id)
  );

  // Quitar de las listas activas todos los elementos que están en Trash o fueron eliminados permanentemente
  modulesList = modulesList.filter(m => !deletedModuleIds.has(m.id) && !permanentlyDeletedIds.has(m.id));
  materialsList = materialsList.filter(m => !deletedMaterialIds.has(m.id) && !permanentlyDeletedIds.has(m.id));

  if (state.selectedMaterialId && deletedMaterialIds.has(state.selectedMaterialId)) {
    state.selectedMaterialId = null;
  }
  if (state.selectedModuleId && deletedModuleIds.has(state.selectedModuleId)) {
    state.selectedModuleId = null;
  }
}

function buildPersistedPayload() {
  const trashedCustomMats = trashItems
    .filter(t => t.originalType === 'material' && t.item && String(t.id).startsWith('web_skm_'))
    .map(t => t.item);
  const trashedCustomMods = trashItems
    .filter(t => t.originalType === 'module' && t.item && String(t.id).startsWith('mod_custom_'))
    .map(t => t.item);

  const customImportedMatsMap = new Map();
  materialsList.filter(m => m.id.startsWith('web_skm_')).forEach(m => customImportedMatsMap.set(m.id, m));
  trashedCustomMats.forEach(m => { if (!customImportedMatsMap.has(m.id)) customImportedMatsMap.set(m.id, m); });

  const customCreatedModsMap = new Map();
  modulesList.filter(m => m.id.startsWith('mod_custom_')).forEach(m => customCreatedModsMap.set(m.id, m));
  trashedCustomMods.forEach(m => { if (!customCreatedModsMap.has(m.id)) customCreatedModsMap.set(m.id, m); });

  return {
    username: state.username,
    studio: state.studio,
    geminiApiKey: state.geminiApiKey || '',
    renderAmbientacionPrompt: state.renderAmbientacionPrompt || '',
    gridCols: state.gridCols || 8,
    despieceZoom: state.despieceZoom || 100,
    defaultThickness: state.defaultThickness,
    selectedMaterialId: state.selectedMaterialId,
    paintModeIdx: state.paintModeIdx,
    syncRotateFaces: state.syncRotateFaces,
    theme: state.theme || 'classic',
    cardDeleteEnabled: !!state.cardDeleteEnabled,
    importUrlEnabled: state.importUrlEnabled !== false,
    contentOpacityOn: !!state.contentOpacityOn,
    contentOpacity: state.contentOpacity ?? 100,
    sidebarOpacityOn: !!state.sidebarOpacityOn,
    sidebarOpacity: state.sidebarOpacity ?? 100,
    trashItems: trashItems,
    permanentlyDeletedIds: Array.from(permanentlyDeletedIds),
    customImportedMats: Array.from(customImportedMatsMap.values()),
    customCreatedMods: Array.from(customCreatedModsMap.values()),
    moduleCategoryOverrides: moduleCategoryOverrides,
    moduleOrderIds: modulesList.map(m => m.id)
  };
}

function savePayloadToLocalStorage(payload) {
  try {
    const jsonStr = JSON.stringify(payload);
    localStorage.setItem('enssamble_sketchup_state_v180', jsonStr);
    localStorage.setItem('enssamble_sketchup_state_v150', jsonStr);
    localStorage.setItem('enssamble_sketchup_state_v140', jsonStr);
    localStorage.setItem('enssamble_sketchup_state_v3', jsonStr);
    localStorage.setItem('enssamble_trash_items', JSON.stringify(trashItems));
  } catch (e) {}
}

function persistState() {
  if (isHydratingState) return;
  const payload = buildPersistedPayload();
  savePayloadToLocalStorage(payload);
  notifySketchUp('saveStateToDisk', payload);
}

function applyLoadedStateObject(data) {
  if (!data || typeof data !== 'object') return;
  if (data.username && data.username !== 'Username') state.username = data.username;
  if (data.studio) state.studio = data.studio;
  if (data.geminiApiKey) state.geminiApiKey = data.geminiApiKey;
  if (data.renderAmbientacionPrompt) state.renderAmbientacionPrompt = data.renderAmbientacionPrompt;
  if (THICKNESS_STEPS.includes(Number(data.defaultThickness))) {
    state.defaultThickness = Number(data.defaultThickness);
  }
  if (typeof data.paintModeIdx === 'number') state.paintModeIdx = data.paintModeIdx % 3;
  if (data.gridCols >= 4 && data.gridCols <= 14) {
    state.gridCols = Number(data.gridCols);
  }
  if (data.despieceZoom >= 60 && data.despieceZoom <= 140) {
    state.despieceZoom = Number(data.despieceZoom);
  }
  if (data.theme) state.theme = data.theme;
  if (typeof data.cardDeleteEnabled === 'boolean') state.cardDeleteEnabled = data.cardDeleteEnabled;
  if (typeof data.importUrlEnabled === 'boolean') state.importUrlEnabled = data.importUrlEnabled;
  if (typeof data.contentOpacityOn === 'boolean') state.contentOpacityOn = data.contentOpacityOn;
  if (typeof data.contentOpacity === 'number') state.contentOpacity = data.contentOpacity;
  if (typeof data.sidebarOpacityOn === 'boolean') state.sidebarOpacityOn = data.sidebarOpacityOn;
  if (typeof data.sidebarOpacity === 'number') state.sidebarOpacity = data.sidebarOpacity;
  if (Array.isArray(data.permanentlyDeletedIds)) {
    permanentlyDeletedIds = new Set(data.permanentlyDeletedIds);
  }
  if (Array.isArray(data.trashItems)) {
    trashItems = data.trashItems;
  }

  if (Array.isArray(data.customImportedMats) && data.customImportedMats.length) {
    const existingIds = new Set(materialsList.map(x => x.id));
    data.customImportedMats.forEach(cm => {
      if (cm && cm.id && !existingIds.has(cm.id)) {
        materialsList.unshift(cm);
        existingIds.add(cm.id);
      }
    });
  }
  if (Array.isArray(data.customCreatedMods) && data.customCreatedMods.length) {
    const existingModIds = new Set(modulesList.map(x => x.id));
    [...data.customCreatedMods].reverse().forEach(cm => {
      if (cm && cm.id && !existingModIds.has(cm.id)) {
        modulesList.unshift(cm);
        existingModIds.add(cm.id);
      }
    });
  }
  if (data.moduleCategoryOverrides && typeof data.moduleCategoryOverrides === 'object') {
    moduleCategoryOverrides = data.moduleCategoryOverrides;
  }
  if (Array.isArray(data.moduleOrderIds)) {
    moduleOrderIds = data.moduleOrderIds;
  }

  applyModuleOverridesAndOrder();
  syncCatalogWithTrash();
}

function loadPersistedState() {
  isHydratingState = true;
  try {
    const raw = localStorage.getItem('enssamble_sketchup_state_v180') ||
                localStorage.getItem('enssamble_sketchup_state_v150') ||
                localStorage.getItem('enssamble_sketchup_state_v140') ||
                localStorage.getItem('enssamble_sketchup_state_v3');
    let parsedHasTrashKey = false;
    if (raw) {
      const data = JSON.parse(raw);
      parsedHasTrashKey = Array.isArray(data && data.trashItems);
      applyLoadedStateObject(data);
    }
    if (!parsedHasTrashKey && !trashItems.length) {
      const savedTrash = localStorage.getItem('enssamble_trash_items');
      if (savedTrash) {
        try {
          trashItems = JSON.parse(savedTrash) || [];
          syncCatalogWithTrash();
        } catch (e) {}
      }
    }
  } catch (e) {}
  updateSidebarUsername();
  updatePaintModeButtonUI();
  syncThicknessSliderUI();
  syncRenderInputsUI();
  applyDespieceZoom();
  setTheme(state.theme || 'classic', true);
  applyOpacityStyles();
  updateTrashUI();
  isHydratingState = false;
  notifySketchUp('requestSavedState', '');
}

window.onRubyStateLoaded = function(data) {
  if (!data || typeof data !== 'object') return;
  isHydratingState = true;
  try {
    // Restaurar listas base antes de aplicar el estado persistido en disco para
    // que el archivo de estado de SketchUp sea la fuente de verdad entre sesiones
    materialsList = [...DEFAULT_MATERIALS];
    materialsList.forEach((m, idx) => {
      const rank = TOP_MAT_IDS.indexOf(m.id);
      if (rank !== -1) m.usageCount = 50 - rank * 3;
      else if (!m.usageCount) m.usageCount = Math.max(1, 15 - (idx % 10));
    });
    modulesList = [...DEFAULT_MODULES, ...HERRAJES_MATERIALS];

    applyLoadedStateObject(data);
    savePayloadToLocalStorage(buildPersistedPayload());
  } catch (e) {}
  updateSidebarUsername();
  updatePaintModeButtonUI();
  syncThicknessSliderUI();
  syncRenderInputsUI();
  applyDespieceZoom();
  setTheme(state.theme || 'classic', true);
  applyOpacityStyles();
  updateTrashUI();
  isHydratingState = false;
  renderInicioDashboard();
  renderCurrentTab();
  if (state.activeTab === 'trash') {
    renderTrashView();
  }
};

function syncRenderInputsUI() {
  const rk = document.getElementById('renderGeminiApiKeyInput');
  if (rk && rk.value !== (state.geminiApiKey || '')) rk.value = state.geminiApiKey || '';
  const sk = document.getElementById('settingGeminiApiKey');
  if (sk && sk.value !== (state.geminiApiKey || '')) sk.value = state.geminiApiKey || '';
  const rp = document.getElementById('renderAmbientacionPrompt');
  if (rp && state.renderAmbientacionPrompt && !rp.value) rp.value = state.renderAmbientacionPrompt;
}

function applyDespieceZoom() {
  const el = document.getElementById('despieceZoomContainer');
  if (!el) return;
  const z = Math.max(60, Math.min(140, state.despieceZoom || 100));
  el.style.zoom = (z / 100).toFixed(2);
}

function updateSidebarUsername() {
  const lbl = document.getElementById('sidebarUsernameLabel');
  if (lbl) lbl.textContent = state.username || 'Sebastián';
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (sb) sb.classList.toggle('expanded');
}

function showToast(msg) {
  // Desactivado: se quitó la caja de texto informativa de la esquina inferior derecha
  return;
}

function setTab(tabKey) {
  state.activeTab = tabKey;
  state.searchQuery = '';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabKey);
  });

  const mainContent = document.getElementById('mainContent');
  const viewInicio = document.getElementById('viewInicio');
  const viewCatalog = document.getElementById('viewCatalog');
  const viewDespiece = document.getElementById('viewDespiece');
  const viewRender = document.getElementById('viewRender');
  const viewMoodboard = document.getElementById('viewMoodboard');
  const viewUrl = document.getElementById('viewUrl');
  const viewShowroom = document.getElementById('viewShowroom');
  const viewTrash = document.getElementById('viewTrash');
  const viewLogin = document.getElementById('viewLogin');
  const viewSettings = document.getElementById('viewSettings');

  [viewInicio, viewCatalog, viewDespiece, viewRender, viewMoodboard, viewUrl, viewShowroom, viewTrash, viewLogin, viewSettings].forEach(v => v && v.classList.remove('active'));

  if (tabKey === 'inicio') {
    mainContent.classList.remove('hide-hero');
    viewInicio.classList.add('active');
    renderInicioDashboard();
  } else if (tabKey === 'modules' || tabKey === 'materials') {
    mainContent.classList.add('hide-hero');
    viewCatalog.classList.add('active');
    renderView();
  } else if (tabKey === 'despiece') {
    mainContent.classList.add('hide-hero');
    viewDespiece.classList.add('active');
    notifySketchUp('onEnterDespieceTab', '');
    applyDespieceZoom();
    renderDespieceAll();
  } else if (tabKey === 'render') {
    mainContent.classList.add('hide-hero');
    viewRender.classList.add('active');
    syncRenderInputsUI();
    if (typeof runRenderStudioProcess === 'function') {
      setTimeout(() => runRenderStudioProcess(true), 40);
    }
  } else if (tabKey === 'moodboard') {
    mainContent.classList.add('hide-hero');
    if (viewMoodboard) viewMoodboard.classList.add('active');
    syncMoodboardThemeAndLayout(true);
  } else if (tabKey === 'url') {
    mainContent.classList.add('hide-hero');
    if (viewUrl) viewUrl.classList.add('active');
  } else if (tabKey === 'showroom') {
    mainContent.classList.add('hide-hero');
    if (viewShowroom) viewShowroom.classList.add('active');
  } else if (tabKey === 'trash') {
    mainContent.classList.add('hide-hero');
    if (viewTrash) viewTrash.classList.add('active');
    renderTrashView();
  } else if (tabKey === 'login') {
    mainContent.classList.add('hide-hero');
    if (viewLogin) viewLogin.classList.add('active');
    renderLoginView();
  } else if (tabKey === 'settings') {
    mainContent.classList.add('hide-hero');
    if (viewSettings) viewSettings.classList.add('active');
    renderSettingsView();
  }
}

function renderCurrentTab() {
  setTab(state.activeTab);
}

function formatCleanMaterialType(item) {
  if (item.filterCat === 'Herrajes') return 'HERRAJES';

  let sub = '';
  const simil = (item.similType || '').toLowerCase();
  const fCat = (item.filterCat || '').toLowerCase();
  const cat = (item.category || '').toLowerCase();

  if (simil.includes('madera') || fCat.includes('madera') || cat.includes('madera')) {
    sub = 'MADERA';
  } else if (simil.includes('piedra') || fCat.includes('piedra') || cat.includes('piedra')) {
    sub = 'PIEDRA';
  } else if (simil.includes('metal') || fCat.includes('metal') || cat.includes('metal')) {
    sub = 'METAL';
  } else if (simil.includes('textil') || fCat.includes('textil') || cat.includes('textil')) {
    sub = 'TEXTIL';
  } else if (simil.includes('liso') || simil.includes('solido') || fCat.includes('liso') || fCat.includes('solido') || cat.includes('liso') || cat.includes('solido') || fCat.includes('unilack')) {
    sub = 'SÓLIDO';
  } else {
    sub = 'MADERA';
  }
  return `MELAMINAS - ${sub}`;
}

/* ============================================================================
   CONSTRUCCIÓN DE TARJETA UNIFICADA (Con opción ⋯ opcional y Recuperar en Trash)
   ============================================================================ */
function openMadereraPinarUrl(ev) {
  const targetUrl = 'https://www.madererapinar.com.ar/optimizador-de-corte/?gad_source=1&gad_campaignid=22910125907&gbraid=0AAAAAD9jLsWf5oIEp0_s2OLTBumOySOC_&gclid=CjwKCAjwxeHWBhBPEiwAiqtQ-VV-8hzt7Bj6InnIMOnP6v5swRbogqUWPE_Xzt6tG0PG76ZDdkHSMhoCw8IQAvD_BwE';
  const sent = notifySketchUp('openExternalUrl', targetUrl);
  if (sent && ev) {
    ev.preventDefault();
    showToast('Abriendo Optimizador de Corte EGGER (Maderera Pinar) en el navegador...');
  }
}

function formatModuleCategoryLabel(item) {
  const raw = (item.category || '').toUpperCase();
  if (raw === 'CARPINTERÍA' || raw === 'CARPINTERIA' || raw === '') return 'MÓDULO';
  return raw;
}

function buildUnifiedCardHtml(item, isTrashCard = false) {
  const isMod = isModuleItemId(item.id);
  const isTrash = (isTrashCard === true && state.activeTab === 'trash');
  const isSelectedCard = isTrash
    ? (item.id === state.selectedTrashItemId)
    : (isMod ? (item.id === state.selectedModuleId) : (item.id === state.selectedMaterialId));
  const categoryLabel = isMod ? formatModuleCategoryLabel(item) : formatCleanMaterialType(item);
  const brandName = isMod ? 'ENSSAMBLE' : (item.brand || 'EGGER');
  const brandClass = isMod ? 'enssamble' : (item.brandClass || 'egger');

  // En Trash, el botón verde Recuperar es el ÚNICO que recupera el elemento
  const trashActionHtml = isTrash
    ? `<button type="button" class="card-restore-badge-btn" onclick="restoreItemFromTrash('${item.id}', event)" title="Devolver a su lugar original"><span>↺ Recuperar</span></button>`
    : '';

  const curModCat = isMod ? getModuleSubTabCategory(item) : '';
  const moveSubmenuHtml = isMod
    ? `
      <div class="card-move-to-wrap" onclick="event.stopPropagation()">
        <button type="button" class="card-move-opt-btn" onclick="toggleMoveToSubmenu('${item.id}', event)">
          <span class="card-move-opt-left">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            <span>Mover a:</span>
          </span>
          <span class="card-move-arrow">▸</span>
        </button>
        <div class="card-move-submenu">
          ${MODULE_CATEGORY_TABS.map(cat => `
            <button type="button" class="card-move-cat-btn ${curModCat === cat ? 'is-current-cat' : ''}" onclick="moveModuleCardToCategory('${item.id}', '${cat}', event)">
              <span>${cat}</span>
              ${curModCat === cat ? '<span>✓</span>' : ''}
            </button>
          `).join('')}
        </div>
      </div>
    `
    : '';

  // Menú de 3 puntitos (⋯) en catálogo normal: 1. Renombrar, 2. Mover a:, 3. Eliminar
  const moreMenuCatalogHtml = (!isTrash && state.cardDeleteEnabled)
    ? `
      <div class="card-more-wrap" data-card-id="${item.id}" onclick="event.stopPropagation()">
        <button type="button" class="card-more-dots-btn" onclick="toggleCardMoreMenu('${item.id}', event)" title="Opciones">⋯</button>
        <div class="card-more-dropdown">
          <button type="button" class="card-rename-opt-btn" onclick="openRenameModal('${item.id}', event)">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            <span>Renombrar</span>
          </button>
          ${moveSubmenuHtml}
          <button type="button" class="card-delete-opt-btn" onclick="confirmDeleteCard('${item.id}', event)">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    `
    : '';

  // En Trash, mientras la opción de los 3 puntos esté activa, los 3 puntitos se ubican
  // dentro de la tarjeta del elemento seleccionado en la parte inferior derecha de la miniatura,
  // justo por encima de donde sale el nombre del creador o marca del elemento (ENSSAMBLE / EGGER).
  const moreMenuTrashHtml = (isTrash && state.cardDeleteEnabled)
    ? `
      <div class="card-more-wrap trash-card-more-wrap ${isSelectedCard ? 'is-selected-trash' : ''}" data-card-id="${item.id}" onclick="event.stopPropagation()">
        <button type="button" class="card-more-dots-btn" onclick="selectTrashCard('${item.id}', event); toggleCardMoreMenu('${item.id}', event)" title="Opciones de eliminación permanente">⋯</button>
        <div class="card-more-dropdown trash-more-dropdown">
          <button type="button" class="card-delete-opt-btn" onclick="confirmPermanentDeleteFromTrash('${item.id}', event)">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <span>Eliminar permanentemente</span>
          </button>
        </div>
      </div>
    `
    : '';

  // En Trash, hacer clic en la tarjeta solo la selecciona (NUNCA la recupera; recuperar es solo con el botón verde)
  const clickHandler = isTrash
    ? `selectTrashCard('${item.id}', event)`
    : (isMod ? `selectModuleCardOnly('${item.id}', event)` : `onApplyMaterial('${item.id}', event)`);

  const dragAttrs = (!isTrash && isMod)
    ? `draggable="true" ondragstart="onModuleDragStart(event, '${item.id}')" ondragover="onModuleCardDragOver(event, '${item.id}')" ondragenter="onModuleCardDragEnter(event, '${item.id}')" ondragleave="onModuleCardDragLeave(event, '${item.id}')" ondrop="onModuleCardDrop(event, '${item.id}')" ondragend="onModuleDragEnd(event, '${item.id}')"`
    : '';

  const isNewCustomMod = isMod && (item.isScanned || item.isCustomFromImage || String(item.id).startsWith('mod_custom_'));
  return `
    <article class="catalog-card ${isSelectedCard ? 'selected-material selected-card' : ''} ${isTrash ? 'trash-catalog-card' : ''} ${isNewCustomMod ? 'new-custom-module-card' : ''}"
             data-item-id="${item.id}"
             ${dragAttrs}
             onclick="${clickHandler}">
      <div class="card-thumb-wrap" ${isNewCustomMod ? 'style="background:#FFFFFF !important;"' : ''}>
        ${trashActionHtml}
        <img class="card-flat-img" src="${item.thumbDataUrl || item.img}" alt="${item.title}" loading="lazy" draggable="false" onerror="onCatalogCardImgError(this, '${item.id}')" ${isNewCustomMod ? 'style="background:#FFFFFF !important; object-fit:contain;"' : ''} />
      </div>
      ${moreMenuTrashHtml}
      ${moreMenuCatalogHtml}
      <div class="card-body">
        <div class="card-meta-row">
          <span class="card-category">${categoryLabel}</span>
          <span class="card-brand ${brandClass}">${brandName}</span>
        </div>
        <h3 class="card-title" title="${item.title}">${item.title}</h3>
      </div>
    </article>
  `;
}


function buildFallbackBoardsForCustomItem(item) {
  if (Array.isArray(item.boards) && item.boards.length > 0) return item.boards;
  if (item.customCfg && Array.isArray(item.customCfg.scanned_boards) && item.customCfg.scanned_boards.length > 0) {
    return item.customCfg.scanned_boards;
  }
  const titleLow = String(item.title || '').toLowerCase();
  const numMatch = titleLow.match(/(\d+)\s*mm/);
  const t = numMatch ? Math.max(3, Math.min(50, parseInt(numMatch[1], 10))) : (item.thicknessMm || 18);

  if (titleLow.includes('cubo')) {
    const cw = item.defaultW && item.defaultW > 60 ? item.defaultW : 400;
    const cd = item.defaultD && item.defaultD > 60 ? item.defaultD : 400;
    const ch = item.defaultH && item.defaultH > 60 ? item.defaultH : 400;
    const boards = [
      { name: 'Lateral Izquierdo', boxMm: [0, 0, 0, t, cd, ch], artRole: 'carcass' },
      { name: 'Lateral Derecho',   boxMm: [cw - t, 0, 0, t, cd, ch], artRole: 'carcass' },
      { name: 'Base Inferior',     boxMm: [t, 0, 0, Math.max(20, cw - 2 * t), cd, t], artRole: 'carcass' },
      { name: 'Techo Superior',    boxMm: [t, 0, ch - t, Math.max(20, cw - 2 * t), cd, t], artRole: 'carcass' }
    ];
    if (titleLow.includes('fondo') || titleLow.includes('franurad') || titleLow.includes('ranurad')) {
      const fMatch = titleLow.match(/(?:fondo|ranurad[oa]?)\s*(\d+)\s*mm/);
      const ft = fMatch ? Math.max(3, parseInt(fMatch[1], 10)) : 3;
      const yPos = titleLow.includes('ranurad') ? (cd - 18 - ft) : (cd - ft);
      boards.push({ name: 'Fondo', boxMm: [t, yPos, t, Math.max(20, cw - 2 * t), ft, Math.max(20, ch - 2 * t)], artRole: 'shelf' });
    }
    return { w: cw, d: cd, h: ch, boards };
  }
  if (titleLow.includes('lateral')) {
    return {
      w: t,
      d: 350,
      h: 650,
      boards: [{ name: item.title, boxMm: [0, 0, 0, t, 350, 650], artRole: 'carcass' }]
    };
  }
  if (titleLow.includes('fondo')) {
    return {
      w: 500,
      d: t,
      h: 650,
      boards: [{ name: item.title, boxMm: [0, 0, 0, 500, t, 650], artRole: 'shelf' }]
    };
  }
  if (titleLow.includes('placa') || titleLow.includes('pieza') || titleLow.includes('estante')) {
    return {
      w: 600,
      d: 300,
      h: t,
      boards: [{ name: item.title, boxMm: [0, 0, 0, 600, 300, t], artRole: 'carcass' }]
    };
  }
  const w = item.defaultW || 600;
  const d = item.defaultD || 400;
  const h = item.defaultH || 600;
  return {
    w,
    d,
    h,
    boards: [
      { name: 'Lateral Izquierdo', boxMm: [0, 0, 0, t, d, h], artRole: 'carcass' },
      { name: 'Lateral Derecho',   boxMm: [w - t, 0, 0, t, d, h], artRole: 'carcass' },
      { name: 'Base Inferior',     boxMm: [t, 0, 0, Math.max(20, w - 2 * t), d, t], artRole: 'carcass' },
      { name: 'Techo Superior',    boxMm: [t, 0, h - t, Math.max(20, w - 2 * t), d, t], artRole: 'carcass' }
    ]
  };
}

function onCatalogCardImgError(imgEl, itemId) {
  if (!imgEl || imgEl.dataset.fallbackApplied === '1') return;
  imgEl.dataset.fallbackApplied = '1';
  const item = modulesList.find(m => m.id === itemId) || materialsList.find(m => m.id === itemId);
  if (!item) return;

  if (item.thumbDataUrl && String(item.thumbDataUrl).startsWith('data:image/')) {
    imgEl.src = item.thumbDataUrl;
    notifySketchUp('saveScannedModuleThumb', { id: item.id, dataUrl: item.thumbDataUrl });
    return;
  }

  const spec = buildFallbackBoardsForCustomItem(item);
  const w = spec.w || item.defaultW || 600;
  const d = spec.d || item.defaultD || 400;
  const h = spec.h || item.defaultH || 600;
  const boards = Array.isArray(spec) ? spec : spec.boards;

  flattenImageOnWhiteBackground(
    generateScannedModulePreviewDataUrl(item.title || 'Módulo', w, d, h, boards),
    function(cleanDataUrl) {
      if (cleanDataUrl && String(cleanDataUrl).startsWith('data:image/png;base64,')) {
        item.thumbDataUrl = cleanDataUrl;
        item.img = `assets/modules/${item.id}.png`;
        imgEl.src = cleanDataUrl;
        notifySketchUp('saveScannedModuleThumb', { id: item.id, dataUrl: cleanDataUrl });
        persistState();
      }
    }
  );
}

function selectModuleCardOnly(itemId, ev) {
  if (ev) ev.stopPropagation();
  state.selectedModuleId = itemId;
  document.querySelectorAll('#cardsGrid .catalog-card, #inicioTopModulesGrid .catalog-card').forEach(card => {
    const cid = card.getAttribute('data-item-id');
    if (!isModuleItemId(cid)) return;
    const isSel = cid === itemId;
    card.classList.toggle('selected-material', isSel);
    card.classList.toggle('selected-card', isSel);
  });
}

function toggleMoveToSubmenu(modId, ev) {
  if (ev) ev.stopPropagation();
  const wrap = ev && ev.currentTarget ? ev.currentTarget.closest('.card-move-to-wrap') : null;
  if (!wrap) return;
  wrap.classList.toggle('submenu-open');
}

function moveModuleCardToCategory(itemId, targetCat, ev) {
  if (ev) ev.stopPropagation();
  closeAllCardMenus();
  const item = modulesList.find(m => m.id === itemId);
  if (!item) return;

  item.filterCat = targetCat;
  item.isCollection = (targetCat === 'Colecciones');
  if (targetCat === 'Accesorios') item.category = 'ACCESORIOS';
  else if (targetCat === 'Herrajes') item.category = 'HERRAJES';
  else if (targetCat === 'Iluminación') item.category = 'ILUMINACIÓN';
  else item.category = 'MÓDULO';

  moduleCategoryOverrides[item.id] = {
    filterCat: item.filterCat,
    category: item.category,
    isCollection: item.isCollection
  };

  persistState();
  if (state.activeTab === 'modules') renderView();
  else if (state.activeTab === 'inicio') renderInicioDashboard();
}

function selectTrashCard(itemId, ev) {
  if (ev) ev.stopPropagation();
  state.selectedTrashItemId = itemId;
  document.querySelectorAll('#trashGrid .catalog-card').forEach(card => {
    const isSel = card.getAttribute('data-item-id') === itemId;
    card.classList.toggle('selected-material', isSel);
    card.classList.toggle('selected-card', isSel);
    const wrap = card.querySelector('.trash-card-more-wrap');
    if (wrap) wrap.classList.toggle('is-selected-trash', isSel);
  });
}

function toggleCardMoreMenu(modId, ev) {
  if (ev) ev.stopPropagation();
  const btn = ev && ev.currentTarget ? ev.currentTarget : null;
  const wrap = btn ? btn.closest('.card-more-wrap') : document.querySelector(`.card-more-wrap[data-card-id="${modId}"]`);
  const menu = wrap ? wrap.querySelector('.card-more-dropdown') : null;
  const card = wrap ? wrap.closest('.catalog-card') : null;
  const wasOpen = menu && menu.classList.contains('open');
  closeAllCardMenus();
  if (menu && !wasOpen) {
    menu.classList.add('open');
    if (wrap) wrap.classList.add('menu-open');
    if (card) card.classList.add('card-menu-open');
  }
}

function closeAllCardMenus() {
  document.querySelectorAll('.card-more-dropdown.open').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.card-more-wrap.menu-open').forEach(el => el.classList.remove('menu-open'));
  document.querySelectorAll('.catalog-card.card-menu-open').forEach(el => el.classList.remove('card-menu-open'));
  document.querySelectorAll('.card-move-to-wrap.submenu-open').forEach(el => el.classList.remove('submenu-open'));
}

/* ============================================================================
   CONFIRMACIÓN DE ELIMINACIÓN (A TRASH O PERMANENTE) Y RENOMBRAR ELEMENTOS
   ============================================================================ */
let pendingDeleteItemId = null;
let pendingDeleteIsPermanent = false;
let pendingRenameItemId = null;

function confirmDeleteCard(itemId, ev) {
  if (ev) ev.stopPropagation();
  closeAllCardMenus();
  pendingDeleteItemId = itemId;
  pendingDeleteIsPermanent = false;
  const item = modulesList.find(m => m.id === itemId) || materialsList.find(m => m.id === itemId);
  const titleEl = document.getElementById('deleteConfirmModalTitle');
  if (titleEl) titleEl.textContent = '¿Deseas eliminar este elemento?';
  const nameEl = document.getElementById('deleteConfirmItemName');
  if (nameEl) nameEl.textContent = item ? `«${item.title}»` : '';
  const descEl = document.getElementById('deleteConfirmModalDesc');
  if (descEl) descEl.innerHTML = 'Se ocultará del catálogo y se moverá a <b>Trash</b>. Podrás recuperarlo cuando quieras manteniendo su orden original.';
  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.add('open');
}

function confirmPermanentDeleteFromTrash(itemId, ev) {
  if (ev) ev.stopPropagation();
  closeAllCardMenus();
  state.selectedTrashItemId = itemId;
  pendingDeleteItemId = itemId;
  pendingDeleteIsPermanent = true;
  const entry = trashItems.find(t => t.id === itemId);
  const item = entry ? entry.item : null;
  const titleEl = document.getElementById('deleteConfirmModalTitle');
  if (titleEl) titleEl.textContent = '¿Deseas eliminar permanentemente el objeto seleccionado?';
  const nameEl = document.getElementById('deleteConfirmItemName');
  if (nameEl) nameEl.textContent = item ? `«${item.title}»` : '';
  const descEl = document.getElementById('deleteConfirmModalDesc');
  if (descEl) descEl.innerHTML = 'Esta acción borrará el elemento del programa <b>para siempre</b> y no se podrá recuperar.';
  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.add('open');
}

function closeDeleteConfirmModal() {
  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.remove('open');
  pendingDeleteItemId = null;
  pendingDeleteIsPermanent = false;
}

function executeDeleteConfirmed() {
  if (!pendingDeleteItemId) return;
  const idToDelete = pendingDeleteItemId;
  const isPerm = pendingDeleteIsPermanent;
  closeDeleteConfirmModal();
  if (isPerm) {
    permanentlyDeleteItemFromTrash(idToDelete);
  } else {
    deleteCatalogCard(idToDelete);
  }
}

function permanentlyDeleteItemFromTrash(itemId) {
  const tIdx = trashItems.findIndex(t => t.id === itemId);
  if (tIdx === -1) return;
  const entry = trashItems[tIdx];
  trashItems.splice(tIdx, 1);

  permanentlyDeletedIds.add(itemId);
  deletedModuleIds.delete(itemId);
  deletedMaterialIds.delete(itemId);

  modulesList = modulesList.filter(m => m.id !== itemId);
  materialsList = materialsList.filter(m => m.id !== itemId);

  if (state.selectedTrashItemId === itemId) {
    state.selectedTrashItemId = null;
  }

  if (entry && entry.item && (entry.item.skpFile || String(itemId).startsWith('mod_custom_') || String(itemId).startsWith('web_skm_'))) {
    notifySketchUp('permanentlyDeleteCatalogItem', {
      id: itemId,
      skpFile: entry.item.skpFile || '',
      img: entry.item.img || '',
      skmPath: entry.item.skmPath || ''
    });
  }

  updateTrashUI();
  persistState();
  renderTrashView();
  renderInicioDashboard();
  if (state.activeTab === 'modules' || state.activeTab === 'materials' || state.activeTab === 'trash') {
    renderView();
  }
}

function openRenameModal(itemId, ev) {
  if (ev) ev.stopPropagation();
  closeAllCardMenus();
  pendingRenameItemId = itemId;
  const item = modulesList.find(m => m.id === itemId) || materialsList.find(m => m.id === itemId);
  if (!item) return;
  const inEl = document.getElementById('renameTitleInput');
  if (inEl) {
    inEl.value = '';
    setTimeout(() => inEl.focus(), 60);
  }
  const modal = document.getElementById('renameModal');
  if (modal) modal.classList.add('open');
}

function closeRenameModal() {
  const modal = document.getElementById('renameModal');
  if (modal) modal.classList.remove('open');
  pendingRenameItemId = null;
}

function submitRenameForm(ev) {
  if (ev) ev.preventDefault();
  if (!pendingRenameItemId) return;
  const inEl = document.getElementById('renameTitleInput');
  const newTitle = inEl ? inEl.value.trim() : '';
  if (!newTitle) return;

  const item = modulesList.find(m => m.id === pendingRenameItemId) || materialsList.find(m => m.id === pendingRenameItemId);
  if (item) {
    item.title = newTitle;
    persistState();
    notifySketchUp('renameSavedCatalogModule', { id: item.id, title: newTitle });
    if (state.activeTab === 'modules' || state.activeTab === 'materials') renderView();
    else if (state.activeTab === 'inicio') renderInicioDashboard();
    showToast(`Nombre actualizado a «${newTitle}».`);
  }
  closeRenameModal();
}

/* ============================================================================
   ELIMINACIÓN SOFT A TRASH Y RECUPERACIÓN MANTENIENDO EL ORDEN ORIGINAL
   ============================================================================ */
function deleteCatalogCard(itemId, ev) {
  if (ev) ev.stopPropagation();
  closeAllCardMenus();

  const modIdx = modulesList.findIndex(m => m.id === itemId);
  if (modIdx !== -1) {
    const item = modulesList[modIdx];
    modulesList.splice(modIdx, 1);
    trashItems.unshift({
      id: itemId,
      item: item,
      originalType: 'module',
      originalIndex: modIdx,
      deletedAt: Date.now()
    });
    deletedModuleIds.add(itemId);
    updateTrashUI();
    persistState();
    renderInicioDashboard();
    if (state.activeTab === 'modules') renderView();
    showToast(`Módulo "${item.title}" enviado a Trash.`);
    return;
  }

  const matIdx = materialsList.findIndex(m => m.id === itemId);
  if (matIdx !== -1) {
    const item = materialsList[matIdx];
    materialsList.splice(matIdx, 1);
    trashItems.unshift({
      id: itemId,
      item: item,
      originalType: 'material',
      originalIndex: matIdx,
      deletedAt: Date.now()
    });
    deletedMaterialIds.add(itemId);
    if (state.selectedMaterialId === itemId) {
      state.selectedMaterialId = null;
    }
    updateTrashUI();
    persistState();
    renderInicioDashboard();
    if (state.activeTab === 'materials') renderView();
    showToast(`Material "${item.title}" enviado a Trash.`);
  }
}

function deleteModuleCard(modId, ev) { deleteCatalogCard(modId, ev); }

function restoreItemFromTrash(itemId, ev) {
  if (ev) ev.stopPropagation();
  const tIdx = trashItems.findIndex(t => t.id === itemId);
  if (tIdx === -1) return;
  const entry = trashItems[tIdx];
  trashItems.splice(tIdx, 1);

  if (entry.originalType === 'module') {
    deletedModuleIds.delete(itemId);
    if (!modulesList.some(m => m.id === itemId)) {
      const targetIdx = Math.min(entry.originalIndex ?? 0, modulesList.length);
      modulesList.splice(targetIdx, 0, entry.item);
    }
  } else {
    deletedMaterialIds.delete(itemId);
    if (!materialsList.some(m => m.id === itemId)) {
      const targetIdx = Math.min(entry.originalIndex ?? 0, materialsList.length);
      materialsList.splice(targetIdx, 0, entry.item);
    }
  }

  updateTrashUI();
  persistState();
  renderTrashView();
  renderInicioDashboard();
  if (state.activeTab === 'modules' || state.activeTab === 'materials' || state.activeTab === 'trash') {
    renderView();
  }
  showToast(`"${entry.item.title}" recuperado en su posición original.`);
}

function restoreAllFromTrash() {
  if (trashItems.length === 0) {
    showToast('Trash está vacío.');
    return;
  }
  const itemsToRestore = [...trashItems].reverse();
  trashItems = [];
  itemsToRestore.forEach(entry => {
    if (entry.originalType === 'module') {
      deletedModuleIds.delete(entry.id);
      if (!modulesList.some(m => m.id === entry.id)) {
        const targetIdx = Math.min(entry.originalIndex ?? 0, modulesList.length);
        modulesList.splice(targetIdx, 0, entry.item);
      }
    } else {
      deletedMaterialIds.delete(entry.id);
      if (!materialsList.some(m => m.id === entry.id)) {
        const targetIdx = Math.min(entry.originalIndex ?? 0, materialsList.length);
        materialsList.splice(targetIdx, 0, entry.item);
      }
    }
  });

  updateTrashUI();
  persistState();
  renderTrashView();
  renderInicioDashboard();
  if (state.activeTab === 'modules' || state.activeTab === 'materials' || state.activeTab === 'trash') {
    renderView();
  }
  showToast('Todos los elementos fueron devueltos a sus posiciones originales.');
}

function updateTrashUI() {
  const count = trashItems.length;
  const infoEl = document.getElementById('settingTrashInfo');
  if (infoEl) {
    infoEl.textContent = `${count} ${count === 1 ? 'elemento eliminado' : 'elementos eliminados'}.`;
  }
}

function setTrashSubTab(subTab) {
  state.trashSubTab = subTab;
  renderTrashView();
}

function onTrashSearchInput(val) {
  state.trashSearchQuery = (val || '').toLowerCase().trim();
  renderTrashView();
}

function renderTrashView() {
  const pillsContainer = document.getElementById('trashPillsRow');
  const pills = [
    { key: 'all', label: 'Todos' },
    { key: 'modules', label: 'Módulos' },
    { key: 'materials', label: 'Materiales' }
  ];
  if (pillsContainer) {
    pillsContainer.innerHTML = pills.map(p => {
      const isAct = (state.trashSubTab || 'all') === p.key ? 'active' : '';
      return `<button type="button" class="ens-pill-btn ${isAct}" onclick="setTrashSubTab('${p.key}')"><span>${p.label}</span></button>`;
    }).join('');
  }

  let filtered = [...trashItems];
  if (state.trashSubTab === 'modules') {
    filtered = filtered.filter(t => t.originalType === 'module');
  } else if (state.trashSubTab === 'materials') {
    filtered = filtered.filter(t => t.originalType === 'material');
  }

  if (state.trashSearchQuery) {
    const q = state.trashSearchQuery;
    filtered = filtered.filter(t => {
      const it = t.item;
      return (it.title || '').toLowerCase().includes(q) ||
             (it.category || '').toLowerCase().includes(q) ||
             (it.brand || '').toLowerCase().includes(q);
    });
  }

  const emptyBox = document.getElementById('trashEmptyBox');
  const grid = document.getElementById('trashGrid');

  if (filtered.length === 0) {
    if (emptyBox) emptyBox.style.display = 'flex';
    if (grid) {
      grid.style.display = 'none';
      grid.innerHTML = '';
    }
  } else {
    if (emptyBox) emptyBox.style.display = 'none';
    if (grid) {
      grid.style.display = 'grid';
      const cols = Math.max(4, Math.min(14, state.gridCols || 8));
      grid.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
      grid.classList.toggle('cols-12', cols >= 11);
      grid.innerHTML = filtered.map(t => buildUnifiedCardHtml(t.item, true)).join('');
    }
  }
}
function deleteModuleCard(modId, ev) { deleteCatalogCard(modId, ev); }

/* ================= PESTAÑA INICIO (Top 10 Módulos + Top 10 Materiales) ================= */
function renderInicioDashboard() {
  const modGrid = document.getElementById('inicioTopModulesGrid');
  const matGrid = document.getElementById('inicioTopMaterialsGrid');
  if (!modGrid || !matGrid) return;

  const topMods = [...modulesList]
    .sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0))
    .slice(0, 10);

  const topMats = [...materialsList]
    .filter(m => m.filterCat !== 'Herrajes')
    .sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0))
    .slice(0, 10);

  modGrid.innerHTML = topMods.map(m => buildUnifiedCardHtml(m, false)).join('');
  matGrid.innerHTML = topMats.map(m => buildUnifiedCardHtml(m, false)).join('');
}

/* ================= MODO DE APLICACIÓN DE MATERIAL CON PUNTERO EN SKETCHUP ================= */
function cyclePaintApplicationMode() {
  if (!state.paintPointerActive) {
    state.paintPointerActive = true;
  } else {
    state.paintModeIdx = (state.paintModeIdx + 1) % PAINT_MODES.length;
    state.paintPointerActive = true;
  }
  state.rotateTextureActive = false;
  updatePaintModeButtonUI();
  persistState();

  const modeObj = PAINT_MODES[state.paintModeIdx];
  const selMat = materialsList.find(m => m.id === state.selectedMaterialId) || materialsList[0];
  notifySketchUp('setPaintApplicationMode', { mode: modeObj.key, material: selMat });
  if (modeObj.key === 'module') {
    showToast(`Modo "${modeObj.label}" activo: Haz clic en un módulo en SketchUp para seleccionarlo y cambia las melaminas en vivo.`);
  } else {
    showToast(`Puntero activo en SketchUp (${modeObj.label}): Haz clic sobre las caras que deseas pintar.`);
  }
}

function updatePaintModeButtonUI() {
  const lbl = document.getElementById('paintModeCycleLabel');
  const btn = document.getElementById('paintModeCycleBtn');
  const rotBtn = document.getElementById('rotateTextureBtn');
  const modeObj = PAINT_MODES[state.paintModeIdx] || PAINT_MODES[0];
  if (lbl) lbl.textContent = modeObj.label;
  if (btn) btn.classList.toggle('active', state.paintPointerActive || state.paintModeIdx === 0);
  if (rotBtn) rotBtn.classList.toggle('active', !!state.rotateTextureActive);
}

/* ================= HERRAMIENTA "ROTAR TEXTURA" CON PUNTERO EN SKETCHUP ================= */
function toggleRotateTextureTool() {
  const sent = notifySketchUp('toggleRotateTextureTool', { syncFaces: state.syncRotateFaces });
  if (!sent) {
    state.rotateTextureActive = !state.rotateTextureActive;
    window.onRubyRotateTextureStatus(state.rotateTextureActive);
  }
}

window.onRubyRotateTextureStatus = function(active) {
  state.rotateTextureActive = !!active;
  if (state.rotateTextureActive) state.paintPointerActive = false;
  updatePaintModeButtonUI();
  if (state.rotateTextureActive) {
    showToast('Puntero Rotar textura ACTIVO: Ve al modelo en SketchUp y haz clic en las caras que deseas rotar 90°.');
  } else {
    showToast('Puntero Rotar textura desactivado.');
  }
};

function onApplyMaterial(id, ev) {
  if (ev) ev.stopPropagation();
  const item = materialsList.find(x => x.id === id);
  if (!item) return;
  state.selectedMaterialId = item.id;
  state.paintPointerActive = true;
  state.rotateTextureActive = false;
  item.usageCount = (item.usageCount || 1) + 1;
  persistState();
  if (state.activeTab === 'materials') renderView();
  else if (state.activeTab === 'inicio') renderInicioDashboard();

  const modeObj = PAINT_MODES[state.paintModeIdx] || PAINT_MODES[0];
  const payload = { ...item, applyMode: modeObj.key, paintMode: modeObj.key };
  const sent = notifySketchUp('applyMaterial', payload);
  if (sent) {
    if (modeObj.key === 'module') {
      showToast(`Color actualizado en el módulo seleccionado en SketchUp: [${item.brand}] ${item.title}`);
    } else {
      showToast(`Puntero activo [${modeObj.label}]: Haz clic sobre las caras en SketchUp para aplicar ${item.title}.`);
    }
  } else {
    showToast(`Material activo (${modeObj.label}): [${item.brand}] ${item.title}`);
  }
}

/* ================= BARRAS DESLIZABLES DE ESPESOR MÓDULO Y ESPESOR PIEZA (3, 5, 12, 15, 18, 36 mm) ================= */
state.pieceThickness = state.pieceThickness || 18;
state.pieceThicknessToolActive = false;

function onThicknessSliderInput(stepIdx) {
  const idx = Math.max(0, Math.min(THICKNESS_STEPS.length - 1, parseInt(stepIdx) || 0));
  const mm = THICKNESS_STEPS[idx];
  state.defaultThickness = mm;
  modulesList.forEach(m => {
    if (m && (m.id === state.selectedModuleId || String(m.id).startsWith('mod_custom_'))) {
      m.thicknessMm = mm;
    }
  });
  syncThicknessSliderUI();
  persistState();
  const sent = notifySketchUp('setBoardOrModuleThickness', { thicknessMm: mm });
  if (!sent) {
    showToast(`Espesor módulo: ${mm} mm`);
  }
}

function onPieceThicknessSliderInput(stepIdx) {
  const idx = Math.max(0, Math.min(THICKNESS_STEPS.length - 1, parseInt(stepIdx) || 0));
  const mm = THICKNESS_STEPS[idx];
  state.pieceThickness = mm;
  syncThicknessSliderUI();
  persistState();
  notifySketchUp('setPieceThicknessValue', {
    thicknessMm: mm,
    active: !!state.pieceThicknessToolActive
  });
}

function togglePieceThicknessTool(ev) {
  if (ev) ev.stopPropagation();
  const nextActive = !state.pieceThicknessToolActive;
  state.pieceThicknessToolActive = nextActive;
  if (!state.pieceThickness) state.pieceThickness = state.defaultThickness || 18;
  syncThicknessSliderUI();
  const sent = notifySketchUp('togglePieceThicknessTool', {
    active: nextActive,
    thicknessMm: state.pieceThickness || 18
  });
  if (!sent) {
    window.onRubyPieceThicknessToolStatus(nextActive);
  }
}

window.onRubyPieceThicknessToolStatus = function(active) {
  state.pieceThicknessToolActive = !!active;
  syncThicknessSliderUI();
};

function syncThicknessSliderUI() {
  const idx = Math.max(0, THICKNESS_STEPS.indexOf(state.defaultThickness));
  const rangeEl = document.getElementById('moduleThicknessRange');
  if (rangeEl) rangeEl.value = String(idx === -1 ? 4 : idx);
  const badgeEl = document.getElementById('thickSliderValueBadge');
  if (badgeEl) badgeEl.textContent = `${state.defaultThickness} mm`;

  const pThick = state.pieceThickness || state.defaultThickness || 18;
  const pIdx = Math.max(0, THICKNESS_STEPS.indexOf(pThick));
  const pRangeEl = document.getElementById('pieceThicknessRange');
  if (pRangeEl) pRangeEl.value = String(pIdx === -1 ? 4 : pIdx);
  const pBadgeEl = document.getElementById('pieceThickSliderValueBadge');
  if (pBadgeEl) pBadgeEl.textContent = `${pThick} mm`;

  const pBar = document.getElementById('pieceThicknessSliderBar');
  if (pBar) pBar.classList.toggle('active', !!state.pieceThicknessToolActive);
}

let _lastPlaceModuleTs = 0;

function onPlaceModule(id, repeatMode, ev, customDims = null) {
  if (state.sortModulesModeActive && state.activeTab === 'modules') return;
  if (ev && typeof ev.stopPropagation === 'function') ev.stopPropagation();
  const now = Date.now();
  if (now - _lastPlaceModuleTs < 280) return;
  _lastPlaceModuleTs = now;

  const item = modulesList.find(x => x.id === id);
  if (!item) return;
  state.selectedModuleId = item.id;
  item.usageCount = (item.usageCount || 1) + 1;
  selectModuleCardOnly(item.id, null);

  // Si es una tarjeta de acabado metálico de Herrajes con .skm y sin geometría 3D propia, aplicar o insertar
  if (item.skmPath && !item.isScanned && !item.defaultW && String(item.id).startsWith('her_mat_')) {
    const modeObj = PAINT_MODES[state.paintModeIdx] || PAINT_MODES[0];
    notifySketchUp('applyMaterial', { ...item, applyMode: modeObj.key, paintMode: modeObj.key });
    return;
  }

  const targetW = customDims ? customDims.w : (item.defaultW || 600);
  const targetD = customDims ? customDims.d : (item.defaultD || 550);
  const targetH = customDims ? customDims.h : (item.defaultH || 720);
  const targetT = item.thicknessMm || state.defaultThickness || 18;

  const isSavedSkpMod = !!(item.isScanned && item.skpFile);
  const fallbackCfg = (!isSavedSkpMod && !item.customCfg && Array.isArray(item.boards) && item.boards.length > 0)
    ? { scanned_boards: item.boards }
    : item.customCfg;

  // Enviar un payload liviano (sin el Base64 de `img`) para evitar bloquear el IPC de HtmlDialog
  const slimPayload = {
    id: item.id,
    title: item.title,
    category: item.category,
    filterCat: item.filterCat,
    isDynamic: !isSavedSkpMod,
    isScanned: isSavedSkpMod,
    isRawSavedSkp: isSavedSkpMod,
    skpFile: item.skpFile || '',
    defaultW: item.defaultW,
    defaultD: item.defaultD,
    defaultH: item.defaultH,
    customW: targetW,
    customD: targetD,
    customH: targetH,
    widthMm: targetW,
    depthMm: targetD,
    heightMm: targetH,
    thicknessMm: targetT,
    repeat: !!repeatMode,
    shelves: item.shelves ?? 1,
    dividers: item.dividers ?? 0,
    doors: item.doors ?? 0,
    drawers: item.drawers ?? 0,
    customCfg: fallbackCfg,
    desc: item.desc || ''
  };

  notifySketchUp('placeModule', slimPayload);
}

let _dragStartClientX = 0;
let _dragStartClientY = 0;
let _lastDragPlaceTime = 0;
let _draggedSortCardId = null;

function isSortModulesActiveInCurrentView() {
  return !!(
    state.sortModulesModeActive &&
    state.activeTab === 'modules' &&
    MODULE_CATEGORY_TABS.includes(state.activeModuleTab)
  );
}

function toggleSortModulesMode() {
  if (state.activeTab !== 'modules' || !MODULE_CATEGORY_TABS.includes(state.activeModuleTab)) {
    state.sortModulesModeActive = false;
  } else {
    state.sortModulesModeActive = !state.sortModulesModeActive;
  }
  syncSortModulesButtonUI();
  renderView();
}

function syncSortModulesButtonUI() {
  const btn = document.getElementById('toggleSortModulesBtn');
  const active = isSortModulesActiveInCurrentView();
  if (btn) btn.classList.toggle('active', active);
  const grid = document.getElementById('cardsGrid');
  if (grid) grid.classList.toggle('sorting-mode-active', active);
}

function onModuleDragStart(ev, id) {
  const item = modulesList.find(x => x.id === id);
  if (!item) return;
  selectModuleCardOnly(id, null);

  if (isSortModulesActiveInCurrentView()) {
    _draggedSortCardId = id;
    try {
      ev.dataTransfer.clearData();
      ev.dataTransfer.setData('text/plain', id);
      ev.dataTransfer.effectAllowed = 'move';
    } catch (_e) {}
    const cardEl = ev && ev.currentTarget ? ev.currentTarget : document.querySelector(`.catalog-card[data-item-id="${id}"]`);
    if (cardEl) {
      setTimeout(() => cardEl.classList.add('dragging-sort-card'), 0);
    }
    return;
  }

  _draggedSortCardId = null;
  _dragStartClientX = ev ? ev.clientX : 0;
  _dragStartClientY = ev ? ev.clientY : 0;
  try {
    ev.dataTransfer.clearData();
    ev.dataTransfer.setData('text/plain', item.id);
    ev.dataTransfer.effectAllowed = 'copy';
  } catch (_e) {}
  window._draggedModuleId = id;
}

function onModuleCardDragOver(ev, targetId) {
  if (!isSortModulesActiveInCurrentView() || !_draggedSortCardId) return;
  if (ev) {
    ev.preventDefault();
    try { ev.dataTransfer.dropEffect = 'move'; } catch (_e) {}
  }
}

function onModuleCardDragEnter(ev, targetId) {
  if (!isSortModulesActiveInCurrentView() || !_draggedSortCardId || _draggedSortCardId === targetId) return;
  if (ev) ev.preventDefault();
  const cardEl = ev && ev.currentTarget ? ev.currentTarget : document.querySelector(`.catalog-card[data-item-id="${targetId}"]`);
  if (cardEl) cardEl.classList.add('drag-over-sort-target');
}

function onModuleCardDragLeave(ev, targetId) {
  if (!isSortModulesActiveInCurrentView()) return;
  const cardEl = ev && ev.currentTarget ? ev.currentTarget : document.querySelector(`.catalog-card[data-item-id="${targetId}"]`);
  if (cardEl) cardEl.classList.remove('drag-over-sort-target');
}

function onModuleCardDrop(ev, targetId) {
  if (!isSortModulesActiveInCurrentView()) return;
  if (ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }
  const sourceId = _draggedSortCardId || (ev && ev.dataTransfer ? ev.dataTransfer.getData('text/plain') : null);
  document.querySelectorAll('.catalog-card.drag-over-sort-target, .catalog-card.dragging-sort-card').forEach(el => {
    el.classList.remove('drag-over-sort-target', 'dragging-sort-card');
  });
  _draggedSortCardId = null;
  if (!sourceId || !targetId || sourceId === targetId) return;

  const fromIdx = modulesList.findIndex(m => m.id === sourceId);
  const toIdx = modulesList.findIndex(m => m.id === targetId);
  if (fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return;

  const [movedItem] = modulesList.splice(fromIdx, 1);
  modulesList.splice(toIdx, 0, movedItem);
  moduleOrderIds = modulesList.map(m => m.id);
  persistState();
  renderView();
  renderInicioDashboard();
}

function onModuleDragEnd(ev, id) {
  document.querySelectorAll('.catalog-card.drag-over-sort-target, .catalog-card.dragging-sort-card').forEach(el => {
    el.classList.remove('drag-over-sort-target', 'dragging-sort-card');
  });
  if (isSortModulesActiveInCurrentView() || _draggedSortCardId) {
    _draggedSortCardId = null;
    return;
  }

  const now = Date.now();
  if (now - _lastDragPlaceTime < 500) return;
  const movedDist = ev ? Math.hypot(ev.clientX - _dragStartClientX, ev.clientY - _dragStartClientY) : 999;
  const droppedOutsideDialog =
    !ev ||
    ev.clientX <= 12 ||
    ev.clientY <= 12 ||
    ev.clientX >= window.innerWidth - 12 ||
    ev.clientY >= window.innerHeight - 12 ||
    movedDist >= 24;
  if (droppedOutsideDialog) {
    _lastDragPlaceTime = now;
    setTimeout(() => {
      onPlaceModule(id, false, null);
    }, 60);
  }
}

/* ================= 1) CREAR MÓDULO DINÁMICO A TRAVÉS DE IMAGEN ================= */
let _detectedImageStructure = null;

function openCreateModuleFromImageModal() {
  _detectedImageStructure = null;
  state.lastUploadedRawImageUrl = null;
  const rawBadge = document.getElementById('imgModRawBadge');
  if (rawBadge) rawBadge.style.display = 'none';
  const statusPill = document.getElementById('imgModDetectionStatus');
  if (statusPill) {
    statusPill.textContent = '📐 Sube una foto o croquis para detectar medidas y placas automáticamente';
  }
  const titleIn = document.getElementById('customModTitleInput');
  if (titleIn) titleIn.value = '';
  const thickSel = document.getElementById('customModThickSelect');
  if (thickSel) thickSel.value = String(state.defaultThickness || 18);
  const fileIn = document.getElementById('imgModFileInput');
  if (fileIn) fileIn.value = '';

  refreshCustomImageModuleArtPreview();
  document.getElementById('createModuleFromImageModal').classList.add('open');
}

function closeCreateModuleFromImageModal() {
  document.getElementById('createModuleFromImageModal').classList.remove('open');
}

// Analizador geométrico y cromático de imagen de mueble:
// Detecta proporciones reales, medidas estimadas (Ancho, Profundidad, Alto),
// estantes horizontales, divisores verticales, puertas y cajones.
function analyzeUploadedImageStructure(img, fileName = '') {
  const natW = Math.max(1, img.naturalWidth || img.width || 300);
  const natH = Math.max(1, img.naturalHeight || img.height || 300);
  const maxDim = 220;
  const scale = maxDim / Math.max(natW, natH);
  const cw = Math.max(64, Math.round(natW * scale));
  const ch = Math.max(64, Math.round(natH * scale));

  const c = document.createElement('canvas');
  c.width = cw;
  c.height = ch;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#F1F4F9';
  ctx.fillRect(0, 0, cw, ch);
  ctx.drawImage(img, 0, 0, cw, ch);
  const data = ctx.getImageData(0, 0, cw, ch).data;

  // 1. Muestrear color promedio del borde perimetral para separar el mueble del fondo
  let borderR = 0, borderG = 0, borderB = 0, borderCnt = 0;
  for (let x = 0; x < cw; x += 2) {
    for (const y of [0, 1, ch - 2, ch - 1]) {
      const idx = (y * cw + x) * 4;
      borderR += data[idx]; borderG += data[idx + 1]; borderB += data[idx + 2];
      borderCnt++;
    }
  }
  for (let y = 2; y < ch - 2; y += 2) {
    for (const x of [0, 1, cw - 2, cw - 1]) {
      const idx = (y * cw + x) * 4;
      borderR += data[idx]; borderG += data[idx + 1]; borderB += data[idx + 2];
      borderCnt++;
    }
  }
  const bgR = borderR / Math.max(1, borderCnt);
  const bgG = borderG / Math.max(1, borderCnt);
  const bgB = borderB / Math.max(1, borderCnt);

  let minX = cw, maxX = 0, minY = ch, maxY = 0;
  const gray = new Float32Array(cw * ch);
  const warmMap = new Float32Array(cw * ch); // Detecta tonos madera cálida (estantes/cajones) vs blanco/gris

  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const i = (y * cw + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
      gray[y * cw + x] = 0.299 * r + 0.587 * g + 0.114 * b;
      warmMap[y * cw + x] = Math.max(0, (r - b) - Math.abs(r - g) * 0.4);
      const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
      if (a > 40 && diff > 22) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX - minX < cw * 0.18 || maxY - minY < ch * 0.18) {
    minX = Math.round(cw * 0.08); maxX = Math.round(cw * 0.92);
    minY = Math.round(ch * 0.08); maxY = Math.round(ch * 0.92);
  }

  const bw = Math.max(36, maxX - minX);
  const bh = Math.max(36, maxY - minY);
  const rawAspect = bw / bh;

  // En vistas isométricas 3/4, el lateral izquierdo ocupa ~28% del ancho proyectado.
  // Si detectamos silueta isométrica (diferencia de altura entre el borde izquierdo y el centro),
  // ajustamos la región de análisis al frente principal del mueble.
  let leftTopY = maxY, midTopY = maxY, rightTopY = maxY;
  const xLeftSample = minX + Math.round(bw * 0.12);
  const xMidSample  = minX + Math.round(bw * 0.55);
  const xRightSample = minX + Math.round(bw * 0.85);
  for (let y = minY; y <= maxY; y++) {
    const checkFg = (x) => {
      const idx = (y * cw + x) * 4;
      return (Math.abs(data[idx] - bgR) + Math.abs(data[idx + 1] - bgG) + Math.abs(data[idx + 2] - bgB)) > 24;
    };
    if (leftTopY === maxY && checkFg(xLeftSample)) leftTopY = y;
    if (midTopY === maxY && checkFg(xMidSample)) midTopY = y;
    if (rightTopY === maxY && checkFg(xRightSample)) rightTopY = y;
  }
  const isIsoView = (leftTopY - midTopY > bh * 0.06) || (rightTopY - midTopY > bh * 0.05);

  const xStart = minX + Math.round(bw * (isIsoView ? 0.27 : 0.11));
  const xEnd   = maxX - Math.round(bw * 0.09);
  const yStart = minY + Math.round(bh * (isIsoView ? 0.17 : 0.10));
  const yEnd   = maxY - Math.round(bh * 0.10);

  const frontW = Math.max(24, xEnd - xStart);
  const frontH = Math.max(24, yEnd - yStart);

  // 2. Perfiles de gradientes horizontales y verticales en la cara frontal del mueble
  const hProfile = new Float32Array(ch);
  for (let y = yStart; y <= yEnd; y++) {
    let sum = 0;
    for (let x = xStart; x <= xEnd; x++) {
      const gy = Math.abs(gray[Math.min(ch - 1, y + 1) * cw + x] - gray[Math.max(0, y - 1) * cw + x]);
      const wy = Math.abs(warmMap[Math.min(ch - 1, y + 1) * cw + x] - warmMap[Math.max(0, y - 1) * cw + x]);
      sum += gy + wy * 0.7;
    }
    hProfile[y] = sum / frontW;
  }

  const vProfile = new Float32Array(cw);
  for (let x = xStart; x <= xEnd; x++) {
    let sum = 0;
    for (let y = yStart; y <= yEnd; y++) {
      const gx = Math.abs(gray[y * cw + Math.min(cw - 1, x + 1)] - gray[y * cw + Math.max(0, x - 1)]);
      const wx = Math.abs(warmMap[y * cw + Math.min(cw - 1, x + 1)] - warmMap[y * cw + Math.max(0, x - 1)]);
      sum += gx + wx * 0.6;
    }
    vProfile[x] = sum / frontH;
  }

  function findPeaks(profile, start, end, minDist, thresholdFactor, minAbs) {
    let mean = 0;
    for (let i = start; i <= end; i++) mean += profile[i];
    mean /= Math.max(1, end - start + 1);
    const thresh = Math.max(minAbs, mean * thresholdFactor);
    const candidates = [];
    for (let i = start + 3; i <= end - 3; i++) {
      const val = profile[i - 1] * 0.25 + profile[i] * 0.5 + profile[i + 1] * 0.25;
      if (val > thresh && val >= profile[i - 2] && val >= profile[i + 2]) {
        candidates.push({ pos: i, val });
      }
    }
    candidates.sort((a, b) => b.val - a.val);
    const picked = [];
    for (const cand of candidates) {
      if (picked.every(p => Math.abs(p.pos - cand.pos) >= minDist)) {
        picked.push(cand);
        if (picked.length >= 5) break;
      }
    }
    return picked.sort((a, b) => a.pos - b.pos).map(p => (p.pos - start) / Math.max(1, end - start));
  }

  const hPeaks = findPeaks(hProfile, yStart, yEnd, Math.max(6, Math.round(frontH * 0.15)), 1.32, 9.5);
  const vPeaks = findPeaks(vProfile, xStart, xEnd, Math.max(6, Math.round(frontW * 0.17)), 1.38, 9.5);

  const zSplits = hPeaks.map(r => Number((1.0 - r).toFixed(3))).sort((a, b) => a - b);
  const xSplits = vPeaks.map(r => Number(r.toFixed(3))).sort((a, b) => a - b);

  // Evaluar calidez cromática (madera de estantes/cajones) y varianza de luminancia en el interior
  let S1 = 0, S2 = 0, warmSum = 0, topZoneWarm = 0, topZoneCnt = 0, cnt = 0;
  const topBandEnd = yStart + Math.round(frontH * 0.30);
  for (let y = yStart; y <= yEnd; y++) {
    for (let x = xStart; x <= xEnd; x++) {
      const v = gray[y * cw + x];
      const wv = warmMap[y * cw + x];
      S1 += v; S2 += v * v; warmSum += wv; cnt++;
      if (y <= topBandEnd) { topZoneWarm += wv; topZoneCnt++; }
    }
  }
  const stdDev = Math.sqrt(Math.max(0, S2 / Math.max(1, cnt) - (S1 / Math.max(1, cnt)) ** 2));
  const avgWarm = warmSum / Math.max(1, cnt);
  const avgTopWarm = topZoneWarm / Math.max(1, topZoneCnt);

  // Verificar si existe división vertical en la mitad inferior pero NO en la franja superior (patrón Cajón + 2 Puertas)
  let lowerMidSplitStrength = 0;
  let upperMidSplitStrength = 0;
  const midX = Math.round((xStart + xEnd) * 0.5);
  for (let y = yStart; y <= yEnd; y++) {
    let localGx = 0;
    for (let dx = -3; dx <= 3; dx++) {
      const xx = Math.min(cw - 2, Math.max(1, midX + dx));
      localGx = Math.max(localGx, Math.abs(gray[y * cw + xx + 1] - gray[y * cw + xx - 1]));
    }
    if (y <= topBandEnd) upperMidSplitStrength += localGx;
    else lowerMidSplitStrength += localGx;
  }
  upperMidSplitStrength /= Math.max(1, topBandEnd - yStart + 1);
  lowerMidSplitStrength /= Math.max(1, yEnd - topBandEnd);

  const hasTopDrawerSplit = hPeaks.some(p => p >= 0.14 && p <= 0.34);

  let shelves = zSplits.length;
  let dividers = xSplits.length;
  let doors = 0;
  let drawers = 0;
  let topStrips = false;

  // Clasificación inteligente de tipología constructiva
  const fnLow = (fileName || '').toLowerCase();
  if (fnLow.includes('mod_01') || fnLow.includes('cajon')) {
    drawers = Math.max(3, Math.min(5, zSplits.length + 1));
    shelves = 0; dividers = 0; doors = 0; topStrips = true;
  } else if (fnLow.includes('mod_10') || (hasTopDrawerSplit && lowerMidSplitStrength > upperMidSplitStrength * 1.35 && avgTopWarm > avgWarm * 1.15)) {
    drawers = 1; doors = 2; shelves = 1; dividers = 0; topStrips = true;
  } else if (fnLow.includes('mod_02')) {
    doors = 2; shelves = 1; dividers = 0; drawers = 0; topStrips = true;
  } else if (fnLow.includes('mod_03')) {
    doors = 2; shelves = 1; dividers = 0; drawers = 0; topStrips = false;
  } else if (fnLow.includes('mod_11') || fnLow.includes('vinero') || (xSplits.length >= 2 && zSplits.length >= 2)) {
    dividers = Math.max(2, xSplits.length);
    shelves = Math.max(2, zSplits.length);
    doors = 0; drawers = 0;
  } else if (stdDev < 18.5 && xSplits.length === 1 && Math.abs(xSplits[0] - 0.5) < 0.15 && zSplits.length <= 1) {
    doors = 2; dividers = 0; shelves = 1; drawers = 0;
    topStrips = rawAspect >= 0.95;
  } else if (stdDev < 21 && zSplits.length >= 2 && xSplits.length === 0) {
    drawers = Math.min(6, zSplits.length + 1);
    shelves = 0; dividers = 0; doors = 0; topStrips = true;
  } else if (xSplits.length === 1 && zSplits.length >= 1 && avgWarm > 8) {
    // Caso tipo Alacena entreabierta (1 puerta visible + estantes internos) o estantería dividida
    if (stdDev < 24 && Math.abs(xSplits[0] - 0.5) < 0.14 && zSplits.length === 1) {
      doors = 2; shelves = 1; dividers = 0; drawers = 0;
    } else {
      shelves = Math.max(1, zSplits.length);
      dividers = xSplits.length;
      doors = 0; drawers = 0;
    }
  } else {
    shelves = Math.max(1, zSplits.length);
    dividers = xSplits.length;
    doors = 0;
    drawers = 0;
  }

  // 3. Estimar medidas reales en milímetros (Ancho, Profundidad, Alto) según proporciones de la imagen
  const correctedAspect = isIsoView ? Math.max(0.28, rawAspect * 0.88) : rawAspect;
  let widthMm = 800, depthMm = 580, heightMm = 720;

  // Si el nombre del archivo incluye medidas explícitas (ej. 800x580x720 o 600x400)
  const dimMatch = (fileName || '').match(/(\d{3,4})\s*[xX×-]\s*(\d{2,4})(?:\s*[xX×-]\s*(\d{3,4}))?/);
  if (dimMatch) {
    widthMm  = Math.max(150, Math.min(3000, parseInt(dimMatch[1]) || 800));
    if (dimMatch[3]) {
      depthMm  = Math.max(120, Math.min(1200, parseInt(dimMatch[2]) || 550));
      heightMm = Math.max(150, Math.min(2800, parseInt(dimMatch[3]) || 720));
    } else {
      heightMm = Math.max(150, Math.min(2800, parseInt(dimMatch[2]) || 720));
      depthMm  = doors > 0 || drawers > 0 ? 550 : 350;
    }
  } else if (correctedAspect < 0.45) {
    // Módulo extraíble angosto / Condimentero / Columna esbelta
    widthMm  = Math.round(Math.max(200, Math.min(450, 720 * correctedAspect)) / 20) * 20;
    depthMm  = 550;
    heightMm = 720;
  } else if (correctedAspect < 0.78) {
    // Módulo vertical (Módulo abierto / Biblioteca / Cajonera)
    heightMm = 720;
    widthMm  = Math.round(Math.max(400, Math.min(650, heightMm * correctedAspect)) / 50) * 50;
    depthMm  = drawers > 0 ? 550 : (doors > 0 ? 550 : 350);
  } else if (dividers >= 2 && shelves >= 2 && Math.abs(correctedAspect - 1.0) < 0.25) {
    // Vinero / Cuadrícula
    widthMm  = 450;
    depthMm  = 320;
    heightMm = 450;
  } else if (correctedAspect > 1.28) {
    // Alacena ancha o Rack horizontal
    heightMm = 600;
    widthMm  = Math.round(Math.max(800, Math.min(1800, heightMm * correctedAspect)) / 50) * 50;
    depthMm  = doors > 0 && topStrips ? 580 : 350;
  } else {
    // Módulo Bajo / Superior estándar
    heightMm = 720;
    widthMm  = Math.round(Math.max(600, Math.min(1000, heightMm * correctedAspect)) / 50) * 50;
    depthMm  = topStrips || drawers > 0 ? 580 : (doors > 0 ? 350 : 380);
  }

  return { zSplits, xSplits, shelves, dividers, doors, drawers, topStrips, widthMm, depthMm, heightMm };
}

function buildImageBoardsFromSpecs(w, d, h, t, shelves, dividers, doors, drawers, zSplits = null, xSplits = null, topStrips = false) {
  const boards = [];
  const innerW = Math.max(40, w - 2 * t);
  const innerH = Math.max(40, h - 2 * t);
  const useTopStrips = topStrips || (drawers > 0 && d >= 450 && h <= 900);

  // 1. Casco estructural: Laterales, Base, Techo (o Listones de Amarre) y Fondo
  boards.push({ name: 'Lateral Izquierdo', boxMm: [0, 0, 0, t, d, h], artRole: 'carcass' });
  boards.push({ name: 'Lateral Derecho',   boxMm: [w - t, 0, 0, t, d, h], artRole: 'carcass' });
  boards.push({ name: 'Base Inferior',     boxMm: [t, 0, 0, innerW, d, t], artRole: 'carcass' });

  if (useTopStrips) {
    const stripD = Math.min(100, d * 0.25);
    boards.push({ name: 'Amarre Superior Frontal', boxMm: [t, 0, h - t, innerW, stripD, t], artRole: 'carcass' });
    boards.push({ name: 'Amarre Superior Trasero', boxMm: [t, d - stripD, h - t, innerW, stripD, t], artRole: 'carcass' });
  } else {
    boards.push({ name: 'Techo Superior', boxMm: [t, 0, h - t, innerW, d, t], artRole: 'carcass' });
  }
  boards.push({ name: 'Fondo Trasero', boxMm: [t, d - 4, t, innerW, 4, innerH], artRole: 'back' });

  const topDrawerZoneH = (drawers > 0 && doors > 0) ? Math.min(h * 0.22 * Math.min(drawers, 2), h * 0.45) : 0;
  const bodyClearH = Math.max(40, h - topDrawerZoneH - 2 * t);

  // 2. Divisores verticales en posiciones detectadas
  const useX = (Array.isArray(xSplits) && xSplits.length === dividers && dividers > 0)
    ? xSplits
    : Array.from({ length: dividers }, (_, i) => (i + 1) / (dividers + 1));

  const divXCoords = useX.map(xr => {
    const clamped = Math.max(0.14, Math.min(0.86, xr));
    return t + clamped * innerW - t * 0.5;
  });

  const isAllWoodGrid = dividers >= 2 && shelves >= 2 && doors === 0 && drawers === 0;
  if (isAllWoodGrid) {
    boards.forEach(b => { b.artRole = 'shelf'; });
  }

  divXCoords.forEach((dx, idx) => {
    boards.push({
      name: `Divisor Vertical ${idx + 1}`,
      boxMm: [dx, 2, t, t, Math.max(20, d - 6), bodyClearH],
      artRole: 'shelf'
    });
  });

  // Calcular vanos horizontales (bays) entre divisores para segmentar los estantes sin que se crucen
  const baySpans = [];
  let prevX = t;
  divXCoords.forEach(dx => {
    baySpans.push([prevX, Math.max(20, dx - prevX)]);
    prevX = dx + t;
  });
  baySpans.push([prevX, Math.max(20, w - t - prevX)]);

  // 3. Estantes horizontales segmentados por vano
  const useZ = (Array.isArray(zSplits) && zSplits.length === shelves && shelves > 0)
    ? zSplits
    : Array.from({ length: shelves }, (_, i) => (i + 1) / (shelves + 1));

  const shelfDepth = Math.max(20, d - 12);
  const shelfY = (doors > 0 || drawers > 0) ? 8 : 2;
  useZ.forEach((zr, sIdx) => {
    const clampedZ = Math.max(0.14, Math.min(0.86, zr));
    const sz = t + clampedZ * bodyClearH - t * 0.5;
    baySpans.forEach(([bx, bwSpan], bIdx) => {
      boards.push({
        name: `Estante ${sIdx + 1}.${bIdx + 1}`,
        boxMm: [bx, shelfY, sz, bwSpan, shelfDepth, t],
        artRole: 'shelf'
      });
    });
  });

  // 4. Cajones y Puertas Frontales (con el mismo arte interactivo de mod_01, mod_02, mod_03 y mod_10)
  if (drawers > 0 && doors === 0) {
    const drH = h / drawers;
    const railGap = 13;
    const boxW = Math.max(40, innerW - 2 * railGap);
    const boxD = Math.max(60, d - 40);
    for (let i = 0; i < drawers; i++) {
      const z0 = i * drH;
      // En el arte de cajoneras (como mod_01.png), los 2 cajones superiores se muestran semi-abiertos dejando ver la caja interior y correderas
      const pullOut = (drawers >= 2 && i >= drawers - 2) ? ((i === drawers - 2) ? d * 0.28 : d * 0.16) : 0;
      const boxH = Math.max(40, drH * 0.62);
      const bz = z0 + 14;
      if (pullOut > 0 || i === drawers - 1) {
        boards.push({ name: `Lat Cajón Izq ${i + 1}`, boxMm: [t + railGap, -pullOut, bz, t, boxD, boxH], artRole: 'shelf' });
        boards.push({ name: `Lat Cajón Der ${i + 1}`, boxMm: [t + railGap + boxW - t, -pullOut, bz, t, boxD, boxH], artRole: 'shelf' });
        boards.push({ name: `Trasera Cajón ${i + 1}`, boxMm: [t + railGap + t, boxD - t - pullOut, bz, Math.max(20, boxW - 2 * t), t, boxH], artRole: 'shelf' });
        boards.push({ name: `Fondo Cajón ${i + 1}`,   boxMm: [t + railGap + t, t - pullOut, bz, Math.max(20, boxW - 2 * t), Math.max(20, boxD - 2 * t), t], artRole: 'shelf' });
        if (pullOut > 0) {
          boards.push({ name: `Corredera ${i + 1}`, boxMm: [t, -pullOut * 0.85, bz + boxH * 0.3, railGap, pullOut * 0.85 + 20, 28], artRole: 'metal' });
        }
      }
      boards.push({
        name: `Frente Cajón ${i + 1}`,
        boxMm: [2, -t - pullOut, z0 + 2, w - 4, t, drH - 4],
        artRole: 'front'
      });
    }
  } else if (drawers > 0 && doors > 0) {
    // Estilo mod_10.png: Cajón superior en tono madera cálida con tirador metálico + Puertas inferiores en tono greige
    const remH = h - topDrawerZoneH;
    const numDr = Math.min(drawers, 2);
    const singleDrH = topDrawerZoneH / numDr;
    for (let i = 0; i < numDr; i++) {
      const z0 = remH + i * singleDrH;
      boards.push({
        name: `Frente Cajón Superior ${i + 1}`,
        boxMm: [2, -t, z0 + 2, w - 4, t, singleDrH - 4],
        artRole: 'shelf'
      });
      // Tirador metálico minimalista en el centro del frente de cajón (igual a mod_10.png)
      const hwW = Math.min(110, w * 0.16);
      boards.push({
        name: `Tirador Cajón ${i + 1}`,
        boxMm: [(w - hwW) * 0.5, -t - 12, z0 + singleDrH * 0.5 - 5, hwW, 12, 10],
        artRole: 'metal'
      });
    }
    const dw = w / doors;
    for (let di = 0; di < doors; di++) {
      boards.push({
        name: `Puerta ${di + 1}`,
        boxMm: [di * dw + 2, -t, 2, dw - 4, t, remH - 4],
        artRole: 'front'
      });
    }
  } else if (doors > 0) {
    // Si tiene 2 puertas y estantes internos con techo cerrado (como mod_03.png), mostrar puerta izquierda y revelar interior derecho
    const visibleDoors = (doors === 2 && shelves > 0 && !useTopStrips) ? 1 : doors;
    const dw = w / doors;
    for (let di = 0; di < visibleDoors; di++) {
      boards.push({
        name: `Puerta ${di + 1}`,
        boxMm: [di * dw + 2, -t, 2, dw - 4, t, h - 4],
        artRole: 'front'
      });
    }
  }

  return boards;
}

/* ============================================================================
   GENERADOR DE PREVIEW 3D CON OCULTACIÓN EXACTA DE LÍNEAS Y SUPERFICIES
   E IDÉNTICO ARTE TÉCNICO QUE LOS MÓDULOS DE LA LIBRERÍA (mod_01 .. mod_16):
   - Eliminación de caras ocultas (Back-face culling 3D hacia el ojo de cámara)
   - Subdivisión de caras para ordenamiento Z libre de solapamientos
   - Ray-casting 3D contra cajas (Slab AABB) para ocultar aristas tapadas
   ============================================================================ */
function generateScannedModulePreviewDataUrl(title, w, d, h, scannedBoards = null) {
  const S = 520;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const ctx = c.getContext('2d');

  // 1. Fondo blanco puro #FFFFFF para las tarjetas de módulos nuevos
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, S, S);

  w = Math.max(180, parseFloat(w) || 800);
  d = Math.max(140, parseFloat(d) || 550);
  h = Math.max(180, parseFloat(h) || 720);
  const t = Math.min(24, Math.max(15, state.defaultThickness || 18));

  const yaw = -31 * Math.PI / 180;
  const pitch = 21 * Math.PI / 180;
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch);
  const fov = 30 * Math.PI / 180;
  const focal = (S * 0.5) / Math.tan(fov * 0.5);
  const maxSpan = Math.hypot(w * 0.56, d * 0.56, h * 0.56);
  const camDist = (maxSpan / Math.tan(fov * 0.5)) * 1.38;

  // Posición del ojo de la cámara en coordenadas de mundo (wx, wy, wz)
  // En espacio de cámara el ojo está en (0, 0, -camDist) respecto al centro (w/2, d/2, h/2)
  const eyeRelY1 = -camDist * cosP;
  const eyeRelZ1 =  camDist * sinP;
  const camEyeX = w * 0.5 - eyeRelY1 * sinY;
  const camEyeY = d * 0.5 + eyeRelY1 * cosY;
  const camEyeZ = h * 0.5 + eyeRelZ1;

  function toCam(wx, wy, wz) {
    const rx = wx - w * 0.5;
    const ry = wy - d * 0.5;
    const rz = wz - h * 0.5;
    const x1 = rx * cosY - ry * sinY;
    const y1 = rx * sinY + ry * cosY;
    const z1 = rz;
    const cx = x1;
    const cy = z1 * cosP + y1 * sinP;
    const cz = camDist + (y1 * cosP - z1 * sinP);
    const sc = focal / Math.max(60, cz);
    return { sx: S * 0.50 + cx * sc, sy: S * 0.515 - cy * sc, cz };
  }

  // 2. Sombra suave difuminada bajo la base del módulo (idéntica a mod_02.png / mod_15.png)
  ctx.save();
  const s0 = toCam(-18, -18, 0);
  const s1 = toCam(w + 28, -18, 0);
  const s2 = toCam(w + 38, d + 28, 0);
  const s3 = toCam(-18, d + 28, 0);
  ctx.beginPath();
  ctx.moveTo(s0.sx, s0.sy + 7);
  ctx.lineTo(s1.sx, s1.sy + 7);
  ctx.lineTo(s2.sx, s2.sy + 7);
  ctx.lineTo(s3.sx, s3.sy + 7);
  ctx.closePath();
  ctx.fillStyle = 'rgba(30, 41, 59, 0.085)';
  ctx.filter = 'blur(13px)';
  ctx.fill();
  ctx.restore();

  // 3. Construir cajas 3D AABB de las placas
  let boxes = [];
  if (Array.isArray(scannedBoards) && scannedBoards.length > 0) {
    scannedBoards.forEach((sb, idx) => {
      let bx, by, bz, bdx, bdy, bdz;
      if (Array.isArray(sb.boxMm) && sb.boxMm.length === 6) {
        [bx, by, bz, bdx, bdy, bdz] = sb.boxMm.map(Number);
      } else {
        bx  = (sb.rx || 0) * w;
        by  = (sb.ry || 0) * d;
        bz  = (sb.rz || 0) * h;
        bdx = Math.max(t * 0.5, (sb.rdx || 0.05) * w);
        bdy = Math.max(3, (sb.rdy || 0.05) * d);
        bdz = Math.max(t * 0.5, (sb.rdz || 0.05) * h);
      }
      let artRole = sb.artRole || '';
      if (!artRole) {
        const nm = (sb.name || '').toLowerCase();
        if (nm.includes('corredera') || nm.includes('riel') || nm.includes('tirador')) {
          artRole = 'metal';
        } else if (nm.includes('puerta') || nm.includes('frente') || sb.is_front) {
          artRole = 'front';
        } else if (nm.includes('estante') || nm.includes('repisa') || nm.includes('divisor') || nm.includes('bandeja') || nm.includes('caj')) {
          artRole = 'shelf';
        } else if (bz > t * 1.4 && (bz + bdz) < h - t * 1.4 && bx > t * 0.5 && (bx + bdx) < w - t * 0.5) {
          artRole = 'shelf';
        } else {
          artRole = 'carcass';
        }
      }
      boxes.push({ id: idx, x0: bx, y0: by, z0: bz, x1: bx + bdx, y1: by + bdy, z1: bz + bdz, artRole });
    });
  } else {
    boxes = buildImageBoardsFromSpecs(w, d, h, t, 2, 0, 0, 0).map((sb, idx) => {
      const [bx, by, bz, bdx, bdy, bdz] = sb.boxMm;
      return { id: idx, x0: bx, y0: by, z0: bz, x1: bx + bdx, y1: by + bdy, z1: bz + bdz, artRole: sb.artRole };
    });
  }

  // Paleta cromática exacta de los módulos originales (mod_01 .. mod_15)
  const PALETTE = {
    carcass: { top: '#FFFFFF', left: '#E6EDF5', right: '#DCE5F0', front: '#F4F7FB', back: '#E5ECF4', bottom: '#D8E2EE' },
    back:    { top: '#F1F5F9', left: '#E4ECF5', right: '#DCE5F0', front: '#EDF2F8', back: '#E2EAF2', bottom: '#D8E2EE' },
    shelf:   { top: '#E4CDA9', left: '#D4B88E', right: '#C9AD82', front: '#DABF97', back: '#C9AD82', bottom: '#C2A476' },
    front:   { top: '#F4F0EA', left: '#DFD7CA', right: '#D6CEC0', front: '#EAE3D9', back: '#DCD4C6', bottom: '#D2C9BA' },
    metal:   { top: '#B8C4D4', left: '#8C9BAE', right: '#78879B', front: '#9AA8BA', back: '#78879B', bottom: '#64748B' }
  };

  // Test exacto de oclusión 3D por Ray-AABB (verifica si el segmento desde P hacia camEye choca con otra caja)
  function isPointOccluded(px, py, pz, ignoreBoxId) {
    const dx = camEyeX - px;
    const dy = camEyeY - py;
    const dz = camEyeZ - pz;
    const invX = Math.abs(dx) > 1e-6 ? 1.0 / dx : 1e9;
    const invY = Math.abs(dy) > 1e-6 ? 1.0 / dy : 1e9;
    const invZ = Math.abs(dz) > 1e-6 ? 1.0 / dz : 1e9;
    const eps = 1.1; // Margen de tolerancia en mm

    for (let i = 0; i < boxes.length; i++) {
      const b = boxes[i];
      if (b.id === ignoreBoxId) continue;
      const tx1 = (b.x0 - eps - px) * invX;
      const tx2 = (b.x1 + eps - px) * invX;
      let tmin = Math.min(tx1, tx2);
      let tmax = Math.max(tx1, tx2);

      const ty1 = (b.y0 - eps - py) * invY;
      const ty2 = (b.y1 + eps - py) * invY;
      tmin = Math.max(tmin, Math.min(ty1, ty2));
      tmax = Math.min(tmax, Math.max(ty1, ty2));
      if (tmax < tmin) continue;

      const tz1 = (b.z0 - eps - pz) * invZ;
      const tz2 = (b.z1 + eps - pz) * invZ;
      tmin = Math.max(tmin, Math.min(tz1, tz2));
      tmax = Math.min(tmax, Math.max(tz1, tz2));

      if (tmax >= Math.max(0.004, tmin) && tmin < 0.98) {
        return true;
      }
    }
    return false;
  }

  // 4. Recolectar caras orientadas hacia la cámara (Back-face culling 3D exacto)
  // y subdividirlas en sub-parches para ordenamiento en profundidad sin errores
  const subQuads = [];
  const candidateEdges = [];

  boxes.forEach(b => {
    const pal = PALETTE[b.artRole] || PALETTE.carcass;
    const cx = (b.x0 + b.x1) * 0.5, cy = (b.y0 + b.y1) * 0.5, cz = (b.z0 + b.z1) * 0.5;

    // Determinar qué caras de la caja miran hacia el ojo de la cámara
    const visFront  = (camEyeY - b.y0) < 0;
    const visBack   = (camEyeY - b.y1) > 0;
    const visLeft   = (camEyeX - b.x0) < 0;
    const visRight  = (camEyeX - b.x1) > 0;
    const visTop    = (camEyeZ - b.z1) > 0;
    const visBottom = (camEyeZ - b.z0) < 0;

    const faceSpecs = [];
    if (visFront)  faceSpecs.push({ fill: pal.front,  u0: [b.x0, b.y0, b.z0], u1: [b.x1, b.y0, b.z0], v0: [b.x0, b.y0, b.z1], v1: [b.x1, b.y0, b.z1] });
    if (visBack)   faceSpecs.push({ fill: pal.back,   u0: [b.x1, b.y1, b.z0], u1: [b.x0, b.y1, b.z0], v0: [b.x1, b.y1, b.z1], v1: [b.x0, b.y1, b.z1] });
    if (visLeft)   faceSpecs.push({ fill: (b.x0 > t * 0.5 && b.artRole === 'carcass') ? pal.right : pal.left, u0: [b.x0, b.y1, b.z0], u1: [b.x0, b.y0, b.z0], v0: [b.x0, b.y1, b.z1], v1: [b.x0, b.y0, b.z1] });
    if (visRight)  faceSpecs.push({ fill: pal.right,  u0: [b.x1, b.y0, b.z0], u1: [b.x1, b.y1, b.z0], v0: [b.x1, b.y0, b.z1], v1: [b.x1, b.y1, b.z1] });
    if (visTop)    faceSpecs.push({ fill: pal.top,    u0: [b.x0, b.y0, b.z1], u1: [b.x1, b.y0, b.z1], v0: [b.x0, b.y1, b.z1], v1: [b.x1, b.y1, b.z1] });
    if (visBottom) faceSpecs.push({ fill: pal.bottom, u0: [b.x0, b.y1, b.z0], u1: [b.x1, b.y1, b.z0], v0: [b.x0, b.y0, b.z0], v1: [b.x1, b.y0, b.z0] });

    const bilerp = (f, u, v) => [
      (1 - u) * (1 - v) * f.u0[0] + u * (1 - v) * f.u1[0] + (1 - u) * v * f.v0[0] + u * v * f.v1[0],
      (1 - u) * (1 - v) * f.u0[1] + u * (1 - v) * f.u1[1] + (1 - u) * v * f.v0[1] + u * v * f.v1[1],
      (1 - u) * (1 - v) * f.u0[2] + u * (1 - v) * f.u1[2] + (1 - u) * v * f.v0[2] + u * v * f.v1[2]
    ];

    faceSpecs.forEach(f => {
      const spanU = Math.hypot(f.u1[0] - f.u0[0], f.u1[1] - f.u0[1], f.u1[2] - f.u0[2]);
      const spanV = Math.hypot(f.v0[0] - f.u0[0], f.v0[1] - f.u0[1], f.v0[2] - f.u0[2]);
      const nu = Math.max(1, Math.min(8, Math.ceil(spanU / 115)));
      const nv = Math.max(1, Math.min(8, Math.ceil(spanV / 115)));

      for (let iu = 0; iu < nu; iu++) {
        const uA = iu / nu, uB = (iu + 1) / nu;
        for (let iv = 0; iv < nv; iv++) {
          const vA = iv / nv, vB = (iv + 1) / nv;
          const p0 = bilerp(f, uA, vA);
          const p1 = bilerp(f, uB, vA);
          const p2 = bilerp(f, uB, vB);
          const p3 = bilerp(f, uA, vB);
          const mid = bilerp(f, (uA + uB) * 0.5, (vA + vB) * 0.5);
          const dist = Math.hypot(mid[0] - camEyeX, mid[1] - camEyeY, mid[2] - camEyeZ);
          const roleBias = b.artRole === 'metal' ? -6 : (b.artRole === 'front' ? -3 : (b.artRole === 'back' ? 4 : 0));
          subQuads.push({
            pts: [toCam(...p0), toCam(...p1), toCam(...p2), toCam(...p3)],
            dist: dist + roleBias,
            fill: f.fill
          });
        }
      }

      // Agregar los 4 bordes exteriores de esta cara visible
      candidateEdges.push({ boxId: b.id, a: f.u0, b: f.u1 });
      candidateEdges.push({ boxId: b.id, a: f.u1, b: f.v1 });
      candidateEdges.push({ boxId: b.id, a: f.v1, b: f.v0 });
      candidateEdges.push({ boxId: b.id, a: f.v0, b: f.u0 });
    });
  });

  // Pintar parches de atrás hacia adelante
  subQuads.sort((a, b) => b.dist - a.dist);
  subQuads.forEach(sq => {
    ctx.beginPath();
    ctx.moveTo(sq.pts[0].sx, sq.pts[0].sy);
    ctx.lineTo(sq.pts[1].sx, sq.pts[1].sy);
    ctx.lineTo(sq.pts[2].sx, sq.pts[2].sy);
    ctx.lineTo(sq.pts[3].sx, sq.pts[3].sy);
    ctx.closePath();
    ctx.fillStyle = sq.fill;
    ctx.fill();
    // Trazo ultrafino del mismo color para sellar sub-uniones sin costura
    ctx.strokeStyle = sq.fill;
    ctx.lineWidth = 0.65;
    ctx.stroke();
  });

  // 5. Dibujar únicamente los tramos de aristas 3D no ocluidos por otras placas (sin efecto rayos X)
  const seenEdges = new Set();
  ctx.strokeStyle = '#2B3440';
  ctx.lineWidth = 1.25;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  candidateEdges.forEach(ed => {
    const k1 = `${ed.a[0].toFixed(1)},${ed.a[1].toFixed(1)},${ed.a[2].toFixed(1)}`;
    const k2 = `${ed.b[0].toFixed(1)},${ed.b[1].toFixed(1)},${ed.b[2].toFixed(1)}`;
    const edgeKey = k1 < k2 ? `${ed.boxId}:${k1}|${k2}` : `${ed.boxId}:${k2}|${k1}`;
    if (seenEdges.has(edgeKey)) return;
    seenEdges.add(edgeKey);

    const len = Math.hypot(ed.b[0] - ed.a[0], ed.b[1] - ed.a[1], ed.b[2] - ed.a[2]);
    const steps = Math.max(4, Math.min(36, Math.ceil(len / 22)));
    let segStart = null;

    for (let s = 0; s < steps; s++) {
      const t0 = s / steps;
      const t1 = (s + 1) / steps;
      const tm = (t0 + t1) * 0.5;
      const mx = ed.a[0] + (ed.b[0] - ed.a[0]) * tm;
      const my = ed.a[1] + (ed.b[1] - ed.a[1]) * tm;
      const mz = ed.a[2] + (ed.b[2] - ed.a[2]) * tm;

      const occluded = isPointOccluded(mx, my, mz, ed.boxId);
      if (!occluded) {
        if (segStart === null) segStart = t0;
      } else if (segStart !== null) {
        const pA = toCam(
          ed.a[0] + (ed.b[0] - ed.a[0]) * segStart,
          ed.a[1] + (ed.b[1] - ed.a[1]) * segStart,
          ed.a[2] + (ed.b[2] - ed.a[2]) * segStart
        );
        const pB = toCam(
          ed.a[0] + (ed.b[0] - ed.a[0]) * t0,
          ed.a[1] + (ed.b[1] - ed.a[1]) * t0,
          ed.a[2] + (ed.b[2] - ed.a[2]) * t0
        );
        ctx.beginPath();
        ctx.moveTo(pA.sx, pA.sy);
        ctx.lineTo(pB.sx, pB.sy);
        ctx.stroke();
        segStart = null;
      }
    }
    if (segStart !== null) {
      const pA = toCam(
        ed.a[0] + (ed.b[0] - ed.a[0]) * segStart,
        ed.a[1] + (ed.b[1] - ed.a[1]) * segStart,
        ed.a[2] + (ed.b[2] - ed.a[2]) * segStart
      );
      const pB = toCam(ed.b[0], ed.b[1], ed.b[2]);
      ctx.beginPath();
      ctx.moveTo(pA.sx, pA.sy);
      ctx.lineTo(pB.sx, pB.sy);
      ctx.stroke();
    }
  });

  // 6. Detalle sutil de fijación técnica en el lateral izquierdo (igual a mod_02.png / mod_15.png)
  ctx.save();
  ctx.fillStyle = '#475569';
  [0.32, 0.50, 0.68].forEach(ry => {
    const pt = toCam(0, d * ry, h * 0.5);
    ctx.fillRect(pt.sx - 0.8, pt.sy - 0.8, 1.8, 1.8);
  });
  ctx.restore();

  return c.toDataURL('image/png');
}

function refreshCustomImageModuleArtPreview() {
  const w = parseFloat(document.getElementById('customModW')?.value) || 800;
  const d = parseFloat(document.getElementById('customModD')?.value) || 580;
  const h = parseFloat(document.getElementById('customModH')?.value) || 720;
  const t = parseInt(document.getElementById('customModThickSelect')?.value) || 18;
  const shelves = parseInt(document.getElementById('customModShelves')?.value) || 0;
  const dividers = parseInt(document.getElementById('customModDividers')?.value) || 0;
  const doors = parseInt(document.getElementById('customModDoors')?.value) || 0;
  const drawers = parseInt(document.getElementById('customModDrawers')?.value) || 0;

  const zSplits = _detectedImageStructure ? _detectedImageStructure.zSplits : null;
  const xSplits = _detectedImageStructure ? _detectedImageStructure.xSplits : null;
  const topStrips = _detectedImageStructure ? !!_detectedImageStructure.topStrips : false;
  const imageBoards = buildImageBoardsFromSpecs(w, d, h, t, shelves, dividers, doors, drawers, zSplits, xSplits, topStrips);
  state.customModImgDataUrl = generateScannedModulePreviewDataUrl('Módulo', w, d, h, imageBoards);
  const prev = document.getElementById('imgModPreview');
  if (prev) prev.src = state.customModImgDataUrl;
  return imageBoards;
}

function applyDetectedStructureToForm(det, sourceLabel = 'Imagen detectada') {
  if (!det) return;
  _detectedImageStructure = det;

  const wEl = document.getElementById('customModW');
  const dEl = document.getElementById('customModD');
  const hEl = document.getElementById('customModH');
  const sEl = document.getElementById('customModShelves');
  const dvEl = document.getElementById('customModDividers');
  const drEl = document.getElementById('customModDoors');
  const dwEl = document.getElementById('customModDrawers');

  if (wEl && det.widthMm) wEl.value = String(det.widthMm);
  if (dEl && det.depthMm) dEl.value = String(det.depthMm);
  if (hEl && det.heightMm) hEl.value = String(det.heightMm);
  if (sEl && typeof det.shelves === 'number') sEl.value = String(det.shelves);
  if (dvEl && typeof det.dividers === 'number') dvEl.value = String(det.dividers);
  if (drEl && typeof det.doors === 'number') drEl.value = String(det.doors);
  if (dwEl && typeof det.drawers === 'number') dwEl.value = String(det.drawers);

  const statusPill = document.getElementById('imgModDetectionStatus');
  if (statusPill) {
    statusPill.innerHTML = `✅ <b>${sourceLabel}:</b> ${det.widthMm || 800}×${det.depthMm || 580}×${det.heightMm || 720} mm • ${det.shelves || 0} est. • ${det.dividers || 0} div. • ${det.doors || 0} ptas. • ${det.drawers || 0} caj.`;
  }

  refreshCustomImageModuleArtPreview();
}

function onCustomModuleImageSelected(ev) {
  const file = ev.target.files && ev.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const rawDataUrl = e.target.result;
    state.lastUploadedRawImageUrl = rawDataUrl;

    const rawBadge = document.getElementById('imgModRawBadge');
    const rawThumb = document.getElementById('imgModUploadedRawThumb');
    if (rawThumb) rawThumb.src = rawDataUrl;
    if (rawBadge) rawBadge.style.display = 'flex';

    const img = new Image();
    img.onload = function() {
      // 1. Escanear medidas y estructura del mueble desde la imagen subida
      const det = analyzeUploadedImageStructure(img, file.name);
      applyDetectedStructureToForm(det, 'Medidas y modelo detectados');
      showToast(`Imagen analizada: ${det.widthMm}×${det.depthMm}×${det.heightMm} mm (${det.shelves} estantes, ${det.dividers} divisores, ${det.doors} puertas, ${det.drawers} cajones).`);

      // 2. Si el usuario tiene configurada su Gemini API Key, refinar automáticamente con visión IA
      if (state.geminiApiKey) {
        analyzeModuleImageWithGemini(true);
      }
    };
    img.src = rawDataUrl;

    const titleIn = document.getElementById('customModTitleInput');
    if (titleIn && !titleIn.value.trim()) {
      titleIn.value = file.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ');
    }
  };
  reader.readAsDataURL(file);
}

function submitCreateModuleFromImage(ev) {
  ev.preventDefault();
  const title = document.getElementById('customModTitleInput').value.trim() || 'Módulo Personalizado';
  const rawCatTab = document.getElementById('customModCatSelect').value || 'Básicos';
  const catTab = (rawCatTab === 'Módulos') ? 'Básicos' : rawCatTab;
  const thickMm = parseInt(document.getElementById('customModThickSelect').value) || 18;
  const w = parseFloat(document.getElementById('customModW').value) || 800;
  const d = parseFloat(document.getElementById('customModD').value) || 580;
  const h = parseFloat(document.getElementById('customModH').value) || 720;
  const shelves = parseInt(document.getElementById('customModShelves').value) || 0;
  const dividers = parseInt(document.getElementById('customModDividers').value) || 0;
  const doors = parseInt(document.getElementById('customModDoors').value) || 0;
  const drawers = parseInt(document.getElementById('customModDrawers').value) || 0;

  const imageBoards = refreshCustomImageModuleArtPreview();
  const zSplits = (_detectedImageStructure && Array.isArray(_detectedImageStructure.zSplits)) ? _detectedImageStructure.zSplits : [];
  const xSplits = (_detectedImageStructure && Array.isArray(_detectedImageStructure.xSplits)) ? _detectedImageStructure.xSplits : [];
  const topStrips = _detectedImageStructure ? !!_detectedImageStructure.topStrips : (drawers > 0);

  const customCfg = {
    shelves,
    dividers,
    doors,
    drawers,
    zSplits,
    xSplits,
    topStrips,
    image_boards: imageBoards
  };

  const newMod = {
    id: 'mod_custom_' + Date.now(),
    title: title,
    category: catTab === 'Accesorios' ? 'ACCESORIOS' : 'MÓDULO',
    filterCat: catTab === 'Accesorios' ? 'Accesorios' : (catTab === 'Unidades' ? 'Unidades' : (catTab === 'Colecciones' ? 'Colecciones' : 'Carpintería')),
    brand: 'ENSSAMBLE',
    isDynamic: true,
    isCustomFromImage: true,
    defaultW: w,
    defaultD: d,
    defaultH: h,
    thicknessMm: thickMm,
    shelves: shelves,
    dividers: dividers,
    doors: doors,
    drawers: drawers,
    customCfg: customCfg,
    img: state.customModImgDataUrl,
    desc: `Módulo dinámico creado desde imagen (${w}×${d}×${h} mm • ${shelves} est., ${dividers} div., ${doors} ptas., ${drawers} caj. • espesor fijo ${thickMm} mm al escalar).`,
    updatedAt: Math.floor(Date.now() / 1000),
    usageCount: 36
  };

  modulesList.unshift(newMod);
  state.defaultThickness = thickMm;
  state.activeModuleTab = catTab;
  syncThicknessSliderUI();
  persistState();
  closeCreateModuleFromImageModal();
  renderInicioDashboard();
  renderView();

  const sent = notifySketchUp('createModuleFromImage', {
    id: newMod.id,
    title: newMod.title,
    widthMm: w,
    depthMm: d,
    heightMm: h,
    thicknessMm: thickMm,
    shelves: shelves,
    dividers: dividers,
    doors: doors,
    drawers: drawers,
    customCfg: customCfg
  });
  if (!sent) {
    showToast(`Módulo "${newMod.title}" (${w}×${d}×${h} mm) guardado en Librería de Módulos 3D con su preview.`);
  }
}

window.onRubyCustomModuleCreated = function(res) {
  if (res && res.ok) {
    showToast(`Módulo dinámico "${res.title}" guardado e insertado en SketchUp.`);
  }
};

/* ================= 2) CREAR MÓDULO A TRAVÉS DE ESCANEO EN SKETCHUP ================= */
function openCreateModuleFromScanModal() {
  const titleIn = document.getElementById('scanModTitleInput');
  if (titleIn) titleIn.value = '';
  notifySketchUp('inspectSelectionForScanModal', '');
  document.getElementById('createModuleFromScanModal').classList.add('open');
  setTimeout(() => titleIn?.focus(), 60);
}

window.onRubySelectionInspectedForScan = function(info) {
  if (!info || !info.hasSelection) return;
  const titleIn = document.getElementById('scanModTitleInput');
  if (titleIn && !titleIn.value.trim() && info.suggestedTitle) {
    titleIn.value = info.suggestedTitle;
  }
};

function closeCreateModuleFromScanModal() {
  document.getElementById('createModuleFromScanModal').classList.remove('open');
}

function submitCreateModuleFromScan(ev) {
  ev.preventDefault();
  const rawTitle = document.getElementById('scanModTitleInput').value.trim();
  const rawCatTab = document.getElementById('scanModCatSelect').value || 'Básicos';
  const catTab = (rawCatTab === 'Módulos') ? 'Básicos' : rawCatTab;

  const sent = notifySketchUp('scanSelectedModuleToCatalog', { title: rawTitle, category: catTab });
  if (!sent) {
    // Simulación en navegador cuando no está conectado a SketchUp
    const fallbackTitle = rawTitle || 'Módulo Escaneado SketchUp';
    const demoItem = {
      id: 'mod_custom_scan_' + Date.now(),
      title: fallbackTitle,
      category: catTab === 'Accesorios' ? 'ACCESORIOS' : 'MÓDULO',
      filterCat: catTab === 'Accesorios' ? 'Accesorios' : (catTab === 'Unidades' ? 'Unidades' : (catTab === 'Colecciones' ? 'Colecciones' : 'Carpintería')),
      brand: 'ENSSAMBLE',
      isDynamic: true,
      isScanned: true,
      defaultW: 850,
      defaultD: 560,
      defaultH: 740,
      thicknessMm: state.defaultThickness || 18,
      desc: `Componente Dinámico escaneado desde SketchUp (850×560×740 mm, espesor original ${state.defaultThickness || 18} mm sin deformación y 6 grips centrales de escalado).`
    };
    window.onRubyModuleScannedToCatalog({ ok: true, item: demoItem });
  }
}

function triggerAddModuleFromSketchUp() {
  const activeCat = MODULE_CATEGORY_TABS.includes(state.activeModuleTab) ? state.activeModuleTab : 'Básicos';
  const sent = notifySketchUp('scanSelectedModuleToCatalog', {
    title: '',
    category: activeCat
  });
  if (!sent) {
    showToast('Selecciona un módulo o pieza en SketchUp y presiona «+» para guardarlo en la biblioteca de módulos.');
  }
}

function flattenImageOnWhiteBackground(srcDataUrl, callback) {
  if (!srcDataUrl) {
    callback(srcDataUrl);
    return;
  }
  const img = new Image();
  img.onload = function() {
    try {
      const iw = Math.max(1, img.naturalWidth || img.width || 520);
      const ih = Math.max(1, img.naturalHeight || img.height || 520);
      const off = document.createElement('canvas');
      off.width = iw;
      off.height = ih;
      const octx = off.getContext('2d');
      octx.fillStyle = '#FFFFFF';
      octx.fillRect(0, 0, iw, ih);
      octx.drawImage(img, 0, 0, iw, ih);

      let sx = 0, sy = 0, sw = iw, sh = ih;
      try {
        const d = octx.getImageData(0, 0, iw, ih).data;
        let minX = iw, minY = ih, maxX = -1, maxY = -1;
        for (let y = 0; y < ih; y++) {
          for (let x = 0; x < iw; x++) {
            const idx = (y * iw + x) * 4;
            if (d[idx] < 248 || d[idx + 1] < 248 || d[idx + 2] < 248) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        if (maxX >= minX && maxY >= minY) {
          sx = minX;
          sy = minY;
          sw = Math.max(1, maxX - minX + 1);
          sh = Math.max(1, maxY - minY + 1);
        }
      } catch (_ce) {}

      const S = 600;
      const c = document.createElement('canvas');
      c.width = S;
      c.height = S;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, S, S);
      const scale = Math.min((S * 0.98) / sw, (S * 0.98) / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      const dx = (S - dw) * 0.5;
      const dy = (S - dh) * 0.5;
      ctx.drawImage(off, sx, sy, sw, sh, dx, dy, dw, dh);
      callback(c.toDataURL('image/png'));
    } catch (_e) {
      callback(srcDataUrl);
    }
  };
  img.onerror = function() {
    callback(srcDataUrl);
  };
  img.src = srcDataUrl;
}

window.onRubyModuleScannedToCatalog = function(res) {
  if (!res || !res.ok || !res.item) {
    showToast((res && res.error) || 'Selecciona primero un módulo (grupo o componente) en SketchUp para agregarlo.');
    return;
  }
  const it = res.item;
  const finalizeAddModule = function(finalImgDataUrl) {
    it.img = finalImgDataUrl;
    it.updatedAt = Math.floor(Date.now() / 1000);
    it.usageCount = 100;

    // Eliminar si ya existía con el mismo id y agregar al INICIO de la librería de módulos 3D
    const prevIdx = modulesList.findIndex(x => x.id === it.id);
    if (prevIdx !== -1) modulesList.splice(prevIdx, 1);
    modulesList.unshift(it);

    state.selectedModuleId = it.id;
    if (!MODULE_CATEGORY_TABS.includes(state.activeModuleTab)) {
      state.activeModuleTab = 'Básicos';
    }
    it.filterCat = state.activeModuleTab;
    it.isCollection = (state.activeModuleTab === 'Colecciones');
    if (state.activeModuleTab === 'Accesorios') it.category = 'ACCESORIOS';
    else if (state.activeModuleTab === 'Herrajes') it.category = 'HERRAJES';
    else if (state.activeModuleTab === 'Iluminación') it.category = 'ILUMINACIÓN';
    else it.category = 'MÓDULO';
    moduleOrderIds = modulesList.map(m => m.id);
    persistState();
    if (typeof closeCreateModuleFromScanModal === 'function') {
      try { closeCreateModuleFromScanModal(); } catch (_e) {}
    }
    renderInicioDashboard();
    renderView();
    setTimeout(() => {
      openRenameModal(it.id, null);
    }, 60);
  };

  if (it.img && (String(it.img).startsWith('assets/') || String(it.img).endsWith('.png'))) {
    const localPath = String(it.img).split('?')[0];
    flattenImageOnWhiteBackground(localPath + '?raw=' + Date.now(), function(croppedDataUrl) {
      if (croppedDataUrl && String(croppedDataUrl).startsWith('data:image/png;base64,')) {
        it.thumbDataUrl = croppedDataUrl;
        notifySketchUp('saveScannedModuleThumb', { id: it.id, dataUrl: croppedDataUrl });
        setTimeout(() => {
          finalizeAddModule(localPath + '?v=' + Date.now());
        }, 40);
      } else {
        finalizeAddModule(localPath + '?v=' + Date.now());
      }
    });
  } else if (it.img && String(it.img).startsWith('data:image/')) {
    flattenImageOnWhiteBackground(it.img, function(croppedDataUrl) {
      if (croppedDataUrl && String(croppedDataUrl).startsWith('data:image/png;base64,')) {
        it.thumbDataUrl = croppedDataUrl;
        notifySketchUp('saveScannedModuleThumb', { id: it.id, dataUrl: croppedDataUrl });
      }
      finalizeAddModule(croppedDataUrl || it.img);
    });
  } else {
    const boardsForPreview = Array.isArray(it.boards) && it.boards.length
      ? it.boards
      : (it.customCfg && Array.isArray(it.customCfg.scanned_boards) ? it.customCfg.scanned_boards : null);
    const fallbackUrl = generateScannedModulePreviewDataUrl(it.title, it.defaultW || 800, it.defaultD || 550, it.defaultH || 720, boardsForPreview);
    finalizeAddModule(fallbackUrl);
  }
};

/* ================= MODAL "VER DETALLE" ================= */
function openDetailModal(id, ev) {
  if (ev) ev.stopPropagation();
  state.activeDetailId = id;
  const isMod = id.startsWith('mod_');
  const item = isMod ? modulesList.find(x => x.id === id) : materialsList.find(x => x.id === id);
  if (!item) return;

  document.getElementById('detailModalCat').textContent = isMod ? item.category : formatCleanMaterialType(item);
  const brandEl = document.getElementById('detailModalBrand');
  brandEl.style.display = 'inline-flex';
  brandEl.className = `card-brand ${isMod ? 'enssamble' : (item.brandClass || 'egger')}`;
  brandEl.textContent = isMod ? 'ENSSAMBLE' : (item.brand || 'EGGER');

  document.getElementById('detailModalImg').src = item.img;
  document.getElementById('detailModalTitle').textContent = item.title;
  document.getElementById('detailModalDesc').textContent = item.desc;

  const codeEl = document.getElementById('detailModalCode');
  const modBox = document.getElementById('detailModuleConfigBox');
  const footer = document.getElementById('detailModalFooter');

  if (isMod) {
    codeEl.textContent = `Componente Dinámico 3D • Espesor fijo ${state.defaultThickness} mm al escalar`;
    modBox.style.display = 'flex';
    document.getElementById('detailModW').value = item.defaultW || 600;
    document.getElementById('detailModD').value = item.defaultD || 580;
    document.getElementById('detailModH').value = item.defaultH || 720;
    updateThicknessPillsUI();

    footer.innerHTML = `
      <button type="button" class="ens-pill-btn" onclick="closeDetailModal()">Cerrar</button>
      <button type="button" class="ens-pill-btn" onclick="insertFromDetailModal(true)">Añadir varios</button>
      <button type="button" class="ens-pill-btn active" onclick="insertFromDetailModal(false)">Añadir a SketchUp</button>
    `;
  } else {
    const linePart = item.line ? ` • ${item.line}` : '';
    const dimsPart = item.dimensions ? ` (${item.dimensions})` : '';
    const texDims = (String(item.brand || '').toUpperCase() === 'FAPLAC' || String(item.id || '').startsWith('fp_')) ? '307×662 mm' : '768×1655 mm';
    codeEl.textContent = `Código: ${item.code || 'Estándar'}${linePart}${dimsPart} • Textura .SKM (${texDims})`;
    modBox.style.display = 'none';
    footer.innerHTML = `
      <button type="button" class="ens-pill-btn" onclick="closeDetailModal()">Cerrar</button>
      <button type="button" class="ens-pill-btn active" onclick="onApplyMaterial('${item.id}', event); closeDetailModal();">Seleccionar con Puntero en SketchUp</button>
    `;
  }

  document.getElementById('detailModal').classList.add('open');
}

function closeDetailModal() {
  document.getElementById('detailModal').classList.remove('open');
}

function setModuleThickness(mm) {
  state.defaultThickness = mm;
  modulesList.forEach(m => {
    if (m && (m.id === state.selectedModuleId || String(m.id).startsWith('mod_custom_'))) {
      m.thicknessMm = mm;
    }
  });
  updateThicknessPillsUI();
  syncThicknessSliderUI();
  const codeEl = document.getElementById('detailModalCode');
  if (codeEl) codeEl.textContent = `Componente Dinámico 3D • Espesor fijo ${state.defaultThickness} mm al escalar`;
  persistState();
  notifySketchUp('setBoardOrModuleThickness', { thicknessMm: mm });
}

function updateThicknessPillsUI() {
  document.querySelectorAll('#detailModuleConfigBox .thick-pill').forEach(btn => {
    const val = parseInt(btn.textContent);
    btn.classList.toggle('active', val === state.defaultThickness);
  });
}

function insertFromDetailModal(repeatMode) {
  if (!state.activeDetailId) return;
  const dims = {
    w: parseFloat(document.getElementById('detailModW').value) || 600,
    d: parseFloat(document.getElementById('detailModD').value) || 580,
    h: parseFloat(document.getElementById('detailModH').value) || 720
  };
  onPlaceModule(state.activeDetailId, repeatMode, null, dims);
  closeDetailModal();
}

function setMaterialSubTab(subTab) {
  state.activeMaterialTab = subTab;
  renderView();
}

function setModuleSubTab(subTab) {
  state.activeModuleTab = subTab;
  renderView();
}

/* ============================================================================
   RENDERIZADO DE PESTAÑAS MÓDULOS Y MATERIALES
   ============================================================================ */
function renderView() {
  if (state.activeTab !== 'modules' && state.activeTab !== 'materials') return;
  const isModulesTab = state.activeTab === 'modules';

  const titleEl = document.getElementById('catalogTitle');
  const subEl = document.getElementById('catalogSubtitle');
  const searchInput = document.getElementById('searchInput');
  const matActions = document.getElementById('materialsExtraActions');
  const modActions = document.getElementById('modulesExtraActions');

  if (isModulesTab) {
    if (state.activeModuleTab === 'Módulos' || !state.activeModuleTab) {
      state.activeModuleTab = 'Básicos';
    }
    titleEl.textContent = 'Librería de Módulos 3D';
    subEl.textContent = 'COMPONENTES INTELIGENTES LISTOS PARA FABRICAR.';
    searchInput.placeholder = 'Buscar módulo, unidad, colección, accesorio, herraje o iluminación...';
    if (matActions) matActions.style.display = 'none';
    const showSortBtn = MODULE_CATEGORY_TABS.includes(state.activeModuleTab);
    if (modActions) modActions.style.display = showSortBtn ? 'inline-flex' : 'none';
    syncSortModulesButtonUI();
  } else {
    state.activeMaterialTab = 'Melaminas';
    titleEl.textContent = 'Catálogo de Materiales';
    subEl.textContent = 'EXPLORA TEXTURAS Y ACABADOS PREMIUM PARA TUS DISEÑOS.';
    searchInput.placeholder = 'Buscar melamina...';
    if (matActions) matActions.style.display = 'inline-flex';
    if (modActions) modActions.style.display = 'none';
    const openUrlBtn = document.getElementById('openUrlImportBtn');
    if (openUrlBtn) {
      openUrlBtn.style.display = (state.importUrlEnabled !== false) ? 'inline-flex' : 'none';
    }
    updatePaintModeButtonUI();
  }

  document.getElementById('clearSearchBtn').style.display = state.searchQuery ? 'block' : 'none';

  const pillsContainer = document.getElementById('filterPillsRow');
  let pillsHtml = '';

  if (isModulesTab) {
    const modTabs = ['Personalizado', 'Básicos', 'Unidades', 'Colecciones', 'Accesorios', 'Herrajes', 'Iluminación', 'Animaciones'];
    pillsHtml = modTabs.map(t => {
      const isAct = state.activeModuleTab === t ? 'active' : '';
      return `<button type="button" class="ens-pill-btn ${isAct}" onclick="setModuleSubTab('${t}')"><span>${t}</span></button>`;
    }).join('');
    const modIconSrc = state.theme === 'dark' ? 'assets/icons/icon_modulos_dark.png' : 'assets/icons/icon_modulos.png';
    pillsHtml += `
      <button type="button" class="ens-pill-btn add-module-icon-pill-btn" id="addModuleToLibBtn" onclick="triggerAddModuleFromSketchUp()" title="Agregar el módulo o pieza seleccionado de SketchUp a la biblioteca de módulos">
        <span class="add-mod-plus-sign">+</span>
        <img src="${modIconSrc}" alt="Agregar módulo" class="add-mod-tab-icon" />
      </button>
    `;
  } else {
    const matTabs = ['Melaminas'];
    pillsHtml = matTabs.map(t => {
      const isAct = state.activeMaterialTab === t ? 'active' : '';
      return `<button type="button" class="ens-pill-btn ${isAct}" onclick="setMaterialSubTab('${t}')"><span>${t}</span></button>`;
    }).join('');
  }
  pillsContainer.innerHTML = pillsHtml;

  const grid = document.getElementById('cardsGrid');
  const animView = document.getElementById('modulesAnimationsView');

  if (isModulesTab && state.activeModuleTab === 'Animaciones') {
    if (grid) {
      grid.style.display = 'none';
      grid.classList.remove('sorting-mode-active');
    }
    if (animView) animView.style.display = 'flex';
    syncRemoveAnimationButtonUI();
    return;
  } else {
    if (state.removeAnimModeActive) {
      state.removeAnimModeActive = false;
      syncRemoveAnimationButtonUI();
      notifySketchUp('setRemoveAnimationMode', { active: false });
    }
    if (grid) {
      grid.style.display = 'grid';
      grid.classList.toggle('sorting-mode-active', isSortModulesActiveInCurrentView());
    }
    if (animView) animView.style.display = 'none';
  }

  let items = [];
  if (isModulesTab) {
    items = modulesList.filter(x => getModuleSubTabCategory(x) === state.activeModuleTab);
  } else {
    items = materialsList.filter(x => x.filterCat !== 'Herrajes');
  }

  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    items = items.filter(item =>
      (item.title || '').toLowerCase().includes(q) ||
      (item.code || '').toLowerCase().includes(q) ||
      (item.line || '').toLowerCase().includes(q) ||
      (item.category || '').toLowerCase().includes(q) ||
      (item.brand || '').toLowerCase().includes(q) ||
      (item.desc || '').toLowerCase().includes(q)
    );
  }

  const cols = Math.max(4, Math.min(14, state.gridCols || 8));
  grid.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
  grid.classList.toggle('cols-12', cols >= 11);
  grid.innerHTML = items.map(it => buildUnifiedCardHtml(it, false)).join('');
}

/* ============================================================================
   SECCIÓN ANIMACIONES DE PUERTAS (90° A 135°) Y CAJONES (DISTANCIA EN MM)
   ============================================================================ */
state.animDoorAngleDeg = state.animDoorAngleDeg || 110;
state.animDrawerDistMm = state.animDrawerDistMm ?? 350;
state.animDetectedModules = state.animDetectedModules || [];


function syncRemoveAnimationButtonUI() {
  const btn = document.getElementById('toggleRemoveAnimBtn');
  if (btn) btn.classList.toggle('active', !!state.removeAnimModeActive);
}

function toggleRemoveAnimationMode() {
  state.removeAnimModeActive = !state.removeAnimModeActive;
  syncRemoveAnimationButtonUI();
  notifySketchUp('setRemoveAnimationMode', { active: !!state.removeAnimModeActive });
}

window.onRubyRemoveAnimationStatus = function(active) {
  state.removeAnimModeActive = !!active;
  syncRemoveAnimationButtonUI();
};

function applyDirectAnimationToSelection(modeKey, inputId) {
  if (state.removeAnimModeActive) {
    state.removeAnimModeActive = false;
    syncRemoveAnimationButtonUI();
    notifySketchUp('setRemoveAnimationMode', { active: false });
  }
  const inEl = document.getElementById(inputId);
  const rawStr = inEl ? String(inEl.value || '').trim().replace(',', '.') : '';
  const parsedVal = rawStr !== '' ? parseFloat(rawStr) : null;
  const isDoor = String(modeKey).startsWith('door_') || String(modeKey).startsWith('rot_');
  const finalVal = (parsedVal !== null && !isNaN(parsedVal)) ? parsedVal : (isDoor ? 90 : 350);

  notifySketchUp('assignDirectAnimationToSelected', {
    mode: modeKey,
    value: finalVal,
    rawInput: rawStr
  });
}

function syncAnimationControlsUI() {
  const angle = Math.max(90, Math.min(135, Math.round(Number(state.animDoorAngleDeg) || 110)));
  state.animDoorAngleDeg = angle;
  const dist = Math.max(0, Math.min(1500, Math.round(Number(state.animDrawerDistMm) ?? 350)));
  state.animDrawerDistMm = dist;

  const rEl = document.getElementById('animDoorAngleRange');
  if (rEl && Number(rEl.value) !== angle) rEl.value = String(angle);
  const nEl = document.getElementById('animDoorAngleInput');
  if (nEl && Number(nEl.value) !== angle) nEl.value = String(angle);
  const bEl = document.getElementById('animDoorAngleBadge');
  if (bEl) bEl.textContent = `${angle}°`;

  const dIn = document.getElementById('animDrawerDistInput');
  if (dIn && document.activeElement !== dIn) dIn.value = String(dist);
  const dBadge = document.getElementById('animDrawerDistBadge');
  if (dBadge) dBadge.textContent = `${dist} mm`;

  document.querySelectorAll('.anim-param-box:first-child .anim-preset-pill').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent, 10) === angle);
  });
  document.querySelectorAll('.anim-param-box:last-child .anim-preset-pill').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent, 10) === dist);
  });
}

function onAnimDoorAngleChange(val) {
  let num = parseFloat(val);
  if (isNaN(num)) num = 110;
  num = Math.max(90, Math.min(135, Math.round(num)));
  state.animDoorAngleDeg = num;
  syncAnimationControlsUI();

  (state.animDetectedModules || []).forEach(m => {
    (m.parts || []).forEach(p => {
      if (p.kind === 'door') p.angleDeg = num;
    });
  });
  renderAnimationsDetectedList();

  // Si hay puertas abiertas actualmente, actualizar su ángulo en vivo en SketchUp
  const anyOpenDoor = (state.animDetectedModules || []).some(m => (m.parts || []).some(p => p.kind === 'door' && p.isOpen));
  if (anyOpenDoor) {
    notifySketchUp('runModuleAnimation', {
      action: 'update_open',
      doorAngleDeg: state.animDoorAngleDeg,
      drawerDistMm: state.animDrawerDistMm
    });
  }
}

function onAnimDrawerDistChange(val) {
  let num = parseFloat(val);
  if (isNaN(num)) num = 0;
  num = Math.max(0, Math.min(1500, Math.round(num)));
  state.animDrawerDistMm = num;

  const dBadge = document.getElementById('animDrawerDistBadge');
  if (dBadge) dBadge.textContent = `${num} mm`;
  document.querySelectorAll('.anim-param-box:last-child .anim-preset-pill').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent, 10) === num);
  });

  (state.animDetectedModules || []).forEach(m => {
    (m.parts || []).forEach(p => {
      if (p.kind === 'drawer') p.distMm = num;
    });
  });
  document.querySelectorAll('.anim-row-drawer-mm-input').forEach(inp => {
    if (document.activeElement !== inp) inp.value = String(num);
  });

  const anyOpenDrawer = (state.animDetectedModules || []).some(m => (m.parts || []).some(p => p.kind === 'drawer' && p.isOpen));
  if (anyOpenDrawer) {
    notifySketchUp('runModuleAnimation', {
      action: 'update_open',
      doorAngleDeg: state.animDoorAngleDeg,
      drawerDistMm: state.animDrawerDistMm
    });
  }
}

function scanSketchUpAnimations() {
  const sent = notifySketchUp('scanModulesForAnimations', {
    doorAngleDeg: state.animDoorAngleDeg,
    drawerDistMm: state.animDrawerDistMm
  });
  if (!sent && (!state.animDetectedModules || !state.animDetectedModules.length)) {
    // Vista previa de demostración cuando se ejecuta fuera de SketchUp
    state.animDetectedModules = [
      {
        moduleEntityId: 1001,
        moduleTitle: 'Módulo Combinado Bajo / Alacena (Demo)',
        dimsLabel: '800 × 580 × 720 mm',
        parts: [
          {
            id: 'p_1',
            name: 'Puerta Izquierda',
            kind: 'door',
            openMode: 'left',
            dimsLabel: '396 × 18 × 540 mm',
            contextLabel: 'Puerta Batiente Izquierda ↰',
            contextReason: 'Ubicada en el sector izquierdo del frente (X: 2–398 mm) → Bisagra en lateral izquierdo (X=2 mm)',
            angleDeg: state.animDoorAngleDeg,
            distMm: state.animDrawerDistMm,
            isOpen: false
          },
          {
            id: 'p_2',
            name: 'Puerta Derecha',
            kind: 'door',
            openMode: 'right',
            dimsLabel: '396 × 18 × 540 mm',
            contextLabel: 'Puerta Batiente Derecha ↱',
            contextReason: 'Ubicada en el sector derecho del frente (X: 402–798 mm) → Bisagra en lateral derecho (X=798 mm)',
            angleDeg: state.animDoorAngleDeg,
            distMm: state.animDrawerDistMm,
            isOpen: false
          },
          {
            id: 'p_3',
            name: 'Cajón Superior (6 piezas sincronizadas)',
            kind: 'drawer',
            openMode: 'drawer',
            dimsLabel: '796 × 520 × 160 mm',
            contextLabel: 'Cajón Extraíble Frontal ⇥',
            contextReason: 'Frente + laterales, fondo y trasera de cajón detectados en el vano superior → Extracción lineal frontal',
            angleDeg: state.animDoorAngleDeg,
            distMm: state.animDrawerDistMm,
            isOpen: false
          },
          {
            id: 'p_4',
            name: 'Puerta Alacena Superior',
            kind: 'door',
            openMode: 'up',
            dimsLabel: '796 × 18 × 356 mm',
            contextLabel: 'Puerta Abatible hacia Arriba ↑',
            contextReason: 'Frente horizontal de ancho completo en sector superior → Bisagra horizontal en borde superior',
            angleDeg: state.animDoorAngleDeg,
            distMm: state.animDrawerDistMm,
            isOpen: false
          }
        ]
      }
    ];
    renderAnimationsDetectedList();
  }
}

window.onRubyAnimationsScanned = function(payload) {
  if (payload && Array.isArray(payload.modules)) {
    state.animDetectedModules = payload.modules;
  } else if (Array.isArray(payload)) {
    state.animDetectedModules = payload;
  } else {
    state.animDetectedModules = [];
  }
  renderAnimationsDetectedList();
};

function formatAnimModeBadgeText(openMode) {
  switch (openMode) {
    case 'left':   return 'Puerta • Abre a la Izquierda ↰';
    case 'right':  return 'Puerta • Abre a la Derecha ↱';
    case 'up':     return 'Puerta • Abatible hacia Arriba ↑';
    case 'down':   return 'Puerta • Abatible hacia Abajo ↓';
    case 'drawer': return 'Cajón • Extracción Frontal ⇥';
    default:       return 'Puerta • Abre a la Izquierda ↰';
  }
}

function onChangePartAnimMode(modEntId, partId, newMode) {
  const mod = (state.animDetectedModules || []).find(m => String(m.moduleEntityId) === String(modEntId));
  if (!mod) return;
  const part = (mod.parts || []).find(p => String(p.id) === String(partId));
  if (!part) return;

  part.openMode = newMode;
  part.kind = (newMode === 'drawer') ? 'drawer' : 'door';
  part.contextLabel = formatAnimModeBadgeText(newMode);
  renderAnimationsDetectedList();

  notifySketchUp('updateAnimationPartConfig', {
    moduleEntityId: mod.moduleEntityId,
    partId: part.id,
    openMode: newMode,
    doorAngleDeg: part.angleDeg || state.animDoorAngleDeg,
    drawerDistMm: part.distMm ?? state.animDrawerDistMm
  });
}

function onChangePartDrawerMm(modEntId, partId, rawVal) {
  let num = parseFloat(rawVal);
  if (isNaN(num)) num = 0;
  num = Math.max(0, Math.min(1500, Math.round(num)));

  const mod = (state.animDetectedModules || []).find(m => String(m.moduleEntityId) === String(modEntId));
  if (!mod) return;
  const part = (mod.parts || []).find(p => String(p.id) === String(partId));
  if (!part) return;

  part.distMm = num;
  notifySketchUp('updateAnimationPartConfig', {
    moduleEntityId: mod.moduleEntityId,
    partId: part.id,
    openMode: part.openMode,
    doorAngleDeg: part.angleDeg || state.animDoorAngleDeg,
    drawerDistMm: num
  });
  if (part.isOpen) {
    notifySketchUp('runModuleAnimation', {
      action: 'open',
      moduleEntityId: mod.moduleEntityId,
      partId: part.id,
      openMode: part.openMode,
      doorAngleDeg: part.angleDeg || state.animDoorAngleDeg,
      drawerDistMm: num
    });
  }
}

function triggerModuleAnimation(action, modEntId = null, partId = null) {
  const payload = {
    action: action,
    doorAngleDeg: state.animDoorAngleDeg,
    drawerDistMm: state.animDrawerDistMm,
    moduleEntityId: modEntId,
    partId: partId
  };

  if (modEntId !== null && partId !== null) {
    const mod = (state.animDetectedModules || []).find(m => String(m.moduleEntityId) === String(modEntId));
    const part = mod ? (mod.parts || []).find(p => String(p.id) === String(partId)) : null;
    if (part) {
      payload.openMode = part.openMode;
      payload.doorAngleDeg = part.angleDeg || state.animDoorAngleDeg;
      payload.drawerDistMm = part.distMm ?? state.animDrawerDistMm;
    }
  }

  const sent = notifySketchUp('runModuleAnimation', payload);
  if (!sent) {
    // Actualizar estado local en modo demo
    (state.animDetectedModules || []).forEach(m => {
      if (modEntId !== null && String(m.moduleEntityId) !== String(modEntId)) return;
      (m.parts || []).forEach(p => {
        if (partId !== null && String(p.id) !== String(partId)) return;
        if (action === 'open') p.isOpen = true;
        else if (action === 'close') p.isOpen = false;
        else p.isOpen = !p.isOpen;
      });
    });
    renderAnimationsDetectedList();
    showToast(`Animación ejecutada (Puertas: ${state.animDoorAngleDeg}°, Cajones: ${state.animDrawerDistMm} mm).`);
  }
}

function renderAnimationsDetectedList() {
  const stack = document.getElementById('animDetectedModulesStack');
  if (!stack) return;

  const mods = state.animDetectedModules || [];
  if (!mods.length) {
    stack.innerHTML = `
      <div class="anim-empty-state">
        <p style="font-weight:700; color:#1E242B; margin:0 0 4px 0;">No se detectaron puertas ni cajones en la selección actual</p>
        <p style="margin:0;">Selecciona o inserta un módulo con puertas o cajones en SketchUp y haz clic en <b>Reconocer Puertas y Cajones</b>.</p>
      </div>
    `;
    return;
  }

  stack.innerHTML = mods.map(mod => {
    const partsHtml = (mod.parts || []).map(part => {
      const isDrawer = part.openMode === 'drawer' || part.kind === 'drawer';
      const badgeClass = isDrawer ? 'anim-context-badge is-drawer' : 'anim-context-badge';
      const badgeText = part.contextLabel || formatAnimModeBadgeText(part.openMode);
      const paramControlHtml = isDrawer
        ? `
          <div class="anim-blank-field-wrap" title="Distancia de apertura de este cajón en milímetros">
            <input type="number" class="anim-blank-mm-input anim-row-drawer-mm-input" min="0" max="1500" step="10" value="${part.distMm ?? state.animDrawerDistMm}" oninput="onChangePartDrawerMm('${mod.moduleEntityId}', '${part.id}', this.value)" />
            <span class="anim-unit-suffix">mm</span>
          </div>
        `
        : `
          <span class="anim-param-value-badge" title="Ángulo de apertura (90° a 135°)">${part.angleDeg || state.animDoorAngleDeg}°</span>
        `;

      const toggleBtnText = part.isOpen ? '◀ Cerrar' : '▶ Abrir';
      const toggleBtnClass = part.isOpen ? 'ens-pill-btn' : 'ens-pill-btn active';

      return `
        <div class="anim-part-row">
          <div class="anim-part-name-col">
            <span class="anim-part-name" title="${part.name}">${part.name}</span>
            <span class="anim-part-subdims">${part.dimsLabel || ''}</span>
          </div>

          <div class="anim-context-col">
            <span class="${badgeClass}">${badgeText}</span>
            <span class="anim-context-reason">${part.contextReason || ''}</span>
          </div>

          <div>
            <select class="anim-dir-select" onchange="onChangePartAnimMode('${mod.moduleEntityId}', '${part.id}', this.value)" title="Dirección de apertura reconocida por contexto (puedes cambiarla manualmente)">
              <option value="left" ${part.openMode === 'left' ? 'selected' : ''}>Puerta • Abre Izquierda ↰</option>
              <option value="right" ${part.openMode === 'right' ? 'selected' : ''}>Puerta • Abre Derecha ↱</option>
              <option value="up" ${part.openMode === 'up' ? 'selected' : ''}>Puerta • Abatible Arriba ↑</option>
              <option value="down" ${part.openMode === 'down' ? 'selected' : ''}>Puerta • Abatible Abajo ↓</option>
              <option value="drawer" ${part.openMode === 'drawer' ? 'selected' : ''}>Cajón • Extraíble (mm) ⇥</option>
            </select>
          </div>

          <div class="anim-row-param-col">
            ${paramControlHtml}
          </div>

          <div style="display:flex; gap:5px; justify-content:flex-end;">
            <button type="button" class="${toggleBtnClass}" onclick="triggerModuleAnimation('toggle', '${mod.moduleEntityId}', '${part.id}')">
              <span>${toggleBtnText}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="anim-module-card">
        <div class="anim-mod-header">
          <div>
            <span class="anim-mod-title">${mod.moduleTitle}</span>
            <span class="anim-mod-dims">${mod.dimsLabel || ''}</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button type="button" class="ens-pill-btn active" onclick="triggerModuleAnimation('open', '${mod.moduleEntityId}', null)">
              <span>▶ Abrir módulo</span>
            </button>
            <button type="button" class="ens-pill-btn" onclick="triggerModuleAnimation('close', '${mod.moduleEntityId}', null)">
              <span>◀ Cerrar módulo</span>
            </button>
          </div>
        </div>
        <div class="anim-parts-table">
          ${partsHtml}
        </div>
      </div>
    `;
  }).join('');
}

/* ============================================================================
   OPCIÓN "EXPLOTAR MODELO" CON COTAS NECESARIAS EN PESTAÑA DESPIECE
   ============================================================================ */
function toggleExplodeModel() {
  state.explodeModelActive = !state.explodeModelActive;
  const sent = notifySketchUp('toggleExplodeModel', { active: state.explodeModelActive });
  if (!sent) {
    window.onRubyExplodeStateChanged(state.explodeModelActive);
  }
}

window.onRubyExplodeStateChanged = function(active) {
  state.explodeModelActive = !!active;
  const btn = document.getElementById('explodeModelBtn');
  if (btn) btn.classList.toggle('active', state.explodeModelActive);

  const card = document.getElementById('explodePreviewCard');
  if (card) {
    card.style.display = state.explodeModelActive ? 'block' : 'none';
    if (state.explodeModelActive) {
      renderExplodePreviewCanvas();
      showToast('Explotar modelo ACTIVO: Placas separadas entre sí con sus cotas principales.');
    } else {
      showToast('Explotar modelo desactivado: Módulo restaurado.');
    }
  }
};

function renderExplodePreviewCanvas() {
  const canvas = document.getElementById('explodeModelCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  // Tomar medidas del primer módulo escaneado o valores estándar (800×580×720 mm, espesor 18 mm)
  const grp = despieceGroups[0];
  const mw = 800, md = 560, mh = 720, t = state.defaultThickness || 18;
  const exp = 115; // separación de explosión

  // Proyección perspectiva con FOV 35° como SketchUp
  const yaw = -32 * Math.PI / 180;
  const pitch = 20 * Math.PI / 180;
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch);
  const fovRad = 35 * Math.PI / 180;
  const focal = (H / 2) / Math.tan(fovRad / 2);
  const camDist = 2950;

  function proj35(wx, wy, wz) {
    const x1 = wx * cosY - wy * sinY;
    const y1 = wx * sinY + wy * cosY;
    const z1 = wz;
    const cx = x1;
    const cy = z1 * cosP + y1 * sinP;
    const cz = camDist + (y1 * cosP - z1 * sinP);
    const s = focal / Math.max(200, cz);
    return { sx: W * 0.48 + cx * s, sy: H * 0.54 - cy * s, cz };
  }

  const explodedBoards = [
    // Lateral Izquierdo (desplazado -X)
    { x: -mw/2 - exp, y: -md/2, z: -mh/2, dx: t, dy: md, dz: mh, label: 'Lateral Izq.' },
    // Lateral Derecho (desplazado +X)
    { x: mw/2 - t + exp, y: -md/2, z: -mh/2, dx: t, dy: md, dz: mh, label: 'Lateral Der.' },
    // Base Inferior (desplazada -Z)
    { x: -mw/2 + t, y: -md/2, z: -mh/2 - exp*0.8, dx: mw - 2*t, dy: md, dz: t, label: 'Base Inferior' },
    // Techo / Amarre (desplazado +Z)
    { x: -mw/2 + t, y: -md/2, z: mh/2 - t + exp*0.8, dx: mw - 2*t, dy: md, dz: t, label: 'Techo Superior' },
    // Estante Central
    { x: -mw/2 + t, y: -md/2 + 15, z: -t/2, dx: mw - 2*t, dy: md - 30, dz: t, label: 'Estante Interior' },
    // Puertas frontales (desplazadas hacia adelante -Y)
    { x: -mw/2 + 2 - 25, y: -md/2 - t - exp*1.15, z: -mh/2 + 2, dx: mw/2 - 4, dy: t, dz: mh - 4, label: 'Puerta Izq.' },
    { x: 2 + 25, y: -md/2 - t - exp*1.15, z: -mh/2 + 2, dx: mw/2 - 4, dy: t, dz: mh - 4, label: 'Puerta Der.' }
  ];

  const faces = [];
  explodedBoards.forEach(b => {
    const x0 = b.x, x1 = b.x + b.dx, y0 = b.y, y1 = b.y + b.dy, z0 = b.z, z1 = b.z + b.dz;
    const v = [
      proj35(x0, y0, z0), proj35(x1, y0, z0), proj35(x1, y1, z0), proj35(x0, y1, z0),
      proj35(x0, y0, z1), proj35(x1, y0, z1), proj35(x1, y1, z1), proj35(x0, y1, z1)
    ];
    const fDefs = [
      { idxs: [0, 1, 5, 4], shade: 0.98 },
      { idxs: [2, 3, 7, 6], shade: 0.88 },
      { idxs: [4, 5, 6, 7], shade: 1.00 },
      { idxs: [0, 3, 2, 1], shade: 0.84 },
      { idxs: [0, 4, 7, 3], shade: 0.94 },
      { idxs: [1, 2, 6, 5], shade: 0.91 }
    ];
    fDefs.forEach(fd => {
      const pts = fd.idxs.map(i => v[i]);
      const avgZ = (pts[0].cz + pts[1].cz + pts[2].cz + pts[3].cz) / 4;
      faces.push({ pts, avgZ, shade: fd.shade });
    });
  });

  faces.sort((a, b) => b.avgZ - a.avgZ);
  faces.forEach(f => {
    ctx.beginPath();
    ctx.moveTo(f.pts[0].sx, f.pts[0].sy);
    ctx.lineTo(f.pts[1].sx, f.pts[1].sy);
    ctx.lineTo(f.pts[2].sx, f.pts[2].sy);
    ctx.lineTo(f.pts[3].sx, f.pts[3].sy);
    ctx.closePath();
    const val = Math.round(252 * f.shade);
    ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.0;
    ctx.stroke();
  });

  // Dibujar cotas esenciales de armado (Ancho Total, Alto Total, Profundidad y Luz Interior)
  function drawCota(pA, pB, text, color = '#FFC576') {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(pA.sx, pA.sy);
    ctx.lineTo(pB.sx, pB.sy);
    ctx.stroke();
    ctx.setLineDash([]);

    [pA, pB].forEach(pt => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(pt.sx, pt.sy, 3.2, 0, Math.PI * 2);
      ctx.fill();
    });

    const mx = (pA.sx + pB.sx) / 2;
    const my = (pA.sy + pB.sy) / 2;
    ctx.font = '700 10px Montserrat, sans-serif';
    const tw = ctx.measureText(text).width + 12;
    ctx.fillStyle = '#FFC576';
    ctx.strokeStyle = '#FFC576';
    ctx.lineWidth = 1.2;
    ctx.fillRect(mx - tw / 2, my - 9, tw, 18);
    ctx.strokeRect(mx - tw / 2, my - 9, tw, 18);
    ctx.fillStyle = '#1E242B';
    ctx.textAlign = 'center';
    ctx.fillText(text, mx, my + 3.5);
    ctx.restore();
  }

  // 1. Cota Ancho Total (800 mm)
  drawCota(proj35(-mw/2 - exp, -md/2, mh/2 + exp + 55), proj35(mw/2 + exp, -md/2, mh/2 + exp + 55), `Ancho: ${mw} mm`);
  // 2. Cota Alto Total (720 mm)
  drawCota(proj35(-mw/2 - exp - 75, -md/2, -mh/2), proj35(-mw/2 - exp - 75, -md/2, mh/2), `Alto: ${mh} mm`);
  // 3. Cota Profundidad (560 mm)
  drawCota(proj35(mw/2 + exp + 65, -md/2, -mh/2), proj35(mw/2 + exp + 65, md/2, -mh/2), `Prof.: ${md} mm`);
  // 4. Cota Luz Interior (764 mm)
  drawCota(proj35(-mw/2 + t, 0, 25), proj35(mw/2 - t, 0, 25), `Interior: ${mw - 2*t} mm (${t}mm esp.)`, '#1D4ED8');
}

/* ============================================================================
   PESTAÑA DESPIECE Y CÁLCULO DE TAPACANTOS 1 (ROJO) Y 2 (AZUL)
   ============================================================================ */
function normalizeEdgeVal(v) {
  if (v === 2) return 2;
  if (v === 1 || v === true) return 1;
  return 0;
}

function calcPartEdgeBandMeters(part) {
  const l = parseFloat(part.length) || 0;
  const w = parseFloat(part.width) || 0;
  const q = parseInt(part.qty) || 1;
  const rawE = part.edges || [0, 0, 0, 0];
  const e = rawE.map(normalizeEdgeVal);
  const dims = [l, l, w, w];

  let mmTc1 = 0;
  let mmTc2 = 0;
  e.forEach((val, idx) => {
    if (val === 1) mmTc1 += dims[idx];
    else if (val === 2) mmTc2 += dims[idx];
  });

  const mmTotal = mmTc1 + mmTc2;
  return {
    e,
    mmPerPiece: mmTotal,
    mlPerPiece: mmTotal / 1000.0,
    mlTotal: (mmTotal * q) / 1000.0,
    mlTc1: (mmTc1 * q) / 1000.0,
    mlTc2: (mmTc2 * q) / 1000.0
  };
}

function toggleDespieceModuleAccordion(gIdx) {
  if (!despieceGroups[gIdx]) return;
  despieceGroups[gIdx].collapsed = !despieceGroups[gIdx].collapsed;
  renderDespieceAll();
}

function renderDespieceAll() {
  const stack = document.getElementById('despieceModulesStack');
  const statsGrid = document.getElementById('despieceStatsGrid');
  if (!stack || !statsGrid) return;

  let grandPieces = 0;
  let grandAreaM2 = 0;
  let grandTapacanto1Ml = 0;
  let grandTapacanto2Ml = 0;

  const melaminasOnly = materialsList.filter(m => m.filterCat !== 'Herrajes');

  if (despieceGroups.length === 0) {
    const hwBar = document.getElementById('despieceHardwareBar');
    if (hwBar) hwBar.style.display = 'none';
    stack.innerHTML = `
      <div class="despiece-empty-box">
        Aún no hay módulos escaneados en el despiece. Selecciona los módulos en tu escena y presiona <b>«Escanear módulo»</b>.
      </div>
    `;
    statsGrid.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">Módulos Escaneados</span>
        <span class="stat-value">0 módulos (0 pzs)</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Superficie Total</span>
        <span class="stat-value">0.00 m²</span>
      </div>
      <div class="stat-card" style="border-color:#FECACA;background:#FFF5F5;">
        <span class="stat-label" style="color:#B91C1C;">Tapacanto #1 (Rojo)</span>
        <span class="stat-value" style="color:#BE123C;">0.00 ml</span>
      </div>
      <div class="stat-card" style="border-color:#BFDBFE;background:#EFF6FF;">
        <span class="stat-label" style="color:#1D4ED8;">Tapacanto #2 (Azul)</span>
        <span class="stat-value" style="color:#1E40AF;">0.00 ml</span>
      </div>
    `;
    if (state.cutOptimizerActive && typeof renderCutOptimizerCanvas === 'function') {
      renderCutOptimizerCanvas();
    }
    return;
  }

  stack.innerHTML = despieceGroups.map((grp, gIdx) => {
    const matObj = melaminasOnly.find(m => m.id === grp.materialId) || melaminasOnly[0];
    const tc1Mat = melaminasOnly.find(m => m.id === (grp.tapacanto1MatId || grp.materialId)) || matObj;
    const tc2Mat = melaminasOnly.find(m => m.id === (grp.tapacanto2MatId || grp.materialId)) || matObj;
    const tc1Thick = grp.tapacanto1Thick || '0.45';
    const tc2Thick = grp.tapacanto2Thick || '2';

    let modPieces = 0;
    let modAreaM2 = 0;
    let modTc1Ml = 0;
    let modTc2Ml = 0;

    const rowsHtml = grp.parts.map((part, pIdx) => {
      const q = parseInt(part.qty) || 1;
      const l = parseFloat(part.length) || 0;
      const w = parseFloat(part.width) || 0;
      const eb = calcPartEdgeBandMeters(part);

      modPieces += q;
      modAreaM2 += (l * w * q) / 1000000.0;
      modTc1Ml += eb.mlTc1;
      modTc2Ml += eb.mlTc2;

      const e = eb.e;
      const rectClasses = [
        'tc-table-cell-inner',
        e[0] ? `eb-top-${e[0]}` : '',
        e[1] ? `eb-bottom-${e[1]}` : '',
        e[2] ? `eb-left-${e[2]}` : '',
        e[3] ? `eb-right-${e[3]}` : ''
      ].filter(Boolean).join(' ');

      return `
        <tr>
          <td><b>${pIdx + 1}</b></td>
          <td style="width:90px;">
            <input type="number" min="1" class="dp-cell-input" value="${q}"
                   oninput="despieceGroups[${gIdx}].parts[${pIdx}].qty=parseInt(this.value)||1; renderDespieceAll();" />
          </td>
          <td style="width:140px;">
            <input type="number" class="dp-cell-input" value="${l}"
                   oninput="despieceGroups[${gIdx}].parts[${pIdx}].length=parseFloat(this.value)||0; renderDespieceAll();" />
          </td>
          <td style="width:32px;">
            <button type="button" class="dp-swap-btn" onclick="swapPartDims(${gIdx}, ${pIdx})" title="Intercambiar Largo y Ancho">&rlarr;</button>
          </td>
          <td style="width:140px;">
            <input type="number" class="dp-cell-input" value="${w}"
                   oninput="despieceGroups[${gIdx}].parts[${pIdx}].width=parseFloat(this.value)||0; renderDespieceAll();" />
          </td>
          <td>
            <input type="text" class="dp-cell-input" value="${part.desc || ''}" placeholder="Ej: Puerta Frontal"
                   oninput="despieceGroups[${gIdx}].parts[${pIdx}].desc=this.value" />
          </td>
          <td style="width:54px;">
            <input type="checkbox" ${part.rotate !== false ? 'checked' : ''}
                   onchange="despieceGroups[${gIdx}].parts[${pIdx}].rotate=this.checked" />
          </td>
          <td style="width:90px;">
            <div class="tc-table-cell-box" onclick="openXrayTapacantoModal(${gIdx}, ${pIdx}, 'piece')" title="Haz clic en el dibujo de la pieza para definir los lados que llevan tapacantos (${eb.mlTotal.toFixed(2)} ml)">
              <div class="${rectClasses}"></div>
            </div>
          </td>
          <td style="width:42px;">
            <button type="button" class="dp-trash-btn" onclick="removePartFromGroup(${gIdx}, ${pIdx})" title="Eliminar fila">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>
              </svg>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    grandPieces += modPieces;
    grandAreaM2 += modAreaM2;
    grandTapacanto1Ml += modTc1Ml;
    grandTapacanto2Ml += modTc2Ml;

    const modBoards = Math.max(0.1, (modAreaM2 * 1.12) / (2.6 * 1.83)).toFixed(2);
    const thickMm = grp.parts[0]?.thick || state.defaultThickness || 18;

    const buildMatOpts = (selectedId) => melaminasOnly.map(m =>
      `<option value="${m.id}" ${m.id === selectedId ? 'selected' : ''}>${m.code} ${m.title.toUpperCase()} (${m.brand})</option>`
    ).join('');

    return `
      <div class="module-cutlist-card ${grp.collapsed ? 'collapsed' : ''}">
        <div class="module-cutlist-titlebar">
          <div class="mod-group-name-wrap">
            <button type="button" class="mod-collapse-btn" onclick="toggleDespieceModuleAccordion(${gIdx})" title="Abrir / Cerrar pestaña de MÓDULO ${gIdx + 1}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <span class="mod-badge-num" onclick="toggleDespieceModuleAccordion(${gIdx})" style="cursor:pointer;">MÓDULO ${gIdx + 1}</span>
            <input type="text" class="mod-group-title-input" value="${grp.moduleTitle}"
                   oninput="despieceGroups[${gIdx}].moduleTitle=this.value" />
          </div>
          <div class="mod-group-summary-pills">
            <span class="mod-stat-pill"><b>${modPieces}</b> piezas</span>
            <span class="mod-stat-pill"><b>${modAreaM2.toFixed(2)} m²</b> (${modBoards} placas)</span>
            <span class="mod-stat-pill red-pill">TC1 Rojo: <b>${modTc1Ml.toFixed(2)} ml</b></span>
            <span class="mod-stat-pill" style="background:#EFF6FF;border-color:#BFDBFE;color:#1D4ED8;font-weight:600;">TC2 Azul: <b>${modTc2Ml.toFixed(2)} ml</b></span>

            <button type="button" class="ens-pill-btn" onclick="addPartToGroup(${gIdx})">+ Fila</button>
            <button type="button" class="dp-trash-btn" onclick="removeModuleGroup(${gIdx})" title="Eliminar módulo del listado">&times;</button>
          </div>
        </div>

        <div class="module-collapsible-body">
          <div class="module-mat-band-row">
            <div class="mat-info-box">
              <div class="mat-box-tag">Material</div>
              <img src="${matObj.img}" class="mat-box-swatch" alt="${matObj.title}" />
              <div class="mat-box-details">
                <select class="mat-box-select" onchange="onChangeGroupMaterial(${gIdx}, this.value)">
                  ${buildMatOpts(matObj.id)}
                </select>
                <div class="mat-box-sub">2600 × 1830 × ${thickMm}mm &nbsp;(Refilada: 2590 × 1820mm)</div>
              </div>
            </div>

            <div class="mat-info-box tc-only-box tc1-only-box" onclick="activateSketchUpTapacantoPointer(1)" title="Tapacanto #1 (Rojo)">
              <span class="tc-only-box-label tc1-red-text">Tapacanto #1 (Rojo)</span>
            </div>

            <div class="mat-info-box tc-only-box tc2-only-box" onclick="activateSketchUpTapacantoPointer(2)" title="Tapacanto #2 (Azul)">
              <span class="tc-only-box-label tc2-blue-text">Tapacanto #2 (Azul)</span>
            </div>
          </div>

          <table class="despiece-table">
            <thead>
              <tr>
                <th style="width:42px;">Ítem</th>
                <th>Cantidad</th>
                <th>Largo (mm)</th>
                <th></th>
                <th>Ancho (mm)</th>
                <th>Descripción</th>
                <th>Rotar</th>
                <th>Tapacanto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join('');

  const totalBoards = grandAreaM2 > 0 ? Math.max(1, Math.ceil((grandAreaM2 * 1.12) / (2.6 * 1.83))) : 0;
  statsGrid.innerHTML = `
    <div class="stat-card">
      <span class="stat-label">Módulos Escaneados</span>
      <span class="stat-value">${despieceGroups.length} módulos (${grandPieces} pzs)</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">Superficie Total</span>
      <span class="stat-value">${grandAreaM2.toFixed(2)} m² (${totalBoards} placas)</span>
    </div>
    <div class="stat-card" style="border-color:#FECACA;background:#FFF5F5;">
      <span class="stat-label" style="color:#B91C1C;">Tapacanto #1 (Rojo)</span>
      <span class="stat-value" style="color:#BE123C;">${grandTapacanto1Ml.toFixed(2)} ml</span>
    </div>
    <div class="stat-card" style="border-color:#BFDBFE;background:#EFF6FF;">
      <span class="stat-label" style="color:#1D4ED8;">Tapacanto #2 (Azul)</span>
      <span class="stat-value" style="color:#1E40AF;">${grandTapacanto2Ml.toFixed(2)} ml</span>
    </div>
  `;

  // Calcular Herrajes Sugeridos según puertas, cajones, estantes y placas estructurales
  const hw = calculateSuggestedHardware();
  const hwBar = document.getElementById('despieceHardwareBar');
  if (hwBar) {
    hwBar.style.display = 'flex';
    hwBar.innerHTML = `
      <span class="hw-bar-title">🔩 Herrajes e Insumos Estimados:</span>
      <div class="hw-pills-wrap">
        <span class="hw-item-pill">Bisagras Cazoleta 35mm: <b>${hw.bisagras} u.</b></span>
        <span class="hw-item-pill">Correderas Telescópicas: <b>${hw.correderasPares} par(es)</b></span>
        <span class="hw-item-pill">Soportes Estante: <b>${hw.soportesEstante} u.</b></span>
        <span class="hw-item-pill">Tornillos / Minifix 4×50: <b>${hw.tornillos} u.</b></span>
      </div>
    `;
  }

  if (state.cutOptimizerActive && typeof renderCutOptimizerCanvas === 'function') {
    renderCutOptimizerCanvas();
  }
}

function calculateSuggestedHardware() {
  let bisagras = 0;
  let correderasPares = 0;
  let soportesEstante = 0;
  let tornillos = 0;

  despieceGroups.forEach(grp => {
    (grp.parts || []).forEach(p => {
      const q = parseInt(p.qty) || 1;
      const maxDim = Math.max(parseFloat(p.length) || 0, parseFloat(p.width) || 0);
      const dLow = (p.desc || '').toLowerCase();
      if (dLow.includes('puerta') || dLow.includes('hoja elevable')) {
        const perDoor = maxDim > 1600 ? 4 : (maxDim > 920 ? 3 : 2);
        bisagras += perDoor * q;
      } else if (dLow.includes('frente caj') || dLow.includes('frente de caj')) {
        correderasPares += 1 * q;
      } else if (dLow.includes('estante') || dLow.includes('repisa')) {
        soportesEstante += 4 * q;
      } else {
        tornillos += 4 * q;
      }
    });
  });

  return { bisagras, correderasPares, soportesEstante, tornillos };
}

function activateSketchUpTapacantoPointer(tcNum) {
  xrayState.activeBrush = tcNum === 2 ? 2 : 1;
  const sent = notifySketchUp('activateTapacantoPointerTool', String(xrayState.activeBrush));
  const label = xrayState.activeBrush === 2 ? 'Tapacanto 2 (Azul)' : 'Tapacanto 1 (Rojo)';
  if (sent) {
    showToast(`Puntero ${label} activo: Haz clic en los espesores para marcar el canto en el despiece (sin alterar el color 3D en SketchUp).`);
  } else {
    showToast(`Indicador ${label} seleccionado (control visual para maderera; no altera el color del modelo en SketchUp).`);
  }
}

function onChangeGroupMaterial(gIdx, matId) {
  if (despieceGroups[gIdx]) {
    despieceGroups[gIdx].materialId = matId;
    renderDespieceAll();
  }
}

function onChangeGroupTapacanto(gIdx, tcNum, field, val) {
  const grp = despieceGroups[gIdx];
  if (!grp) return;
  if (tcNum === 1) {
    if (field === 'mat') grp.tapacanto1MatId = val;
    if (field === 'thick') grp.tapacanto1Thick = val;
  } else {
    if (field === 'mat') grp.tapacanto2MatId = val;
    if (field === 'thick') grp.tapacanto2Thick = val;
  }
  renderDespieceAll();
}

function swapPartDims(gIdx, pIdx) {
  const p = despieceGroups[gIdx]?.parts[pIdx];
  if (!p) return;
  const tmp = p.length;
  p.length = p.width;
  p.width = tmp;
  if (Array.isArray(p.edges) && p.edges.length === 4) {
    p.edges = [p.edges[2], p.edges[3], p.edges[0], p.edges[1]];
  }
  renderDespieceAll();
}

function addPartToGroup(gIdx) {
  if (!despieceGroups[gIdx]) return;
  despieceGroups[gIdx].parts.push({
    qty: 1,
    length: 600,
    width: 400,
    thick: state.defaultThickness || 18,
    desc: 'Nueva Pieza',
    rotate: true,
    edges: [0, 0, 0, 0]
  });
  renderDespieceAll();
}

function removePartFromGroup(gIdx, pIdx) {
  if (!despieceGroups[gIdx]) return;
  despieceGroups[gIdx].parts.splice(pIdx, 1);
  renderDespieceAll();
}

function removeModuleGroup(gIdx) {
  despieceGroups.splice(gIdx, 1);
  renderDespieceAll();
}

function triggerScanSketchUpCutlist() {
  const sent = notifySketchUp('scanModelCutlist', '');
  if (!sent) {
    const simulatedScanned = [
      {
        moduleId: 'scan_1',
        moduleEntityId: 1001,
        moduleTitle: 'Módulo Bajo 2 Puertas + Cajón 80cm',
        modType: 'mod_10',
        material: 'H3170 Roble Kendal natural',
        parts: [
          { qty: 1, length: 720, width: 560, thick: 18, desc: 'Lateral Izquierdo', rotate: true, edges: [0, 0, 0, 0], role: 'side_left', boxMm: [0, 20, 0, 18, 560, 720] },
          { qty: 1, length: 720, width: 560, thick: 18, desc: 'Lateral Derecho', rotate: true, edges: [0, 0, 0, 0], role: 'side_right', boxMm: [782, 20, 0, 18, 560, 720] },
          { qty: 1, length: 764, width: 560, thick: 18, desc: 'Piso / Base Inferior', rotate: true, edges: [0, 0, 0, 0], role: 'base', boxMm: [18, 20, 0, 764, 560, 18] },
          { qty: 1, length: 764, width: 530, thick: 18, desc: 'Estante Interior', rotate: true, edges: [0, 0, 0, 0], role: 'shelf', boxMm: [18, 35, 280, 764, 530, 18] },
          { qty: 1, length: 796, width: 156, thick: 18, desc: 'Frente de Cajón Superior', rotate: false, edges: [0, 0, 0, 0], role: 'drawer_front', boxMm: [2, 0, 562, 796, 18, 156] },
          { qty: 1, length: 556, width: 396, thick: 18, desc: 'Puerta Batiente Izquierda', rotate: true, edges: [0, 0, 0, 0], role: 'door_left', boxMm: [2, 0, 2, 396, 18, 556] },
          { qty: 1, length: 556, width: 396, thick: 18, desc: 'Puerta Batiente Derecha', rotate: true, edges: [0, 0, 0, 0], role: 'door_right', boxMm: [402, 0, 2, 396, 18, 556] }
        ]
      },
      {
        moduleId: 'scan_2',
        moduleEntityId: 1002,
        moduleTitle: 'Alacena Superior 2 Puertas y Divisor 90cm',
        modType: 'mod_03',
        material: 'H1180 Roble Halifax natural',
        parts: [
          { qty: 1, length: 600, width: 300, thick: 18, desc: 'Lateral Izquierdo Alacena', rotate: true, edges: [0, 0, 0, 0], role: 'side_left', boxMm: [0, 20, 0, 18, 300, 600] },
          { qty: 1, length: 600, width: 300, thick: 18, desc: 'Lateral Derecho Alacena', rotate: true, edges: [0, 0, 0, 0], role: 'side_right', boxMm: [882, 20, 0, 18, 300, 600] },
          { qty: 1, length: 864, width: 300, thick: 18, desc: 'Base Inferior Alacena', rotate: true, edges: [0, 0, 0, 0], role: 'base', boxMm: [18, 20, 0, 864, 300, 18] },
          { qty: 1, length: 864, width: 300, thick: 18, desc: 'Techo Superior Alacena', rotate: true, edges: [0, 0, 0, 0], role: 'top', boxMm: [18, 20, 582, 864, 300, 18] },
          { qty: 1, length: 564, width: 280, thick: 18, desc: 'Divisor Central Vertical', rotate: true, edges: [0, 0, 0, 0], role: 'divider', boxMm: [441, 30, 18, 18, 280, 564] },
          { qty: 1, length: 596, width: 446, thick: 18, desc: 'Puerta Alacena Izquierda', rotate: true, edges: [0, 0, 0, 0], role: 'door_left', boxMm: [2, 0, 2, 446, 18, 596] },
          { qty: 1, length: 596, width: 446, thick: 18, desc: 'Puerta Alacena Derecha', rotate: true, edges: [0, 0, 0, 0], role: 'door_right', boxMm: [452, 0, 2, 446, 18, 596] }
        ]
      }
    ];
    window.onRubyCutlistScanned(simulatedScanned, true);
  }
}

window.onRubyCutlistScanned = function(scannedGroups, isFullModelScan = false) {
  if (!Array.isArray(scannedGroups) || !scannedGroups.length) {
    showToast('No se encontraron módulos en el modelo o selección de SketchUp.');
    return;
  }
  const melaminasOnly = materialsList.filter(m => m.filterCat !== 'Herrajes');
  const incomingGroups = scannedGroups.map((g, i) => {
    const matchedMat = melaminasOnly.find(m =>
      (g.material || '').toLowerCase().includes(m.code.toLowerCase()) ||
      (g.material || '').toLowerCase().includes(m.title.toLowerCase())
    ) || melaminasOnly[i % melaminasOnly.length];

    // Columna de tapacantos inicialmente vacía ([0, 0, 0, 0]) sin ningún color de tapacanto aplicado
    const normalizedParts = (Array.isArray(g.parts) ? g.parts : []).map(p => ({
      ...p,
      edges: [0, 0, 0, 0]
    }));

    return {
      moduleId: g.moduleId || ('scan_' + Date.now() + '_' + i),
      moduleEntityId: g.moduleEntityId || null,
      moduleTitle: g.moduleTitle || `Módulo Escaneado ${i + 1}`,
      modType: g.modType || 'mod_02',
      materialId: matchedMat.id,
      tapacanto1MatId: matchedMat.id,
      tapacanto1Thick: '0',
      tapacanto2MatId: matchedMat.id,
      tapacanto2Thick: '0',
      collapsed: false,
      parts: normalizedParts
    };
  });

  if (isFullModelScan) {
    despieceGroups = incomingGroups;
  } else {
    // Acumular módulos escaneados sin borrar los anteriores (actualizando si ya existía el mismo moduleEntityId)
    incomingGroups.forEach(inc => {
      const existingIdx = inc.moduleEntityId
        ? despieceGroups.findIndex(d => d.moduleEntityId === inc.moduleEntityId)
        : -1;
      if (existingIdx !== -1) {
        despieceGroups[existingIdx] = inc;
      } else {
        despieceGroups.push(inc);
      }
    });
  }

  renderDespieceAll();
  if (state.explodeModelActive) renderExplodePreviewCanvas();
  showToast(`Despiece actualizado: ${despieceGroups.length} módulo(s) en total listos para producción.`);
};

/* ============================================================================
   VENTANA 2D DE TAPACANTO (MADERERA PINAR / OPTIMIZADOR ONLINE):
   - Esquema 2D idéntico al video:
     * Clic en un lado (Superior, Inferior, Izquierdo, Derecho):
       cicla 0 -> 1 (Rojo) -> 2 (Azul) -> 0 (Sin tapacanto)
     * Clic en una de las 4 esquinas:
       cicla simultáneamente los 2 lados adyacentes a esa esquina
     * Clic en el cuadrado blanco central:
       cicla simultáneamente los 4 lados de la pieza
   - El color Rojo (#FF0000) y Azul (#0000FF) es estrictamente indicativo para
     control visual del usuario y la maderera; NUNCA reemplaza ni altera el
     color o material real del modelo 3D en SketchUp.
   ============================================================================ */
function openXrayTapacantoModal(gIdx, pIdx) {
  xrayState.groupIdx = gIdx;
  xrayState.partIdx = pIdx;
  document.getElementById('xrayTapacantoModal').classList.add('open');
  syncXrayControlsAndRender();
}

function closeXrayTapacantoModal() {
  document.getElementById('xrayTapacantoModal').classList.remove('open');
  renderDespieceAll();
}

function syncPartEdgesToRubyMetadata(part) {
  if (part && part.entityId) {
    notifySketchUp('updatePartEdgesInModel', {
      entityId: part.entityId,
      edges: part.edges
    });
  }
}

// 1 clic -> Tapacanto 1 (Rojo = 1)
// 2 clics -> Tapacanto 2 (Azul = 2)
// 3 clics -> Sin tapacanto (0)
function cyclePieceEdge2D(edgeIdx) {
  const grp = despieceGroups[xrayState.groupIdx];
  const part = grp && grp.parts[xrayState.partIdx];
  if (!part) return;
  if (!Array.isArray(part.edges) || part.edges.length !== 4) {
    part.edges = [0, 0, 0, 0];
  }
  const cur = normalizeEdgeVal(part.edges[edgeIdx]);
  part.edges[edgeIdx] = (cur + 1) % 3;
  syncPartEdgesToRubyMetadata(part);
  syncXrayControlsAndRender();
  renderDespieceAll();
}

// Clic en una de las 4 esquinas: cicla los 2 lados adyacentes a esa esquina
// cornerPos: 0 = Sup-Izq (Izq+Sup), 1 = Sup-Der (Der+Sup), 2 = Inf-Izq (Izq+Inf), 3 = Inf-Der (Der+Inf)
function cycleCornerPieceEdges2D(cornerPos) {
  const grp = despieceGroups[xrayState.groupIdx];
  const part = grp && grp.parts[xrayState.partIdx];
  if (!part) return;
  if (!Array.isArray(part.edges) || part.edges.length !== 4) {
    part.edges = [0, 0, 0, 0];
  }
  const pairs = {
    0: [2, 0], // Izquierdo (2) + Superior (0)
    1: [3, 0], // Derecho (3)   + Superior (0)
    2: [2, 1], // Izquierdo (2) + Inferior (1)
    3: [3, 1]  // Derecho (3)   + Inferior (1)
  };
  const targetIndices = pairs[cornerPos] || [];
  targetIndices.forEach(idx => {
    const cur = normalizeEdgeVal(part.edges[idx]);
    part.edges[idx] = (cur + 1) % 3;
  });
  syncPartEdgesToRubyMetadata(part);
  syncXrayControlsAndRender();
  renderDespieceAll();
}

// Clic en el cuadrado central blanco: cicla los 4 lados a la vez
function cycleAllPieceEdges2D() {
  const grp = despieceGroups[xrayState.groupIdx];
  const part = grp && grp.parts[xrayState.partIdx];
  if (!part) return;
  if (!Array.isArray(part.edges) || part.edges.length !== 4) {
    part.edges = [0, 0, 0, 0];
  }
  part.edges = part.edges.map(v => (normalizeEdgeVal(v) + 1) % 3);
  syncPartEdgesToRubyMetadata(part);
  syncXrayControlsAndRender();
  renderDespieceAll();
}

function toggleActivePieceEdge(edgeIdx) {
  cyclePieceEdge2D(edgeIdx);
}

function syncXrayControlsAndRender() {
  const grp = despieceGroups[xrayState.groupIdx];
  const part = grp && grp.parts[xrayState.partIdx];
  if (!grp || !part) return;

  const e = (part.edges || [0, 0, 0, 0]).map(normalizeEdgeVal);
  const L = parseFloat(part.length) || 0;
  const W = parseFloat(part.width) || 0;

  // Título superior de la ventana ("Tapacanto")
  const titleEl = document.getElementById('xrayModalTitle');
  if (titleEl) {
    titleEl.textContent = 'Tapacanto';
  }

  // Medidas en Tapacanto Superior (Largo) y Tapacanto Derecho (Ancho)
  const dimTopEl = document.getElementById('tc2dDimTop');
  const dimRightEl = document.getElementById('tc2dDimRight');
  if (dimTopEl) dimTopEl.textContent = `${L} mm`;
  if (dimRightEl) dimRightEl.textContent = `${W} mm`;

  // Actualizar bordes Rojos (1) o Azules (2) en el perímetro exterior del esquema 2D
  const boardBox = document.getElementById('tc2dBoardBox');
  if (boardBox) {
    boardBox.className = [
      'tc2d-board-box',
      e[0] ? `top-tc-${e[0]}` : '',
      e[1] ? `bottom-tc-${e[1]}` : '',
      e[2] ? `left-tc-${e[2]}` : '',
      e[3] ? `right-tc-${e[3]}` : ''
    ].filter(Boolean).join(' ');
  }

  const realSizeEl = document.getElementById('tc2dRealSizeVal');
  if (realSizeEl) {
    realSizeEl.textContent = `${L} mm x ${W} mm`;
  }
}

/* ============================================================================
   IMPORTADOR INTERACTIVO DE CATÁLOGOS DE MELAMINA DESDE URL WEB
   ============================================================================ */
function openUrlImportModal() {
  const statusBox = document.getElementById('urlImportStatusBox');
  if (statusBox) {
    statusBox.className = 'url-import-info-box';
    statusBox.innerHTML = '<span>✨ <b>Conversión automática a SketchUp (.SKM):</b> El programa analiza el catálogo de la URL recibida, descarga cada textura, calibra su escala a <b>768 × 1655 mm</b> (igual que <i>Roble Bardolino natural</i>) y crea las tarjetas con el mismo diseño en la pestaña <b>Materiales</b>.</span>';
  }
  const btnTxt = document.getElementById('submitUrlImportBtnText');
  if (btnTxt) btnTxt.textContent = 'Extraer y Cargar Materiales';
  document.getElementById('urlImportModal').classList.add('open');
  setTimeout(() => document.getElementById('importUrlInput')?.focus(), 80);
}

function closeUrlImportModal() {
  document.getElementById('urlImportModal').classList.remove('open');
}

async function pasteUrlFromClipboard() {
  const input = document.getElementById('importUrlInput');
  if (!input) return;
  try {
    if (navigator.clipboard && navigator.clipboard.readText) {
      const text = await navigator.clipboard.readText();
      if (text && text.trim()) {
        input.value = text.trim();
        showToast('URL pegada desde el portapapeles.');
        return;
      }
    }
  } catch (e) {}
  input.focus();
  document.execCommand('paste');
}

function submitUrlImportForm(ev) {
  ev.preventDefault();
  const urlVal = document.getElementById('importUrlInput').value.trim();
  const brandVal = document.getElementById('importUrlBrand').value;
  const catVal = document.getElementById('importUrlCategory').value;
  if (!urlVal) return;

  const statusBox = document.getElementById('urlImportStatusBox');
  const btnTxt = document.getElementById('submitUrlImportBtnText');
  if (statusBox) {
    statusBox.className = 'url-import-info-box loading';
    statusBox.innerHTML = '<span>⏳ <b>Conectando con la página web y extrayendo melaminas...</b> Descargando texturas y generando archivos .SKM calibrados (768×1655 mm)...</span>';
  }
  if (btnTxt) btnTxt.textContent = 'Analizando URL...';

  const payload = {
    url: urlVal,
    brand: brandVal,
    category: catVal
  };

  const sentToRuby = notifySketchUp('importMaterialsFromUrl', payload);
  if (!sentToRuby) {
    simulateBrowserUrlCatalogImport(payload);
  }
}

window.onRubyUrlImportFinished = function(res) {
  const statusBox = document.getElementById('urlImportStatusBox');
  const btnTxt = document.getElementById('submitUrlImportBtnText');
  if (btnTxt) btnTxt.textContent = 'Extraer y Cargar Materiales';

  if (!res || !res.ok || !Array.isArray(res.items) || !res.items.length) {
    const errMsg = (res && res.error) ? res.error : 'No se pudieron extraer materiales de esa URL.';
    if (statusBox) {
      statusBox.className = 'url-import-info-box error';
      statusBox.innerHTML = `<span>⚠️ <b>Atención:</b> ${errMsg}</span>`;
    }
    showToast(errMsg);
    return;
  }

  const existingIds = new Set(materialsList.map(x => x.id));
  res.items.forEach(item => {
    if (!existingIds.has(item.id)) {
      materialsList.unshift(item);
    }
  });

  state.selectedMaterialId = res.items[0].id;
  persistState();
  closeUrlImportModal();
  if (state.activeTab !== 'materials') {
    setTab('materials');
  } else {
    renderView();
  }
  showToast(`¡${res.items.length} material(es) importados desde la URL y añadidos a Materiales!`);
};

function simulateBrowserUrlCatalogImport(payload) {
  let host = 'catalogo-web.com';
  try {
    const u = new URL(payload.url.startsWith('http') ? payload.url : 'https://' + payload.url);
    host = u.hostname.replace(/^www\./, '');
  } catch (e) {}

  const uLow = payload.url.toLowerCase();
  let detectedBrand = payload.brand !== 'AUTO' ? payload.brand : 'FAPLAC';
  if (payload.brand === 'AUTO') {
    if (uLow.includes('egger')) detectedBrand = 'EGGER';
    else if (uLow.includes('arauco')) detectedBrand = 'ARAUCO';
    else if (uLow.includes('masisa')) detectedBrand = 'MASISA';
    else if (uLow.includes('sadepan')) detectedBrand = 'SADEPAN';
    else if (uLow.includes('pelikano')) detectedBrand = 'PELÍKANO';
  }
  const bClassMap = { 'EGGER': 'egger', 'FAPLAC': 'faplac', 'ARAUCO': 'arauco', 'MASISA': 'masisa', 'SADEPAN': 'sadepan', 'PELÍKANO': 'pelikano' };
  const fCat = payload.category === 'Herrajes' ? 'Herrajes' : 'Maderas';
  const now = Math.floor(Date.now() / 1000);

  const demoItems = [
    {
      id: 'web_skm_' + now + '_1',
      code: 'WEB-01',
      title: 'Petiribí Natural (' + host + ')',
      category: fCat === 'Herrajes' ? 'HERRAJES' : 'MELAMINAS',
      filterCat: fCat,
      brand: detectedBrand,
      brandClass: bClassMap[detectedBrand] || 'faplac',
      img: 'assets/materials/15_H1714_ST19_Nogal_Lincoln.jpg',
      skmPath: 'assets/skm/15_H1714_ST19_Nogal_Lincoln.skm',
      desc: 'Melamina importada desde ' + payload.url + ' con textura calibrada a 768×1655 mm.',
      updatedAt: now + 2,
      usageCount: 25
    }
  ];
  setTimeout(() => {
    window.onRubyUrlImportFinished({ ok: true, items: demoItems, sourceUrl: payload.url });
  }, 500);
}

/* ============================================================================
   GESTIÓN DE PERFIL (LOGIN) Y CONFIGURACIÓN (SETTINGS ESTILO ANTIGRAVITY)
   ============================================================================ */
function renderLoginView() {
  const user = state.username || 'Sebastián';
  const studio = state.studio || 'Sin taller / estudio configurado';

  const avatar = document.getElementById('loginAvatar');
  if (avatar) avatar.textContent = user.charAt(0).toUpperCase();

  const nameLabel = document.getElementById('loginNameLabel');
  if (nameLabel) nameLabel.textContent = user;

  const studioLabel = document.getElementById('loginStudioLabel');
  if (studioLabel) studioLabel.textContent = studio;

  const userIn = document.getElementById('profileUsernameInput');
  if (userIn) userIn.value = user;

  const studioIn = document.getElementById('profileStudioInput');
  if (studioIn) studioIn.value = state.studio || '';
}

function saveProfileForm(ev) {
  if (ev) ev.preventDefault();
  state.username = document.getElementById('profileUsernameInput').value.trim() || 'Sebastián';
  state.studio = document.getElementById('profileStudioInput').value.trim();
  updateSidebarUsername();
  renderLoginView();
  persistState();
  showToast(`Perfil actualizado: ${state.username}`);
}

function openProfileModal() {
  setTab('login');
}

function closeProfileModal() {
  // Modal integrado como pestaña completa
}

function openSettingsModal() {
  setTab('settings');
}

function closeSettingsModal() {
  // Modal integrado como pestaña completa
}

function saveSettingsModal() {
  persistState();
}

function setTheme(themeName, skipPersist = false) {
  state.theme = themeName || 'classic';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.body.setAttribute('data-theme', state.theme);

  document.querySelectorAll('.ag-theme-card').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === state.theme);
  });
  updateThemeIcons();
  if (!skipPersist) {
    persistState();
  }
  applyOpacityStyles();
  syncMoodboardThemeAndLayout(false);
}

function syncMoodboardThemeAndLayout(triggerResize) {
  const iframe = document.getElementById('excalidrawIframe');
  if (!iframe) return;
  const exTheme = (state.theme === 'dark') ? 'dark' : 'light';
  try {
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        type: 'ENSSAMBLE_THEME',
        theme: exTheme
      }, '*');
      if (triggerResize) {
        setTimeout(() => {
          try {
            iframe.contentWindow.dispatchEvent(new Event('resize'));
          } catch (_e) {}
        }, 60);
      }
    }
  } catch (_e) {}
}

function updateThemeIcons() {
  const isDark = (state.theme === 'dark');
  const iconMap = [
    { sel: '.logo-collapsed-img', normal: 'assets/icons/sidebar_logo_collapsed.png', dark: 'assets/icons/sidebar_logo_collapsed_dark.png' },
    { sel: '.logo-expanded-img', normal: 'assets/icons/sidebar_logo_expanded.png', dark: 'assets/icons/sidebar_logo_expanded_dark.png' },
    { sel: '.hero-logo-img', normal: 'assets/icons/hero_logo.png', dark: 'assets/icons/hero_logo_dark.png' },
    { sel: '.arrow-expand-img', normal: 'assets/icons/arrow_expand.png', dark: 'assets/icons/arrow_expand_dark.png' },
    { sel: '.arrow-collapse-img', normal: 'assets/icons/arrow_collapse.png', dark: 'assets/icons/arrow_collapse_dark.png' },
    { sel: '.icon-inicio', normal: 'assets/icons/icon_inicio.png', dark: 'assets/icons/icon_inicio_dark.png' },
    { sel: '.icon-modulos', normal: 'assets/icons/icon_modulos.png', dark: 'assets/icons/icon_modulos_dark.png' },
    { sel: '.add-mod-tab-icon', normal: 'assets/icons/icon_modulos.png', dark: 'assets/icons/icon_modulos_dark.png' },
    { sel: '.icon-materiales', normal: 'assets/icons/icon_materiales.png', dark: 'assets/icons/icon_materiales_dark.png' },
    { sel: '.icon-despiece', normal: 'assets/icons/icon_despiece.png', dark: 'assets/icons/icon_despiece_dark.png' },
    { sel: '.icon-render', normal: 'assets/icons/icon_render.png', dark: 'assets/icons/icon_render_dark.png' },
    { sel: '.icon-moodboard', normal: 'assets/icons/icon_moodboard.png', dark: 'assets/icons/icon_moodboard_dark.png' },
    { sel: '.icon-url', normal: 'assets/icons/icon_url.png', dark: 'assets/icons/icon_url_dark.png' },
    { sel: '.icon-showroom', normal: 'assets/icons/icon_showroom.png', dark: 'assets/icons/icon_showroom_dark.png' },
    { sel: '.icon-trash', normal: 'assets/icons/icon_trash.png', dark: 'assets/icons/icon_trash_dark.png' },
    { sel: '.trash-empty-icon', normal: 'assets/icons/icon_trash.png', dark: 'assets/icons/icon_trash_dark.png' },
    { sel: '.icon-user', normal: 'assets/icons/icon_user.png', dark: 'assets/icons/icon_user_dark.png' },
    { sel: '.icon-settings', normal: 'assets/icons/icon_settings.png', dark: 'assets/icons/icon_settings_dark.png' }
  ];

  iconMap.forEach(item => {
    document.querySelectorAll(item.sel).forEach(img => {
      img.src = isDark ? item.dark : item.normal;
    });
  });
}

function onCardDeleteToggle(isChecked) {
  state.cardDeleteEnabled = !!isChecked;
  persistState();
  if (state.activeTab === 'modules' || state.activeTab === 'materials' || state.activeTab === 'trash') {
    renderView();
  } else if (state.activeTab === 'inicio') {
    renderInicioDashboard();
  }
  showToast(state.cardDeleteEnabled ? 'Menú ⋯ (Opciones) activado en las tarjetas.' : 'Menú ⋯ desactivado.');
}

function onImportUrlToggle(isChecked) {
  state.importUrlEnabled = !!isChecked;
  persistState();
  if (state.activeTab === 'materials') renderView();
  showToast(state.importUrlEnabled ? 'Opción "Importar desde URL" activada.' : 'Opción "Importar desde URL" desactivada.');
}

function onOpacityToggle(target, isChecked) {
  if (target === 'content') {
    state.contentOpacityOn = !!isChecked;
    const row = document.getElementById('contentOpacitySliderRow');
    if (row) row.style.display = isChecked ? 'flex' : 'none';
  } else if (target === 'sidebar') {
    state.sidebarOpacityOn = !!isChecked;
    const row = document.getElementById('sidebarOpacitySliderRow');
    if (row) row.style.display = isChecked ? 'flex' : 'none';
  }
  applyOpacityStyles();
  persistState();
}

function onOpacitySlider(target, value) {
  const num = Math.max(0, Math.min(100, parseInt(value, 10) || 0));
  if (target === 'content') {
    state.contentOpacity = num;
    const valEl = document.getElementById('settingContentOpacityVal');
    if (valEl) valEl.textContent = num + '%';
  } else if (target === 'sidebar') {
    state.sidebarOpacity = num;
    const valEl = document.getElementById('settingSidebarOpacityVal');
    if (valEl) valEl.textContent = num + '%';
  }
  applyOpacityStyles();
  persistState();
}

function applyOpacityStyles() {
  const root = document.documentElement;
  const contentAlpha = state.contentOpacityOn ? (state.contentOpacity / 100) : 1;
  const sidebarAlpha = state.sidebarOpacityOn ? (state.sidebarOpacity / 100) : 1;

  root.style.setProperty('--content-bg-alpha', String(contentAlpha));
  root.style.setProperty('--sidebar-bg-alpha', String(sidebarAlpha));

  const mainContent = document.getElementById('mainContent');
  if (mainContent) {
    if (state.contentOpacityOn) {
      if (state.theme === 'dark') {
        mainContent.style.backgroundColor = `rgba(24, 28, 34, ${contentAlpha})`;
      } else if (state.theme === 'light') {
        mainContent.style.backgroundColor = `rgba(244, 245, 247, ${contentAlpha})`;
      } else {
        mainContent.style.backgroundColor = `rgba(217, 217, 217, ${contentAlpha})`;
      }
      mainContent.style.backgroundImage = 'none';
    } else {
      mainContent.style.backgroundColor = '';
      mainContent.style.backgroundImage = '';
    }
    mainContent.style.backdropFilter = 'none';
    mainContent.style.webkitBackdropFilter = 'none';
  }

  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    if (state.sidebarOpacityOn) {
      if (state.theme === 'dark') {
        sidebar.style.backgroundColor = `rgba(26, 31, 38, ${sidebarAlpha})`;
      } else if (state.theme === 'light') {
        sidebar.style.backgroundColor = `rgba(255, 255, 255, ${sidebarAlpha})`;
      } else {
        sidebar.style.backgroundColor = `rgba(255, 197, 118, ${sidebarAlpha})`;
      }
    } else {
      sidebar.style.backgroundColor = '';
    }
    sidebar.style.backdropFilter = 'none';
    sidebar.style.webkitBackdropFilter = 'none';
  }
}

function onSettingThickChange(val) {
  const chosenThick = parseInt(val, 10) || 18;
  state.defaultThickness = THICKNESS_STEPS.includes(chosenThick) ? chosenThick : 18;
  syncThicknessSliderUI();
  persistState();
  showToast(`Espesor fijo de melamina: ${state.defaultThickness} mm.`);
}

function onSettingSyncRotateChange(val) {
  state.syncRotateFaces = (val === 'true' || val === true);
  persistState();
  showToast(state.syncRotateFaces ? 'Rotación simultánea en cara y contracara activada.' : 'Rotación en 1 sola cara activada.');
}
function onSyncRotateToggle(checked) {
  onSettingSyncRotateChange(checked);
}

function onSettingApiKeyChange(val) {
  state.geminiApiKey = (val || '').trim();
  persistState();
  const renderKeyIn = document.getElementById('renderGeminiApiKeyInput');
  if (renderKeyIn) renderKeyIn.value = state.geminiApiKey;
}
function onSettingGeminiKey(val) {
  onSettingApiKeyChange(val);
}

function scrollToSettingsSection(secId) {
  document.querySelectorAll('#agSettingsNav .ag-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sec') === secId);
  });
  const sec = document.getElementById('setSec-' + secId);
  if (sec) {
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterSettingsRows(query) {
  const q = (query || '').toLowerCase().trim();
  document.querySelectorAll('.ag-set-row').forEach(row => {
    if (!q) {
      row.style.display = '';
      return;
    }
    const kw = (row.getAttribute('data-keywords') || '').toLowerCase();
    const txt = (row.textContent || '').toLowerCase();
    const match = kw.includes(q) || txt.includes(q);
    row.style.display = match ? '' : 'none';
  });
}

function renderSettingsView() {
  const cardDeleteToggle = document.getElementById('settingCardDeleteOn');
  if (cardDeleteToggle) cardDeleteToggle.checked = !!state.cardDeleteEnabled;

  const importUrlToggle = document.getElementById('settingImportUrlOn');
  if (importUrlToggle) importUrlToggle.checked = state.importUrlEnabled !== false;

  const contentOpToggle = document.getElementById('settingContentOpacityOn');
  if (contentOpToggle) contentOpToggle.checked = !!state.contentOpacityOn;

  const sidebarOpToggle = document.getElementById('settingSidebarOpacityOn');
  if (sidebarOpToggle) sidebarOpToggle.checked = !!state.sidebarOpacityOn;

  const contentOpRow = document.getElementById('contentOpacitySliderRow');
  if (contentOpRow) contentOpRow.style.display = state.contentOpacityOn ? 'flex' : 'none';

  const sidebarOpRow = document.getElementById('sidebarOpacitySliderRow');
  if (sidebarOpRow) sidebarOpRow.style.display = state.sidebarOpacityOn ? 'flex' : 'none';

  const contentOpSlider = document.getElementById('settingContentOpacity');
  if (contentOpSlider) contentOpSlider.value = state.contentOpacity ?? 100;
  const contentOpVal = document.getElementById('settingContentOpacityVal');
  if (contentOpVal) contentOpVal.textContent = (state.contentOpacity ?? 100) + '%';

  const sidebarOpSlider = document.getElementById('settingSidebarOpacity');
  if (sidebarOpSlider) sidebarOpSlider.value = state.sidebarOpacity ?? 100;
  const sidebarOpVal = document.getElementById('settingSidebarOpacityVal');
  if (sidebarOpVal) sidebarOpVal.textContent = (state.sidebarOpacity ?? 100) + '%';

  const thickSelect = document.getElementById('settingDefaultThick');
  if (thickSelect) thickSelect.value = String(state.defaultThickness || 18);

  const rotateSelect = document.getElementById('settingSyncRotateFaces');
  if (rotateSelect) rotateSelect.value = String(state.syncRotateFaces !== false);

  const apiKeyInput = document.getElementById('settingGeminiApiKey');
  if (apiKeyInput) apiKeyInput.value = state.geminiApiKey || '';

  document.querySelectorAll('.ag-theme-card').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === (state.theme || 'classic'));
  });

  updateTrashUI();
}

/* ============================================================================
   OPTIMIZADOR DE CORTE 2D EN PLACA (GUILLOTINA + RESPETO DE VETA Y TAPACANTOS)
   ============================================================================ */
function toggleCutOptimizerPanel() {
  state.cutOptimizerActive = !state.cutOptimizerActive;
  const btn = document.getElementById('cutOptimizerBtn');
  if (btn) btn.classList.toggle('active', state.cutOptimizerActive);
  const card = document.getElementById('cutOptimizerCard');
  if (card) {
    card.style.display = state.cutOptimizerActive ? 'block' : 'none';
    if (state.cutOptimizerActive) {
      if (despieceGroups.length === 0) {
        triggerScanSketchUpCutlist();
      }
      state.activeCutSheetIdx = 0;
      renderCutOptimizerCanvas();
      showToast('Optimizador de Corte 2D activo: Placas distribuidas con sierra de 4 mm y refilado de 10 mm.');
    }
  }
}

function selectCutOptSheet(idx) {
  state.activeCutSheetIdx = idx;
  renderCutOptimizerCanvas();
}

function computeGuillotinePacking(boardW, boardH, kerf, trim, useRealDims) {
  const usableW = boardW - 2 * trim;
  const usableH = boardH - 2 * trim;
  const items = [];

  despieceGroups.forEach((grp, gIdx) => {
    const tc1Thick = parseFloat(grp.tapacanto1Thick || '0.4') || 0.4;
    const tc2Thick = parseFloat(grp.tapacanto2Thick || '2') || 2.0;
    const thickForEdge = (val) => (val === 1 ? tc1Thick : (val === 2 ? tc2Thick : 0));

    (grp.parts || []).forEach((p, pIdx) => {
      const q = Math.max(1, parseInt(p.qty) || 1);
      const e = (p.edges || [0, 0, 0, 0]).map(normalizeEdgeVal);
      const subW = useRealDims ? (thickForEdge(e[0]) + thickForEdge(e[1])) : 0;
      const subL = useRealDims ? (thickForEdge(e[2]) + thickForEdge(e[3])) : 0;
      const wPiece = Math.max(20, (parseFloat(p.length) || 100) - subL);
      const hPiece = Math.max(20, (parseFloat(p.width) || 100) - subW);

      for (let c = 0; c < q; c++) {
        items.push({
          label: `M${gIdx + 1}.${pIdx + 1}`,
          desc: p.desc || `Pieza ${pIdx + 1}`,
          w: Number(wPiece.toFixed(1)),
          h: Number(hPiece.toFixed(1)),
          canRotate: p.rotate !== false,
          edges: e,
          area: wPiece * hPiece
        });
      }
    });
  });

  items.sort((a, b) => Math.max(b.w, b.h) - Math.max(a.w, a.h) || b.area - a.area);

  const sheets = [];
  function createSheet() {
    return {
      placed: [],
      freeRects: [{ x: trim, y: trim, w: usableW, h: usableH }],
      usedArea: 0
    };
  }

  items.forEach(it => {
    let placedSuccessfully = false;

    for (let sIdx = 0; sIdx < sheets.length; sIdx++) {
      const sh = sheets[sIdx];
      let bestRectIdx = -1;
      let bestRotated = false;
      let bestScore = Infinity;

      for (let rIdx = 0; rIdx < sh.freeRects.length; rIdx++) {
        const fr = sh.freeRects[rIdx];
        if (it.w <= fr.w && it.h <= fr.h) {
          const score = Math.min(fr.w - it.w, fr.h - it.h);
          if (score < bestScore) {
            bestScore = score;
            bestRectIdx = rIdx;
            bestRotated = false;
          }
        }
        if (it.canRotate && it.h <= fr.w && it.w <= fr.h) {
          const score = Math.min(fr.w - it.h, fr.h - it.w);
          if (score < bestScore) {
            bestScore = score;
            bestRectIdx = rIdx;
            bestRotated = true;
          }
        }
      }

      if (bestRectIdx !== -1) {
        const fr = sh.freeRects.splice(bestRectIdx, 1)[0];
        const pw = bestRotated ? it.h : it.w;
        const ph = bestRotated ? it.w : it.h;
        const pe = bestRotated ? [it.edges[2], it.edges[3], it.edges[0], it.edges[1]] : it.edges;

        sh.placed.push({
          ...it,
          x: fr.x,
          y: fr.y,
          w: pw,
          h: ph,
          rotated: bestRotated,
          drawEdges: pe
        });
        sh.usedArea += pw * ph;

        const remW = fr.w - pw - kerf;
        const remH = fr.h - ph - kerf;
        if (remW > remH) {
          if (remW > 30) sh.freeRects.push({ x: fr.x + pw + kerf, y: fr.y, w: remW, h: fr.h });
          if (remH > 30) sh.freeRects.push({ x: fr.x, y: fr.y + ph + kerf, w: pw, h: remH });
        } else {
          if (remH > 30) sh.freeRects.push({ x: fr.x, y: fr.y + ph + kerf, w: fr.w, h: remH });
          if (remW > 30) sh.freeRects.push({ x: fr.x + pw + kerf, y: fr.y, w: remW, h: ph });
        }
        placedSuccessfully = true;
        break;
      }
    }

    if (!placedSuccessfully) {
      const newSh = createSheet();
      const fr = newSh.freeRects.shift();
      const pw = Math.min(it.w, usableW);
      const ph = Math.min(it.h, usableH);
      newSh.placed.push({
        ...it,
        x: fr.x,
        y: fr.y,
        w: pw,
        h: ph,
        rotated: false,
        drawEdges: it.edges
      });
      newSh.usedArea += pw * ph;
      const remW = fr.w - pw - kerf;
      const remH = fr.h - ph - kerf;
      if (remW > 30) newSh.freeRects.push({ x: fr.x + pw + kerf, y: fr.y, w: remW, h: fr.h });
      if (remH > 30) newSh.freeRects.push({ x: fr.x, y: fr.y + ph + kerf, w: pw, h: remH });
      sheets.push(newSh);
    }
  });

  if (sheets.length === 0) sheets.push(createSheet());
  return sheets;
}

function renderCutOptimizerCanvas() {
  const canvas = document.getElementById('cutOptimizerCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const CW = canvas.width, CH = canvas.height;
  ctx.clearRect(0, 0, CW, CH);

  const sizeStr = document.getElementById('cutOptBoardSizeSelect')?.value || '2600x1830';
  const [boardW, boardH] = sizeStr.split('x').map(Number);
  const useReal = document.getElementById('cutOptUseRealDims')?.checked !== false;
  const kerf = 4;
  const trim = 10;

  const sheets = computeGuillotinePacking(boardW, boardH, kerf, trim, useReal);
  if (state.activeCutSheetIdx >= sheets.length) state.activeCutSheetIdx = 0;
  const curSheet = sheets[state.activeCutSheetIdx];

  const pillsEl = document.getElementById('cutOptSheetPills');
  if (pillsEl) {
    pillsEl.innerHTML = sheets.map((s, idx) => {
      const util = ((s.usedArea / (boardW * boardH)) * 100).toFixed(1);
      return `<button type="button" class="ens-pill-btn ${idx === state.activeCutSheetIdx ? 'active' : ''}" onclick="selectCutOptSheet(${idx})"><span>Placa ${idx + 1} (${util}%)</span></button>`;
    }).join('');
  }

  const utilPct = ((curSheet.usedArea / (boardW * boardH)) * 100).toFixed(1);
  const wastePct = (100 - parseFloat(utilPct)).toFixed(1);
  const statsEl = document.getElementById('cutOptSummaryStats');
  if (statsEl) {
    statsEl.textContent = `Aprovechamiento: ${utilPct}% • Desperdicio: ${wastePct}% • ${curSheet.placed.length} pzs en Placa ${state.activeCutSheetIdx + 1}/${sheets.length}`;
  }

  const padX = 48, padY = 34;
  const scale = Math.min((CW - padX * 2) / boardW, (CH - padY * 2) / boardH);
  const drawW = boardW * scale;
  const drawH = boardH * scale;
  const ox = (CW - drawW) * 0.5;
  const oy = (CH - drawH) * 0.5;

  // Fondo de placa bruta
  ctx.fillStyle = '#E2E8F0';
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 2;
  ctx.fillRect(ox, oy, drawW, drawH);
  ctx.strokeRect(ox, oy, drawW, drawH);

  // Línea punteada de refilado perimetral (10 mm)
  ctx.save();
  ctx.strokeStyle = '#94A3B8';
  ctx.setLineDash([4, 4]);
  ctx.strokeRect(ox + trim * scale, oy + trim * scale, (boardW - 2 * trim) * scale, (boardH - 2 * trim) * scale);
  ctx.restore();

  // Dibujar piezas anidadas
  curSheet.placed.forEach(p => {
    const px = ox + p.x * scale;
    const py = oy + p.y * scale;
    const pw = p.w * scale;
    const ph = p.h * scale;

    ctx.fillStyle = '#FFFDF9';
    ctx.strokeStyle = '#1E242B';
    ctx.lineWidth = 1.2;
    ctx.fillRect(px, py, pw, ph);
    ctx.strokeRect(px, py, pw, ph);

    // Indicadores de Tapacanto Rojo (1) y Azul (2) en los 4 bordes de la pieza
    const e = p.drawEdges || [0, 0, 0, 0];
    const drawEdgeLine = (x1, y1, x2, y2, val) => {
      if (!val) return;
      ctx.save();
      ctx.strokeStyle = val === 2 ? '#2563EB' : '#E11D48';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    };
    drawEdgeLine(px + 1, py + 1.5, px + pw - 1, py + 1.5, e[0]);         // Superior
    drawEdgeLine(px + 1, py + ph - 1.5, px + pw - 1, py + ph - 1.5, e[1]); // Inferior
    drawEdgeLine(px + 1.5, py + 1, px + 1.5, py + ph - 1, e[2]);         // Izquierdo
    drawEdgeLine(px + pw - 1.5, py + 1, px + pw - 1.5, py + ph - 1, e[3]); // Derecho

    if (pw > 34 && ph > 20) {
      ctx.fillStyle = '#1E242B';
      ctx.font = '700 9px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      const titleTxt = pw > 95 ? `${p.label} ${p.desc.slice(0, 14)}` : p.label;
      ctx.fillText(titleTxt, px + pw * 0.5, py + ph * 0.5 - (ph > 32 ? 3 : -3));
      if (ph > 32) {
        ctx.fillStyle = '#475569';
        ctx.font = '600 8px Montserrat, sans-serif';
        ctx.fillText(`${p.w}×${p.h}`, px + pw * 0.5, py + ph * 0.5 + 9);
      }
    }
  });

  // Cotas exteriores de la placa
  ctx.fillStyle = '#334155';
  ctx.font = '700 10px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`Largo de Placa (Sentido de Veta): ${boardW} mm`, ox + drawW * 0.5, oy - 10);
  ctx.save();
  ctx.translate(ox - 14, oy + drawH * 0.5);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(`Ancho: ${boardH} mm`, 0, 0);
  ctx.restore();
}

/* ============================================================================
   EXPORTACIÓN DE DESPIECE A CSV / EXCEL (NATIVO SKETCHUP + NAVEGADOR)
   ============================================================================ */
function exportDespieceToCsv() {
  if (despieceGroups.length === 0) {
    triggerScanSketchUpCutlist();
  }
  const projName = (document.getElementById('despieceProjectName')?.value || 'Despiece_enssamble').trim();
  const melaminasOnly = materialsList.filter(m => m.filterCat !== 'Herrajes');

  const lines = [];
  lines.push(`"PROYECTO:";"${projName.replace(/"/g, '""')}";"GENERADO POR:";"enssamble v1.0.0"`);
  lines.push('');
  lines.push('"Módulo";"Ítem";"Cantidad";"Descripción de Pieza";"Largo Nominal (mm)";"Ancho Nominal (mm)";"Largo Real Corte (mm)";"Ancho Real Corte (mm)";"Espesor (mm)";"Material Melamina";"Rotar Veta";"TC Superior";"TC Inferior";"TC Izquierdo";"TC Derecho";"Tapacanto #1 Rojo (ml)";"Tapacanto #2 Azul (ml)"');

  despieceGroups.forEach((grp, gIdx) => {
    const matObj = melaminasOnly.find(m => m.id === grp.materialId) || melaminasOnly[0];
    const matLabel = `${matObj.code} ${matObj.title} (${matObj.brand})`;
    const tc1Thick = parseFloat(grp.tapacanto1Thick || '0.4') || 0.4;
    const tc2Thick = parseFloat(grp.tapacanto2Thick || '2') || 2.0;
    const thickForEdge = (val) => (val === 1 ? tc1Thick : (val === 2 ? tc2Thick : 0));
    const tcNameForEdge = (val) => (val === 1 ? `TC1 Rojo (${tc1Thick}mm)` : (val === 2 ? `TC2 Azul (${tc2Thick}mm)` : 'Sin TC'));

    (grp.parts || []).forEach((p, pIdx) => {
      const q = parseInt(p.qty) || 1;
      const L = parseFloat(p.length) || 0;
      const W = parseFloat(p.width) || 0;
      const T = parseFloat(p.thick) || state.defaultThickness || 18;
      const eb = calcPartEdgeBandMeters(p);
      const e = eb.e;
      const realL = Math.max(0, L - (thickForEdge(e[2]) + thickForEdge(e[3]))).toFixed(1);
      const realW = Math.max(0, W - (thickForEdge(e[0]) + thickForEdge(e[1]))).toFixed(1);

      const row = [
        `M${gIdx + 1} - ${grp.moduleTitle}`,
        pIdx + 1,
        q,
        p.desc || `Pieza ${pIdx + 1}`,
        L,
        W,
        realL,
        realW,
        T,
        matLabel,
        p.rotate !== false ? 'Sí' : 'No (Veta Fija)',
        tcNameForEdge(e[0]),
        tcNameForEdge(e[1]),
        tcNameForEdge(e[2]),
        tcNameForEdge(e[3]),
        eb.mlTc1.toFixed(2),
        eb.mlTc2.toFixed(2)
      ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(';');
      lines.push(row);
    });
  });

  const hw = calculateSuggestedHardware();
  lines.push('');
  lines.push('"RESUMEN DE HERRAJES ESTIMADOS"');
  lines.push(`"Bisagras Cazoleta 35mm";"${hw.bisagras} unidades"`);
  lines.push(`"Correderas Telescópicas";"${hw.correderasPares} pares"`);
  lines.push(`"Soportes de Estante";"${hw.soportesEstante} unidades"`);
  lines.push(`"Tornillos / Minifix Estructurales";"${hw.tornillos} unidades"`);

  const csvContent = lines.join('\r\n');
  const safeFile = projName.replace(/[^a-zA-Z0-9_\-]/g, '_') + '_despiece.csv';

  const sent = notifySketchUp('exportCutlistCsv', { filename: safeFile, csvContent });
  if (!sent) {
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = safeFile;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Planilla CSV exportada: ${safeFile}`);
  }
}

window.onRubyCsvExported = function(res) {
  if (res && res.ok) {
    showToast(`Despiece exportado en: ${res.path}`);
  } else if (res && res.error) {
    showToast(`Error al exportar CSV: ${res.error}`);
  }
};

/* ============================================================================
   PESTAÑA RENDERIZADO CON GEMINI API KEY + AMBIENTACIÓN AL CAPTURAR VISTA
   ============================================================================ */
function onRenderGeminiKeyInput(val) {
  state.geminiApiKey = (val || '').trim();
  const sk = document.getElementById('settingGeminiApiKey');
  if (sk) sk.value = state.geminiApiKey;
  persistState();
}

function setRenderStatusMessage(msg, type = 'info') {
  const el = document.getElementById('renderStatusMsg');
  if (!el) return;
  if (!msg) {
    el.style.display = 'none';
    el.textContent = '';
    return;
  }
  el.style.display = 'block';
  el.className = `render-status-pill ${type}`;
  el.textContent = msg;
}

function drawBaseRenderCanvas(dataUrl) {
  const canvas = document.getElementById('renderStudioCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  const srcUrl = dataUrl || state.renderCapturedDataUrl || generateScannedModulePreviewDataUrl('Módulo', 900, 580, 720);
  const img = new Image();
  img.onload = function() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F4F6F9';
    ctx.fillRect(0, 0, W, H);

    const scale = Math.min((W * 0.94) / img.width, (H * 0.92) / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    const dx = (W - dw) * 0.5;
    const dy = (H - dh) * 0.5;
    ctx.drawImage(img, dx, dy, dw, dh);
  };
  img.src = srcUrl;
}

// Opciones de color de fondo para la pestaña Render:
// - Blanco (#FFFFFF)
// - Greige (#CFC7BC)
// - Gris (#9CA3AF)
// - Verde (#00B140 - tono Chroma Key estándar para hacer fondo transparente en Photoshop)
// - Dark (#1E242B - tono dark de la aplicación)
const RENDER_BG_MAP = {
  white:  '#FFFFFF',
  greige: '#CFC7BC',
  gray:   '#9CA3AF',
  green:  '#00B140',
  dark:   '#1E242B'
};

state.renderBgOption = state.renderBgOption || 'greige';
state.renderZoom = state.renderZoom || 1.0;
state.renderPanX = state.renderPanX || 0;
state.renderPanY = state.renderPanY || 0;
state.renderYawDeg = state.renderYawDeg ?? -31;
state.renderPitchDeg = state.renderPitchDeg ?? 21;
state.renderSceneW = state.renderSceneW || 1000;
state.renderSceneD = state.renderSceneD || 450;
state.renderSceneH = state.renderSceneH || 780;
state.renderSceneBoards = state.renderSceneBoards || null;
state.renderUseInteractive3D = false;

let _renderCroppedCanvas = null;
let _renderCroppedSourceUrl = '';
let _renderFastFrameImg = null;
let _isMiddleMouseOrbiting = false;
let _orbitLastX = 0;
let _orbitLastY = 0;
let _orbitPendingYaw = 0;
let _orbitPendingPitch = 0;
let _orbitRequestInFlight = false;
let _orbitRafId = null;
let _renderInteractInitialized = false;

function setRenderBackgroundOption(bgKey) {
  if (!RENDER_BG_MAP[bgKey]) bgKey = 'greige';
  state.renderBgOption = bgKey;
  document.querySelectorAll('#renderBgOptionsGroup .render-bg-opt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-bg') === bgKey);
  });
  const card = document.getElementById('renderViewportCard');
  if (card) {
    card.style.background = RENDER_BG_MAP[bgKey];
  }
  persistState();
  // Cambio de color 100% instantáneo (0 ms) sobre el recorte con canal alfa
  if (_renderCroppedCanvas) {
    renderCurrentStudioView();
    return;
  }
  const sent = notifySketchUp('captureSketchUpViewport', {
    autoRender: false,
    fitModel: false,
    bgHex: RENDER_BG_MAP[bgKey]
  });
  if (!sent) {
    renderCurrentStudioView();
  }
}

function syncRenderInputsUI() {
  const bgKey = RENDER_BG_MAP[state.renderBgOption] ? state.renderBgOption : 'greige';
  document.querySelectorAll('#renderBgOptionsGroup .render-bg-opt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-bg') === bgKey);
  });
  const card = document.getElementById('renderViewportCard');
  if (card) {
    card.style.background = RENDER_BG_MAP[bgKey];
  }
  initRenderViewportInteractions();
}

function captureSketchUpSceneForRender() {
  state.renderUseInteractive3D = false;
  state.renderZoom = 1.0;
  state.renderPanX = 0;
  state.renderPanY = 0;
  _renderFastFrameImg = null;
  const bgKey = RENDER_BG_MAP[state.renderBgOption] ? state.renderBgOption : 'greige';
  const sent = notifySketchUp('captureSketchUpViewport', {
    autoRender: false,
    fitModel: true,
    bgHex: RENDER_BG_MAP[bgKey]
  });
  if (!sent) {
    const selMod = modulesList.find(m => m.id === state.selectedModuleId) || modulesList[0];
    state.renderSceneW = (selMod && selMod.defaultW) || 800;
    state.renderSceneD = (selMod && selMod.defaultD) || 550;
    state.renderSceneH = (selMod && selMod.defaultH) || 720;
    state.renderSceneBoards = (selMod && selMod.customCfg && selMod.customCfg.scanned_boards) || null;
    state.renderUseInteractive3D = true;
    renderCurrentStudioView();
  }
}

function renderFastOrbitFrameToCanvas(imgEl) {
  const canvas = document.getElementById('renderStudioCanvas');
  if (!canvas || !imgEl) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const bgKey = RENDER_BG_MAP[state.renderBgOption] ? state.renderBgOption : 'greige';
  ctx.fillStyle = RENDER_BG_MAP[bgKey];
  ctx.fillRect(0, 0, W, H);

  const zoom = Math.max(0.25, Math.min(4.5, Number(state.renderZoom) || 1.0));
  const iw = imgEl.naturalWidth || imgEl.width || W;
  const ih = imgEl.naturalHeight || imgEl.height || H;
  const baseScale = Math.min(W / iw, H / ih);
  const drawW = iw * baseScale * zoom;
  const drawH = ih * baseScale * zoom;
  const panX = Number(state.renderPanX) || 0;
  const panY = Number(state.renderPanY) || 0;
  const destX = (W - drawW) * 0.5 + panX;
  const destY = (H - drawH) * 0.5 + panY;
  ctx.drawImage(imgEl, 0, 0, iw, ih, destX, destY, drawW, drawH);
}

window.onRubyViewportCaptured = function(res) {
  _orbitRequestInFlight = false;
  if (res && res.ok && res.dataUrl) {
    if (res.fastOrbit) {
      // Ruta ultra-rápida durante el giro con mouse: dibujar frame JPEG directamente sin procesado de píxeles
      const fastImg = new Image();
      fastImg.onload = function() {
        _renderFastFrameImg = fastImg;
        renderFastOrbitFrameToCanvas(fastImg);
        if (_isMiddleMouseOrbiting && (Math.abs(_orbitPendingYaw) > 0.05 || Math.abs(_orbitPendingPitch) > 0.05)) {
          scheduleNextOrbitFrame();
        }
      };
      fastImg.src = res.dataUrl;
      return;
    }

    _renderFastFrameImg = null;
    state.renderCapturedDataUrl = res.dataUrl;
    _renderCroppedCanvas = null;
    _renderCroppedSourceUrl = '';
    if (Array.isArray(res.sceneBoards) && res.sceneBoards.length > 0) {
      state.renderSceneBoards = res.sceneBoards;
      state.renderSceneW = Number(res.sceneW) || 800;
      state.renderSceneD = Number(res.sceneD) || 550;
      state.renderSceneH = Number(res.sceneH) || 720;
    }
    state.renderUseInteractive3D = false;
    prepareCroppedModuleCanvas(state.renderCapturedDataUrl, () => {
      renderCurrentStudioView();
      if (_isMiddleMouseOrbiting && (Math.abs(_orbitPendingYaw) > 0.05 || Math.abs(_orbitPendingPitch) > 0.05)) {
        scheduleNextOrbitFrame();
      }
    }, !!res.chromaKey);
  } else if (res && res.error) {
    showToast(res.error);
  }
};

// Extrae el recorte transparente desde el fondo chroma-key (#FE019A) de SketchUp
// manteniendo 100% opacos todos los colores internos del mueble (blanco, gris, madera, bordes)
// para que cambiar el color de fondo (Blanco, Greige, Gris, Verde, Dark) sea instantáneo (0 ms).
function prepareCroppedModuleCanvas(sourceDataUrl, onReady, isChromaKey = true) {
  if (!sourceDataUrl) {
    if (onReady) onReady();
    return;
  }
  if (_renderCroppedCanvas && _renderCroppedSourceUrl === sourceDataUrl) {
    if (onReady) onReady();
    return;
  }
  const img = new Image();
  img.onload = function() {
    const off = document.createElement('canvas');
    off.width = img.width;
    off.height = img.height;
    const octx = off.getContext('2d');
    octx.drawImage(img, 0, 0);

    if (isChromaKey) {
      try {
        const imgData = octx.getImageData(0, 0, off.width, off.height);
        const d = imgData.data;
        const kr = 254, kg = 1, kb = 154;
        for (let i = 0, len = d.length; i < len; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];
          // Coincidencia directa con el fondo #FE019A
          if (r >= 235 && g <= 18 && Math.abs(b - kb) <= 20) {
            d[i + 3] = 0;
            continue;
          }
          // Despill suave únicamente en píxeles de borde suavizado con exceso magenta puro
          const rg = r - g;
          const bg = b - g;
          if (rg > 85 && bg > 48 && r > b) {
            const m = Math.min(rg, bg * 1.65);
            const k = Math.min(1.0, Math.max(0.0, (m - 42.0) / 210.0));
            if (k > 0.02) {
              const alpha = 1.0 - k;
              if (alpha <= 0.04) {
                d[i + 3] = 0;
              } else {
                d[i]     = Math.max(0, Math.min(255, Math.round((r - k * kr) / alpha)));
                d[i + 1] = Math.max(0, Math.min(255, Math.round((g - k * kg) / alpha)));
                d[i + 2] = Math.max(0, Math.min(255, Math.round((b - k * kb) / alpha)));
                d[i + 3] = Math.round(alpha * 255);
              }
            }
          }
        }
        octx.putImageData(imgData, 0, 0);
      } catch (_e) {}
    }

    _renderCroppedCanvas = off;
    _renderCroppedSourceUrl = sourceDataUrl;
    if (onReady) onReady();
  };
  img.src = sourceDataUrl;
}

// Renderizador interactivo 3D en tiempo real cuando se usa en navegador fuera de SketchUp
function drawInteractive3dModulesOnRenderCanvas(ctx, W, H, bgHex, isChromaGreen) {
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, W, H);

  const w = Math.max(180, Number(state.renderSceneW) || 800);
  const d = Math.max(140, Number(state.renderSceneD) || 550);
  const h = Math.max(180, Number(state.renderSceneH) || 720);
  const t = Math.min(36, Math.max(3, state.defaultThickness || 18));

  const yaw = (Number(state.renderYawDeg) || -31) * Math.PI / 180;
  const pitch = (Number(state.renderPitchDeg) || 21) * Math.PI / 180;
  const zoom = Math.max(0.25, Math.min(4.5, Number(state.renderZoom) || 1.0));

  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch);
  const fov = 30 * Math.PI / 180;
  const focal = (Math.min(W, H) * 0.52 * zoom) / Math.tan(fov * 0.5);
  const maxSpan = Math.hypot(w * 0.56, d * 0.56, h * 0.56);
  const camDist = (maxSpan / Math.tan(fov * 0.5)) * 1.42;

  const eyeRelY1 = -camDist * cosP;
  const eyeRelZ1 =  camDist * sinP;
  const camEyeX = w * 0.5 - eyeRelY1 * sinY;
  const camEyeY = d * 0.5 + eyeRelY1 * cosY;
  const camEyeZ = h * 0.5 + eyeRelZ1;

  function toCam(wx, wy, wz) {
    const rx = wx - w * 0.5;
    const ry = wy - d * 0.5;
    const rz = wz - h * 0.5;
    const x1 = rx * cosY - ry * sinY;
    const y1 = rx * sinY + ry * cosY;
    const z1 = rz;
    const cx = x1;
    const cy = z1 * cosP + y1 * sinP;
    const cz = camDist + (y1 * cosP - z1 * sinP);
    const sc = focal / Math.max(60, cz);
    return { sx: W * 0.50 + (Number(state.renderPanX) || 0) + cx * sc, sy: H * 0.52 + (Number(state.renderPanY) || 0) - cy * sc, cz };
  }

  let rawBoards = state.renderSceneBoards;
  if (!Array.isArray(rawBoards) || rawBoards.length === 0) {
    rawBoards = buildImageBoardsFromSpecs(w, d, h, t, 2, 0, 0, 0);
  }

  const PALETTE = {
    carcass: { top: '#FFFFFF', left: '#E6EDF5', right: '#DCE5F0', front: '#F4F7FB', back: '#E5ECF4', bottom: '#D8E2EE' },
    back:    { top: '#F1F5F9', left: '#E4ECF5', right: '#DCE5F0', front: '#EDF2F8', back: '#E2EAF2', bottom: '#D8E2EE' },
    shelf:   { top: '#E4CDA9', left: '#D4B88E', right: '#C9AD82', front: '#DABF97', back: '#C9AD82', bottom: '#C2A476' },
    front:   { top: '#F4F0EA', left: '#DFD7CA', right: '#D6CEC0', front: '#EAE3D9', back: '#DCD4C6', bottom: '#D2C9BA' },
    metal:   { top: '#B8C4D4', left: '#8C9BAE', right: '#78879B', front: '#9AA8BA', back: '#78879B', bottom: '#64748B' }
  };

  const boxes = rawBoards.map((sb, idx) => {
    const [bx, by, bz, bdx, bdy, bdz] = (sb.boxMm || [0, 0, 0, t, d, h]).map(Number);
    return { id: idx, x0: bx, y0: by, z0: bz, x1: bx + bdx, y1: by + bdy, z1: bz + bdz, artRole: sb.artRole || 'carcass' };
  });

  const subQuads = [];
  boxes.forEach(b => {
    const pal = PALETTE[b.artRole] || PALETTE.carcass;
    const visFront  = (camEyeY - b.y0) < 0;
    const visBack   = (camEyeY - b.y1) > 0;
    const visLeft   = (camEyeX - b.x0) < 0;
    const visRight  = (camEyeX - b.x1) > 0;
    const visTop    = (camEyeZ - b.z1) > 0;
    const visBottom = (camEyeZ - b.z0) < 0;

    const faceSpecs = [];
    if (visFront)  faceSpecs.push({ fill: pal.front,  u0: [b.x0, b.y0, b.z0], u1: [b.x1, b.y0, b.z0], v0: [b.x0, b.y0, b.z1], v1: [b.x1, b.y0, b.z1] });
    if (visBack)   faceSpecs.push({ fill: pal.back,   u0: [b.x1, b.y1, b.z0], u1: [b.x0, b.y1, b.z0], v0: [b.x1, b.y1, b.z1], v1: [b.x0, b.y1, b.z1] });
    if (visLeft)   faceSpecs.push({ fill: pal.left,   u0: [b.x0, b.y1, b.z0], u1: [b.x0, b.y0, b.z0], v0: [b.x0, b.y1, b.z1], v1: [b.x0, b.y0, b.z1] });
    if (visRight)  faceSpecs.push({ fill: pal.right,  u0: [b.x1, b.y0, b.z0], u1: [b.x1, b.y1, b.z0], v0: [b.x1, b.y0, b.z1], v1: [b.x1, b.y1, b.z1] });
    if (visTop)    faceSpecs.push({ fill: pal.top,    u0: [b.x0, b.y0, b.z1], u1: [b.x1, b.y0, b.z1], v0: [b.x0, b.y1, b.z1], v1: [b.x1, b.y1, b.z1] });
    if (visBottom) faceSpecs.push({ fill: pal.bottom, u0: [b.x0, b.y1, b.z0], u1: [b.x1, b.y1, b.z0], v0: [b.x0, b.y0, b.z0], v1: [b.x1, b.y0, b.z0] });

    faceSpecs.forEach(f => {
      const mid = [(f.u0[0] + f.v1[0]) * 0.5, (f.u0[1] + f.v1[1]) * 0.5, (f.u0[2] + f.v1[2]) * 0.5];
      const dist = Math.hypot(mid[0] - camEyeX, mid[1] - camEyeY, mid[2] - camEyeZ);
      subQuads.push({ pts: [toCam(...f.u0), toCam(...f.u1), toCam(...f.v1), toCam(...f.v0)], dist, fill: f.fill });
    });
  });

  subQuads.sort((a, b) => b.dist - a.dist);
  subQuads.forEach(sq => {
    ctx.beginPath();
    ctx.moveTo(sq.pts[0].sx, sq.pts[0].sy);
    ctx.lineTo(sq.pts[1].sx, sq.pts[1].sy);
    ctx.lineTo(sq.pts[2].sx, sq.pts[2].sy);
    ctx.lineTo(sq.pts[3].sx, sq.pts[3].sy);
    ctx.closePath();
    ctx.fillStyle = sq.fill;
    ctx.fill();
    ctx.strokeStyle = '#2B3440';
    ctx.lineWidth = 1.1;
    ctx.stroke();
  });
}

// Dibuja el lienzo principal del Render ocupando el tamaño total del contenedor
function renderCurrentStudioView() {
  if (_renderFastFrameImg && _isMiddleMouseOrbiting) {
    renderFastOrbitFrameToCanvas(_renderFastFrameImg);
    return;
  }
  const canvas = document.getElementById('renderStudioCanvas');
  if (!canvas) return;
  if (canvas.width < 1920) {
    canvas.width = 1920;
    canvas.height = 1080;
  }
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  const bgKey = RENDER_BG_MAP[state.renderBgOption] ? state.renderBgOption : 'greige';
  const bgHex = RENDER_BG_MAP[bgKey];
  const isChromaGreen = bgKey === 'green';

  if (!_renderCroppedCanvas) {
    if (state.renderCapturedDataUrl) {
      prepareCroppedModuleCanvas(state.renderCapturedDataUrl, () => {
        renderCurrentStudioView();
      });
      return;
    }
    drawInteractive3dModulesOnRenderCanvas(ctx, W, H, bgHex, isChromaGreen);
    return;
  }

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, W, H);

  const zoom = Math.max(0.25, Math.min(4.5, Number(state.renderZoom) || 1.0));
  const cw = _renderCroppedCanvas.width;
  const ch = _renderCroppedCanvas.height;
  const baseScale = Math.min(W / cw, H / ch);
  const drawW = cw * baseScale * zoom;
  const drawH = ch * baseScale * zoom;
  const panX = Number(state.renderPanX) || 0;
  const panY = Number(state.renderPanY) || 0;
  const destX = (W - drawW) * 0.5 + panX;
  const destY = (H - drawH) * 0.5 + panY;

  ctx.drawImage(_renderCroppedCanvas, 0, 0, cw, ch, destX, destY, drawW, drawH);
}

function scheduleNextOrbitFrame() {
  if (_orbitRafId) return;
  _orbitRafId = requestAnimationFrame(() => {
    _orbitRafId = null;
    if (_isMiddleMouseOrbiting) {
      flushPendingSketchUpOrbit(true);
    }
  });
}

function flushPendingSketchUpOrbit(isFastStep) {
  if (Math.abs(_orbitPendingYaw) < 0.04 && Math.abs(_orbitPendingPitch) < 0.04 && isFastStep) return;
  if (_orbitRequestInFlight && isFastStep) return;

  const sendYaw = _orbitPendingYaw;
  const sendPitch = _orbitPendingPitch;
  _orbitPendingYaw = 0;
  _orbitPendingPitch = 0;
  _orbitRequestInFlight = true;

  const bgKey = RENDER_BG_MAP[state.renderBgOption] ? state.renderBgOption : 'greige';
  const sent = notifySketchUp('captureSketchUpViewport', {
    autoRender: false,
    fitModel: false,
    fastOrbit: !!isFastStep,
    deltaYawDeg: sendYaw,
    deltaPitchDeg: sendPitch,
    bgHex: RENDER_BG_MAP[bgKey]
  });
  if (!sent) {
    _orbitRequestInFlight = false;
    renderCurrentStudioView();
  }
}

function initRenderViewportInteractions() {
  if (_renderInteractInitialized) return;
  const card = document.getElementById('renderViewportCard');
  if (!card) return;
  _renderInteractInitialized = true;

  // 1) ZOOM CON LA RUEDA DEL MOUSE (60 FPS instantáneo)
  card.addEventListener('wheel', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const factor = ev.deltaY < 0 ? 1.10 : 0.91;
    state.renderZoom = Math.max(0.25, Math.min(4.5, (Number(state.renderZoom) || 1.0) * factor));
    renderCurrentStudioView();
  }, { passive: false });

  card.addEventListener('auxclick', (ev) => {
    if (ev.button === 1) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  });

  let _isLeftMousePanning = false;
  let _panLastX = 0;
  let _panLastY = 0;

  // 2) RUEDA DEL MOUSE PRESIONADA (button === 1): ROTACIÓN 360°
  //    CLICK IZQUIERDO PRESIONADO (button === 0): DESPLAZAMIENTO HORIZONTAL (X) Y VERTICAL (Y) SIN ROTAR
  card.addEventListener('mousedown', (ev) => {
    if (ev.button === 1) {
      ev.preventDefault();
      ev.stopPropagation();
      _isMiddleMouseOrbiting = true;
      _isLeftMousePanning = false;
      _orbitLastX = ev.clientX;
      _orbitLastY = ev.clientY;
      _orbitPendingYaw = 0;
      _orbitPendingPitch = 0;
      card.classList.add('is-orbiting');
    } else if (ev.button === 0) {
      ev.preventDefault();
      ev.stopPropagation();
      _isLeftMousePanning = true;
      _isMiddleMouseOrbiting = false;
      _panLastX = ev.clientX;
      _panLastY = ev.clientY;
      card.classList.add('is-orbiting');
    }
  });

  window.addEventListener('mousemove', (ev) => {
    if (_isLeftMousePanning) {
      const dx = ev.clientX - _panLastX;
      const dy = ev.clientY - _panLastY;
      _panLastX = ev.clientX;
      _panLastY = ev.clientY;

      const canvas = document.getElementById('renderStudioCanvas');
      const rect = (canvas || card).getBoundingClientRect();
      const scaleX = (canvas ? canvas.width : 1920) / Math.max(1, rect.width);
      const scaleY = (canvas ? canvas.height : 1080) / Math.max(1, rect.height);

      state.renderPanX = (Number(state.renderPanX) || 0) + dx * scaleX;
      state.renderPanY = (Number(state.renderPanY) || 0) + dy * scaleY;
      renderCurrentStudioView();
      return;
    }

    if (!_isMiddleMouseOrbiting) return;
    const dx = ev.clientX - _orbitLastX;
    const dy = ev.clientY - _orbitLastY;
    _orbitLastX = ev.clientX;
    _orbitLastY = ev.clientY;

    const dYaw = dx * 0.52;
    const dPitch = -dy * 0.45;
    _orbitPendingYaw += dYaw;
    _orbitPendingPitch += dPitch;

    let nextYaw = ((Number(state.renderYawDeg) || -31) + dYaw) % 360;
    if (nextYaw > 180) nextYaw -= 360;
    if (nextYaw < -180) nextYaw += 360;
    state.renderYawDeg = nextYaw;
    state.renderPitchDeg = Math.max(-88, Math.min(88, (Number(state.renderPitchDeg) || 21) + dPitch));

    scheduleNextOrbitFrame();
  });

  window.addEventListener('mouseup', () => {
    if (_isLeftMousePanning) {
      _isLeftMousePanning = false;
      card.classList.remove('is-orbiting');
      return;
    }
    if (!_isMiddleMouseOrbiting) return;
    _isMiddleMouseOrbiting = false;
    card.classList.remove('is-orbiting');
    if (_orbitRafId) {
      cancelAnimationFrame(_orbitRafId);
      _orbitRafId = null;
    }
    flushPendingSketchUpOrbit(false);
  });
}

function runRenderStudioProcess(_silent = false) {
  syncRenderInputsUI();
  captureSketchUpSceneForRender();
}

function drawBaseRenderCanvas(dataUrl) {
  state.renderCapturedDataUrl = dataUrl;
  prepareCroppedModuleCanvas(dataUrl, () => {
    renderCurrentStudioView();
  }, true);
}

function downloadRenderedImage() {
  const canvas = document.getElementById('renderStudioCanvas');
  if (!canvas) return;
  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = `enssamble_render_${Date.now()}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('Imagen de render descargada en formato .PNG');
}

document.addEventListener('DOMContentLoaded', () => {
  loadPersistedState();
  setTheme(state.theme || 'classic', true);
  applyOpacityStyles();
  updateTrashUI();

  // Cerrar menú de 3 puntitos al hacer clic en cualquier lugar fuera
  document.addEventListener('click', (ev) => {
    if (!ev.target.closest('.card-more-wrap')) {
      closeAllCardMenus();
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderView();
    });
  }

  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderView();
    });
  }

  const ambEl = document.getElementById('renderAmbientacionPrompt');
  if (ambEl) {
    ambEl.addEventListener('input', (e) => {
      state.renderAmbientacionPrompt = e.target.value;
      persistState();
    });
  }

  // Zoom dinámico con Control + Ruedita del mouse en Módulos, Materiales y Despiece
  window.addEventListener('wheel', (ev) => {
    if (!ev.ctrlKey) return;
    if (state.activeTab === 'modules' || state.activeTab === 'materials' || state.activeTab === 'trash') {
      ev.preventDefault();
      const curCols = state.gridCols || 8;
      const nextCols = ev.deltaY < 0 ? Math.max(4, curCols - 1) : Math.min(14, curCols + 1);
      if (nextCols !== curCols) {
        state.gridCols = nextCols;
        persistState();
        if (state.activeTab === 'trash') renderTrashView();
        else renderView();
        showToast(`Grilla: ${nextCols} tarjetas por fila (Ctrl + Ruedita)`);
      }
    } else if (state.activeTab === 'despiece') {
      ev.preventDefault();
      const curZoom = state.despieceZoom || 100;
      const nextZoom = ev.deltaY < 0 ? Math.min(140, curZoom + 6) : Math.max(60, curZoom - 6);
      if (nextZoom !== curZoom) {
        state.despieceZoom = nextZoom;
        applyDespieceZoom();
        persistState();
        showToast(`Zoom Despiece: ${nextZoom}% (Ctrl + Ruedita)`);
      }
    }
  }, { passive: false });

  // Navegación por tarjetas de Materiales con flechas del teclado
  window.addEventListener('keydown', (ev) => {
    if (state.activeTab !== 'materials') return;

    const tag = (document.activeElement && document.activeElement.tagName) ? document.activeElement.tagName.toUpperCase() : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (document.querySelector('.modal-backdrop.open')) return;

    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(ev.key)) return;

    const cards = Array.from(document.querySelectorAll('#cardsGrid .catalog-card'));
    if (!cards.length) return;

    ev.preventDefault();

    let curIdx = cards.findIndex(c => c.classList.contains('selected-material') || c.classList.contains('keyboard-focused'));
    if (curIdx === -1) curIdx = 0;

    const cols = Math.max(4, Math.min(14, state.gridCols || 8));
    let nextIdx = curIdx;

    if (ev.key === 'ArrowLeft') {
      nextIdx = Math.max(0, curIdx - 1);
    } else if (ev.key === 'ArrowRight') {
      nextIdx = Math.min(cards.length - 1, curIdx + 1);
    } else if (ev.key === 'ArrowUp') {
      nextIdx = Math.max(0, curIdx - cols);
    } else if (ev.key === 'ArrowDown') {
      nextIdx = Math.min(cards.length - 1, curIdx + cols);
    }

    if (nextIdx !== curIdx || !cards[curIdx].classList.contains('selected-material')) {
      cards.forEach(c => c.classList.remove('keyboard-focused'));
      const targetCard = cards[nextIdx];
      targetCard.classList.add('keyboard-focused');
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      targetCard.click();
    }
  });

  setTab('inicio');
});
