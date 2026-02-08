export interface Ebike {
  id: number;
  name: string;
  type: string;
  description: string;
  priceHalf: number;
  priceFull: number;
  image: string;
  specs: string[];
}

export interface TrailWaypoint {
  name: string;
  x: number;
  y: number;
  type: "start" | "poi" | "rest" | "viewpoint" | "end";
}

export interface Trail {
  id: number;
  name: string;
  distance: string;
  elevation: string;
  difficulty: "Facile" | "Media" | "Difficile";
  description: string;
  longDescription: string;
  duration: string;
  image: string;
  highlights: string[];
  terrain: string;
  recommended: string;
  elevationProfile: number[];
  waypoints: TrailWaypoint[];
  routePath: string;
}

export const ebikes: Ebike[] = [
  {
    id: 1,
    name: "City E-Bike Comfort",
    type: "City / Passeggiata",
    description: "Perfetta per escursioni rilassanti su strade asfaltate e piste ciclabili. Sella comoda, posizione eretta e cestino anteriore.",
    priceHalf: 25,
    priceFull: 40,
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&q=80",
    specs: ["Motore 250W", "Batteria 500Wh", "Autonomia ~100km", "Cambio 7 marce"],
  },
  {
    id: 2,
    name: "E-MTB Trail Pro",
    type: "Mountain Bike",
    description: "Per i sentieri più impegnativi. Sospensioni full, gomme tassellate e motore potente per affrontare qualsiasi salita.",
    priceHalf: 40,
    priceFull: 65,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80",
    specs: ["Motore 250W Bosch", "Batteria 625Wh", "Sospensioni 150mm", "Cambio 12 marce"],
  },
  {
    id: 3,
    name: "E-Trekking Adventure",
    type: "Trekking",
    description: "Il compromesso ideale tra comfort e prestazioni. Adatta a strade sterrate, ciclovie e sentieri non troppo tecnici.",
    priceHalf: 30,
    priceFull: 50,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80",
    specs: ["Motore 250W Shimano", "Batteria 504Wh", "Sospensioni 100mm", "Cambio 10 marce"],
  },
];

export const trails: Trail[] = [
  {
    id: 1,
    name: "Anello del Fondovalle",
    distance: "18 km",
    elevation: "150 m",
    difficulty: "Facile",
    description: "Percorso pianeggiante lungo il fiume, attraverso prati e piccoli borghi. Ideale per famiglie.",
    longDescription: "L'Anello del Fondovalle è il percorso perfetto per chi vuole godersi una pedalata rilassante immerso nella natura. Si parte dalla Foresteria e si segue la pista ciclabile lungo il torrente Noce, attraversando prati verdi punteggiati di fiori selvatici. Dopo circa 5 km si raggiunge il caratteristico Ponte Medievale in pietra (XIII secolo), uno dei più fotografati della valle.\n\nIl tracciato prosegue in piano attraverso il borgo antico di Castel Mezzano, dove consigliamo una sosta al Bar della Piazza per un caffè con vista. Si continua poi attraverso frutteti di mele e campi coltivati, fino all'area picnic attrezzata lungo il fiume — perfetta per un pranzo al sacco.\n\nIl ritorno avviene sulla sponda opposta del torrente, con una breve deviazione opzionale verso la Chiesetta di San Rocco (aggiunge solo 1,5 km). Terreno interamente su asfalto e sterrato compatto, adatto anche a bambini e principianti assoluti.",
    duration: "1.5 - 2 ore",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    highlights: ["Pista ciclabile", "Ponte medievale", "Sosta al bar del borgo", "Area picnic"],
    terrain: "Asfalto e sterrato compatto",
    recommended: "City E-Bike Comfort",
    elevationProfile: [0, 10, 20, 30, 40, 50, 60, 55, 50, 45, 60, 70, 80, 70, 50, 30, 15, 0],
    waypoints: [
      { name: "La Foresteria", x: 40, y: 200, type: "start" },
      { name: "Ponte Medievale", x: 140, y: 140, type: "poi" },
      { name: "Borgo Castel Mezzano", x: 260, y: 100, type: "rest" },
      { name: "Area Picnic", x: 380, y: 130, type: "poi" },
      { name: "Chiesetta S. Rocco", x: 420, y: 200, type: "viewpoint" },
      { name: "La Foresteria", x: 40, y: 200, type: "end" },
    ],
    routePath: "M 40 200 C 70 180, 100 150, 140 140 C 180 130, 220 110, 260 100 C 300 90, 340 100, 380 130 C 400 150, 430 180, 420 200 C 400 230, 300 250, 230 240 C 160 230, 80 220, 40 200",
  },
  {
    id: 2,
    name: "Salita al Passo del Vento",
    distance: "25 km",
    elevation: "800 m",
    difficulty: "Media",
    description: "Salita graduale fino al passo panoramico con vista sulla catena montuosa. Discesa tra boschi di larici.",
    longDescription: "La Salita al Passo del Vento è uno dei percorsi più gratificanti della zona: 800 metri di dislivello che vi porteranno dal fondovalle fino a quota 2.000 m, con un panorama a 360° sulle Dolomiti di Brenta e il gruppo dell'Adamello.\n\nSi parte dalla Foresteria imboccando la strada forestale che sale dolcemente attraverso il bosco di abeti rossi. I primi 8 km sono su pendenza costante del 5-6%, perfettamente gestibile con l'assistenza della e-bike. Al km 10 si raggiunge la Radura dei Cervi, un ampio pianoro dove è frequente avvistare cervi e caprioli al mattino presto.\n\nDa qui la salita si fa più decisa (8-10%) per gli ultimi 3 km fino al Passo del Vento (2.012 m). Al passo troverete il Rifugio Stella Alpina, aperto da giugno a ottobre, dove gustare canederli e strudel fatti in casa con vista mozzafiato.\n\nLa discesa avviene per la variante del Bosco dei Larici, un sentiero largo e ben battuto che serpeggia tra larici secolari con giochi di luce spettacolari. Si rientra passando dal Lago delle Rane (possibilità di sosta) e si torna alla Foresteria per la strada principale.",
    duration: "3 - 4 ore",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    highlights: ["Vista panoramica a 360°", "Rifugio Stella Alpina", "Bosco di larici", "Radura dei Cervi"],
    terrain: "Strada forestale e sterrato",
    recommended: "E-Trekking Adventure",
    elevationProfile: [0, 40, 80, 120, 170, 230, 300, 380, 460, 560, 650, 740, 800, 780, 700, 580, 420, 280, 150, 60, 0],
    waypoints: [
      { name: "La Foresteria", x: 30, y: 240, type: "start" },
      { name: "Bosco Abeti Rossi", x: 100, y: 190, type: "poi" },
      { name: "Radura dei Cervi", x: 190, y: 140, type: "viewpoint" },
      { name: "Passo del Vento", x: 290, y: 50, type: "viewpoint" },
      { name: "Rifugio Stella Alpina", x: 310, y: 55, type: "rest" },
      { name: "Bosco dei Larici", x: 370, y: 120, type: "poi" },
      { name: "Lago delle Rane", x: 420, y: 190, type: "poi" },
      { name: "La Foresteria", x: 30, y: 240, type: "end" },
    ],
    routePath: "M 30 240 C 50 230, 80 210, 100 190 C 130 160, 160 150, 190 140 C 220 125, 250 90, 290 50 C 300 45, 310 50, 310 55 C 320 65, 340 90, 370 120 C 400 155, 430 180, 420 190 C 380 220, 200 260, 100 255 C 60 250, 40 245, 30 240",
  },
  {
    id: 3,
    name: "Tour delle Malghe",
    distance: "32 km",
    elevation: "600 m",
    difficulty: "Media",
    description: "Giro ad anello che tocca tre malghe con degustazione di formaggi e prodotti locali.",
    longDescription: "Il Tour delle Malghe è un'esperienza che unisce sport, natura e gastronomia — il percorso più amato dai nostri ospiti. L'itinerario ad anello di 32 km tocca tre malghe d'alpeggio attive, dove i malgari producono formaggi secondo tradizioni centenarie.\n\nSi parte in direzione nord lungo la Val dei Pini, su comoda strada sterrata. Dopo 8 km di salita dolce si raggiunge Malga Belvedere (1.550 m), con la sua terrazza panoramica affacciata sulla valle. Qui potete assaggiare la ricotta fresca del mattino e il burro d'alpeggio.\n\nSi prosegue in quota attraversando pascoli fioriti (spettacolari a giugno-luglio) fino a Malga dei Fiori (1.620 m), famosa per il suo formaggio stagionato in grotta. Il tratto tra le due malghe è il più scenografico: le Dolomiti fanno da sfondo a prati punteggiati di genziane e rododendri.\n\nL'ultima tappa è Malga Alta (1.680 m), il punto più elevato del percorso, dove potete pranzare con polenta, luganega e tosèla alla piastra. La discesa verso la Foresteria avviene per il versante sud, attraverso un bel bosco misto di faggi e abeti, con pendenze mai eccessive.",
    duration: "3 - 4 ore",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    highlights: ["Malga Belvedere", "Malga dei Fiori", "Malga Alta", "Degustazione formaggi"],
    terrain: "Sterrato e sentiero largo",
    recommended: "E-Trekking Adventure",
    elevationProfile: [0, 50, 100, 160, 220, 280, 320, 350, 380, 400, 420, 440, 460, 450, 420, 380, 320, 250, 180, 100, 40, 0],
    waypoints: [
      { name: "La Foresteria", x: 30, y: 230, type: "start" },
      { name: "Val dei Pini", x: 90, y: 180, type: "poi" },
      { name: "Malga Belvedere", x: 160, y: 120, type: "rest" },
      { name: "Pascoli Fioriti", x: 240, y: 90, type: "viewpoint" },
      { name: "Malga dei Fiori", x: 300, y: 70, type: "rest" },
      { name: "Malga Alta", x: 370, y: 55, type: "rest" },
      { name: "Bosco dei Faggi", x: 420, y: 140, type: "poi" },
      { name: "La Foresteria", x: 30, y: 230, type: "end" },
    ],
    routePath: "M 30 230 C 50 210, 70 195, 90 180 C 110 160, 135 140, 160 120 C 190 100, 215 95, 240 90 C 265 80, 280 75, 300 70 C 330 60, 350 55, 370 55 C 395 60, 410 100, 420 140 C 430 180, 350 240, 250 250 C 150 255, 60 240, 30 230",
  },
  {
    id: 4,
    name: "Enduro Trail del Monte Nero",
    distance: "15 km",
    elevation: "1.100 m",
    difficulty: "Difficile",
    description: "Per esperti: salita impegnativa e discesa su single track tecnico tra rocce e radici.",
    longDescription: "L'Enduro Trail del Monte Nero è il percorso più adrenalinico della nostra selezione, riservato a biker con esperienza su terreni tecnici. Con 1.100 m di dislivello concentrati in soli 15 km, la pendenza media è del 14% con punte del 22% nei tratti più ripidi.\n\nLa salita parte subito decisa dalla Foresteria, attraversando il Bosco Scuro su strada forestale ripida. Dopo 4 km si esce dal bosco e si affronta il tratto esposto delle Rocce Rosse — qui il panorama si apre sulla valle sottostante ed è il punto perfetto per riprendere fiato e scattare foto.\n\nGli ultimi 2 km di salita sono i più duri: tornanti stretti su terreno misto fino alla Cima del Monte Nero (2.250 m). In vetta troverete una croce panoramica e una vista che spazia dal Lago di Garda alle Dolomiti.\n\nLa discesa è il momento clou: 8 km di single track naturale che alterna tratti veloci e fluidi a sezioni tecniche con radici, rocce e drop naturali (fino a 80 cm). Il trail passa attraverso la Gola del Diavolo, un canyon naturale spettacolare, prima di rientrare nel bosco e tornare alla Foresteria. Casco integrale fortemente consigliato.",
    duration: "2.5 - 3.5 ore",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
    highlights: ["Single track tecnico", "Cima Monte Nero (2.250 m)", "Gola del Diavolo", "Drop naturali"],
    terrain: "Single track, rocce, radici",
    recommended: "E-MTB Trail Pro",
    elevationProfile: [0, 100, 200, 320, 460, 600, 750, 900, 1020, 1100, 1050, 920, 760, 580, 400, 200, 50, 0],
    waypoints: [
      { name: "La Foresteria", x: 30, y: 240, type: "start" },
      { name: "Bosco Scuro", x: 80, y: 180, type: "poi" },
      { name: "Rocce Rosse", x: 150, y: 110, type: "viewpoint" },
      { name: "Cima Monte Nero", x: 240, y: 30, type: "viewpoint" },
      { name: "Single Track", x: 310, y: 80, type: "poi" },
      { name: "Gola del Diavolo", x: 380, y: 150, type: "poi" },
      { name: "La Foresteria", x: 30, y: 240, type: "end" },
    ],
    routePath: "M 30 240 C 45 220, 60 200, 80 180 C 100 155, 125 130, 150 110 C 180 80, 210 50, 240 30 C 260 25, 280 40, 310 80 C 340 115, 360 135, 380 150 C 410 175, 420 210, 400 230 C 350 260, 200 270, 120 260 C 70 255, 40 248, 30 240",
  },
  {
    id: 5,
    name: "Via dei Castelli",
    distance: "28 km",
    elevation: "450 m",
    difficulty: "Facile",
    description: "Itinerario culturale tra tre castelli medievali, vigneti terrazzati e borghi antichi.",
    longDescription: "La Via dei Castelli è un viaggio nel tempo su due ruote, un itinerario che attraversa secoli di storia unendo tre magnifici castelli medievali della valle. Il percorso è prevalentemente in piano o lieve salita, adatto a tutti e perfetto per chi vuole combinare l'attività fisica con la scoperta culturale.\n\nSi parte verso sud seguendo la ciclabile tra i meleti della Val di Non. Il primo castello è il Castello di Rocca (km 6), una fortezza del XII secolo arroccata su uno sperone roccioso. Le visite guidate partono ogni ora e durano circa 40 minuti — meritano assolutamente.\n\nSi prosegue attraverso i celebri vigneti terrazzati della zona, dove si producono eccellenti Teroldego e Nosiola. Al km 14 si raggiunge il pittoresco Borgo Antico di Pressano, con le sue case affrescate e l'enoteca dove potete degustare i vini locali.\n\nL'ultimo tratto porta al Castello delle Torri (km 22), il più imponente della valle, con le sue quattro torri medievali visibili da chilometri di distanza. Il castello ospita un museo e un giardino rinascimentale.\n\nIl ritorno alla Foresteria avviene per la pista ciclabile principale, in leggera discesa — una chiusura rilassante dopo una giornata ricca di scoperte.",
    duration: "3 - 4 ore",
    image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&q=80",
    highlights: ["Castello di Rocca", "Vigneti panoramici", "Borgo Antico di Pressano", "Castello delle Torri"],
    terrain: "Asfalto e sterrato compatto",
    recommended: "City E-Bike Comfort",
    elevationProfile: [0, 20, 50, 90, 130, 170, 200, 240, 270, 300, 330, 350, 370, 380, 390, 400, 420, 440, 450, 400, 340, 270, 200, 130, 70, 20, 0],
    waypoints: [
      { name: "La Foresteria", x: 30, y: 220, type: "start" },
      { name: "Meleti Val di Non", x: 80, y: 200, type: "poi" },
      { name: "Castello di Rocca", x: 140, y: 160, type: "poi" },
      { name: "Vigneti Terrazzati", x: 210, y: 130, type: "viewpoint" },
      { name: "Borgo di Pressano", x: 280, y: 100, type: "rest" },
      { name: "Castello delle Torri", x: 380, y: 70, type: "poi" },
      { name: "La Foresteria", x: 30, y: 220, type: "end" },
    ],
    routePath: "M 30 220 C 50 215, 65 208, 80 200 C 100 185, 120 172, 140 160 C 170 142, 190 135, 210 130 C 240 120, 260 110, 280 100 C 320 82, 350 75, 380 70 C 410 65, 440 90, 430 130 C 415 180, 340 230, 250 240 C 160 248, 70 232, 30 220",
  },
  {
    id: 6,
    name: "Sentiero del Lago Smeraldo",
    distance: "22 km",
    elevation: "700 m",
    difficulty: "Media",
    description: "Salita nel bosco fino al Lago Smeraldo con acque color turchese. Possibilità di bagno estivo.",
    longDescription: "Il Sentiero del Lago Smeraldo è probabilmente il percorso più magico della nostra collezione. La destinazione è il Lago Smeraldo, un piccolo specchio d'acqua alpina dalle acque incredibilmente turchesi, incastonato in una conca glaciale a 1.650 m di quota.\n\nSi parte dalla Foresteria imboccando il Sentiero degli Gnomi (così lo chiamano i locali per le formazioni rocciose bizzarre lungo il percorso). I primi 6 km salgono dolcemente attraverso un fitto bosco di abeti e betulle — un tunnel di verde dove la luce filtra creando atmosfere da fiaba.\n\nAl km 8, una breve deviazione di 500 m porta alla Cascata Nascosta, un salto d'acqua di 25 metri che si tuffa in una pozza cristallina. Il rumore dell'acqua e la nebbiolina fresca rendono questa sosta indimenticabile, soprattutto nelle giornate calde.\n\nRipreso il sentiero principale, si attraversa il cosiddetto Bosco Incantato — un tratto di foresta antica con alberi centenari ricoperti di muschio e licheni. Al km 14 si sbuca finalmente sulla riva del Lago Smeraldo: l'impatto visivo è garantito.\n\nLe acque sono balneabili da luglio a settembre (temperatura 18-22°C) e sulla riva nord c'è un'area attrezzata con panchine e tavoli. Il ritorno avviene per lo stesso sentiero, con la discesa che si gode ancora di più grazie ai panorami sulla valle.",
    duration: "2.5 - 3 ore",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    highlights: ["Lago Smeraldo", "Cascata Nascosta", "Bosco Incantato", "Area balneabile"],
    terrain: "Sterrato e sentiero forestale",
    recommended: "E-Trekking Adventure",
    elevationProfile: [0, 40, 90, 150, 220, 300, 380, 450, 520, 580, 640, 700, 700, 640, 580, 520, 450, 380, 300, 220, 150, 90, 40, 0],
    waypoints: [
      { name: "La Foresteria", x: 30, y: 230, type: "start" },
      { name: "Sentiero degli Gnomi", x: 80, y: 190, type: "poi" },
      { name: "Cascata Nascosta", x: 150, y: 140, type: "viewpoint" },
      { name: "Bosco Incantato", x: 230, y: 90, type: "poi" },
      { name: "Lago Smeraldo", x: 320, y: 50, type: "viewpoint" },
      { name: "La Foresteria", x: 30, y: 230, type: "end" },
    ],
    routePath: "M 30 230 C 45 218, 62 205, 80 190 C 105 168, 128 155, 150 140 C 180 118, 205 105, 230 90 C 260 72, 290 58, 320 50 C 350 45, 370 55, 370 80 C 368 120, 340 160, 300 185 C 250 215, 150 248, 80 242 C 55 238, 38 235, 30 230",
  },
];
