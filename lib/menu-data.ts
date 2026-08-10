export type MenuItem = {
  name: string
  price: string
  description: string
}

export type MenuCategory = {
  id: string
  label: string
  title: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'entradas',
    label: 'Entradas',
    title: 'Entradas',
    items: [
      {
        name: 'Ración de Lumpia (2 piezas)',
        price: '$3.00',
        description: 'Rollos fritos crujientes rellenos de pollo y vegetales.',
      },
      {
        name: 'Gyosa (5 piezas)',
        price: '$8.00',
        description:
          'Empanadillas chinas al vapor y doradas a la plancha, rellenas de carne y vegetales.',
      },
      {
        name: 'Wanton al Vapor (10 piezas)',
        price: '$12.00',
        description: 'Bocadillos de masa fina cocidos al vapor, rellenos de carne o cerdo sazonado.',
      },
      {
        name: 'Wanton Frito (10 piezas)',
        price: '$12.00',
        description: 'Masa fina crujiente frita rellena de carne o cerdo sazonado.',
      },
      {
        name: 'Dimsum Surtido (15 piezas)',
        price: '$15.00',
        description: 'Variedad de bocados tradicionales al vapor y fritos con diversos rellenos.',
      },
      {
        name: 'Croquetas de Cangrejo (12 piezas)',
        price: '$16.00',
        description: 'Bocados empanizados y fritos rellenos de cangrejo sazonado.',
      },
      {
        name: 'Langostino en Salsa Blanca',
        price: '$16.00',
        description: 'Langostinos salteados en una suave y cremosa salsa de la casa.',
      },
    ],
  },
  {
    id: 'combos',
    label: 'Combos',
    title: 'Combos',
    items: [
      {
        name: 'Arroz Frito, Carne, Lumpia',
        price: '$5.00',
        description: 'Porción individual de arroz frito acompañado de carne salteada y lumpia frita.',
      },
      {
        name: 'Arroz Frito, Pollo Agridulce, Chop Suey',
        price: '$5.00',
        description:
          'Porción individual de arroz frito con pollo en salsa agridulce y chop suey de vegetales.',
      },
      {
        name: 'Arroz Frito, Costilla, Lumpia',
        price: '$11.00',
        description: 'Porción individual de arroz frito con costillas de cerdo y lumpia frita.',
      },
      {
        name: 'Arroz Frito, Pollo Agridulce, Lumpia',
        price: '$5.00',
        description: 'Porción individual de arroz frito con pollo agridulce y lumpia frita.',
      },
      {
        name: 'Arroz Blanco, Cerdo Asado, Mostaza',
        price: '$10.00',
        description: 'Servicio de arroz blanco servido con jugoso cerdo asado y vegetal de mostaza china.',
      },
      {
        name: 'Arroz Frito, Jamón, Pollo Agridulce',
        price: '$4.00',
        description: 'Porción individual de arroz frito con jamón y pollo agridulce.',
      },
    ],
  },
  {
    id: 'sopas',
    label: 'Sopas',
    title: 'Sopas',
    items: [
      {
        name: 'Sopa de Pepino de Mar',
        price: '$18.00',
        description: 'Caldo especial con buche de pescado, pepino de mar, camarones y calamar.',
      },
      {
        name: 'Sopa de Mariscos',
        price: '$14.00',
        description: 'Sopa concentrada con camarones, pescado, mejillones y calamar.',
      },
      {
        name: 'Sopa de Wanton',
        price: '$12.00',
        description: 'Caldo claro servido con wantons rellenos, zanahoria, brócoli y vainitas.',
      },
      {
        name: 'Sopa de Saibu',
        price: '$12.00',
        description: 'Sopa tradicional servida con tofu, carne de res, vegetales frescos y cilantro.',
      },
      {
        name: 'Sopa de Wanton Mein',
        price: '$12.00',
        description: 'Caldo tradicional con fideos finos mein y wantons rellenos.',
      },
      {
        name: 'Sopa de Tallarín con Mostaza y Pato Asado',
        price: '$17.00',
        description: 'Sopa de fideos acompañada de hojas de mostaza china y cortes de pato asado.',
      },
      {
        name: 'Sopa de Tallarín con Carne',
        price: '$13.00',
        description: 'Sopa de caldo sazonado con fideos y tiras de carne de res.',
      },
      {
        name: 'Sopa de Tallarín con Cerdo Asado',
        price: '$13.00',
        description: 'Sopa de fideos servida con sabrosos cortes de cerdo asado char siu.',
      },
    ],
  },
  {
    id: 'arroz',
    label: 'Arroz',
    title: 'Arroz',
    items: [
      {
        name: 'Arroz Estilo Cantonés',
        price: '$12.00',
        description: 'Arroz frito clásico estilo cantonés, salteado al wok con tiritas de carne, pollo y cerdo.',
      },
      {
        name: 'Arroz Dos Sabores',
        price: '$10.00',
        description: 'Arroz servido con camarón y pollo en salsa.',
      },
      {
        name: 'Arroz Especial',
        price: '$10.00',
        description: 'Arroz frito salteado con jamón, pollo y cerdo.',
      },
      {
        name: 'Arroz Frito con Pollo',
        price: '$8.00',
        description: 'Clásico arroz salteado al wok con tiras de pollo.',
      },
      {
        name: 'Arroz Frito con Mariscos en Olla',
        price: '$12.00',
        description: 'Arroz salteado con camarón, calamar y mejillones, servido en olla.',
      },
    ],
  },
  {
    id: 'tallarines',
    label: 'Tallarines',
    title: 'Tallarines / Chow Mein',
    items: [
      {
        name: 'Tallarín Salteado con Carne',
        price: '$13.00',
        description: 'Fideos salteados al wok con tiritas de carne de res.',
      },
      {
        name: 'Tallarín Salteado con Pollo y Camarones',
        price: '$15.00',
        description: 'Fideos salteados con combinación de pollo y camarones frescos.',
      },
      {
        name: 'Tallarín Salteado con Marisco Mix',
        price: '$18.00',
        description: 'Fideos salteados al wok con mixtura de mariscos seleccionados.',
      },
      {
        name: 'Tallarín Frito con Pollo',
        price: '$13.00',
        description: 'Fideos dorados y crujientes con trozos de pollo.',
      },
      {
        name: 'Tallarín Frito con Pollo, Camarón en Salsa de Ostra',
        price: '$15.00',
        description: 'Fideos crujientes salteados con pollo, camarón y bañados en salsa de ostras.',
      },
    ],
  },
  {
    id: 'vegetales',
    label: 'Vegetales',
    title: 'Vegetales',
    items: [
      {
        name: 'Vegetales Buda',
        price: '$15.00',
        description: 'Plato tradicional con salteado de carne de res y vegetales variados.',
      },
      {
        name: 'Mostaza con Salsa de Ostra',
        price: '$10.00',
        description: 'Hojas frescas de mostaza china salteadas en salsa de ostras.',
      },
      {
        name: 'Flor de Cebollín al Ajillo',
        price: '$10.00',
        description: 'Tallos de flor de cebollín salteados a fuego alto con ajo picado.',
      },
      {
        name: 'Vegetal Mix con Tawfu',
        price: '$12.00',
        description: 'Surtido de vegetales salteados acompañados de tofu sazonado.',
      },
    ],
  },
  {
    id: 'chopsuey',
    label: 'Chop Suey',
    title: 'Chop Suey',
    items: [
      {
        name: 'Chop Suey Pollo, Camarones',
        price: '$11.00',
        description: 'Salteado de brotes de soya y vegetales frescos con pollo y camarones.',
      },
      {
        name: 'Chop Suey 3 Ingredientes (Carne, Pollo y Cerdo)',
        price: '$14.00',
        description: 'Combinación de tres proteínas salteadas al wok con vegetales variados.',
      },
      {
        name: 'Chop Suey de Pollo',
        price: '$9.00',
        description: 'Salteado de brotes de soya, vegetales y finas tiras de pollo.',
      },
      {
        name: 'Chop Suey de Camarón',
        price: '$14.00',
        description: 'Abundantes camarones frescos salteados con vegetales crujientes.',
      },
      {
        name: 'Chop Suey Especial',
        price: '$12.00',
        description: 'Salteado vegetal clásico con trozos de jamón, cerdo y pollo.',
      },
    ],
  },
  {
    id: 'pollo',
    label: 'Pollo',
    title: 'Pollo',
    items: [
      {
        name: 'Pollo Agridulce',
        price: '$8.00',
        description: 'Trozos de pollo crujientes bañados en la clásica salsa agridulce.',
      },
      {
        name: 'Pollo En Salsa Miel',
        price: '$14.00',
        description: 'Trozos de pollo bañados en una espesa salsa de miel.',
      },
      {
        name: 'Pollo Salteado',
        price: '$15.00',
        description: 'Trozos de pollo salteados al wok con champiñones y maíz tierno, surtido de vegetales frescos.',
      },
      {
        name: 'Pollo en Salsa de Ostra',
        price: '$14.00',
        description: 'Pollo en lonjas salteado en rica salsa de ostras estilo oriental.',
      },
      {
        name: 'Pollo en Salsa Curry',
        price: '$14.00',
        description: 'Trozos de pollo bañado en una cremosa salsa de curry, salteado con vegetales y especias picantes.',
      },
      {
        name: 'Pollo en Salsa Teriyaki',
        price: '$13.00',
        description: 'Trozos de pollo bañados en suave salsa teriyaki.',
      },
    ],
  },
  {
    id: 'carne',
    label: 'Carne',
    title: 'Carne',
    items: [
      {
        name: 'Solomo en Salsa de Ostra',
        price: '$14.00',
        description: 'Tiras suaves de solomo de res salteadas en salsa de ostras.',
      },
      {
        name: 'Carne Salteada con Brócoli',
        price: '$13.00',
        description: 'Carne de res salteada con brócoli y surtido con vegetales.',
      },
      {
        name: 'Carne Salteada con Vegetal',
        price: '$15.00',
        description: 'Carne de res salteada con champiñones, maíz tierno y brócoli, surtido de vegetales crujientes y salsa cremosa.',
      },
      {
        name: 'Pang Chen Choi (Ocho Tesoros)',
        price: '$18.00',
        description: 'Salteado de ocho proteínas sobre vegetales crujientes y salsas.',
      },
      {
        name: 'Carne Salteada con Mostaza',
        price: '$14.00',
        description: 'Lomito salteado al wok con hojas de mostaza china fresca.',
      },
      {
        name: 'Lomito en Salsa de Jengibre',
        price: '$14.00',
        description: 'Tiras de carne sazonadas y cocinadas en salsa de jengibre y cebollín.',
      },
    ],
  },
  {
    id: 'cerdo',
    label: 'Cerdo y Costillas',
    title: 'Cerdo y Costillas',
    items: [
      {
        name: 'Cerdo Asado',
        price: '$16.00',
        description: 'Cortes de cerdo marinados y asados al estilo char siu.',
      },
      {
        name: 'Cerdo en Salsa Agridulce',
        price: '$15.00',
        description: 'Trozos de cerdo empanizados con salsa agridulce.',
      },
      {
        name: 'Cerdo con Salsa Ostra',
        price: '$15.00',
        description: 'Láminas de cerdo salteadas en reducción de salsa de ostras.',
      },
      {
        name: 'Costillas Asadas',
        price: '$13.00',
        description: 'Costillas de cerdo horneadas y glaseadas con salsa barbacoa oriental.',
      },
      {
        name: 'Costillas con Sal y Pimienta',
        price: '$15.00',
        description: 'Trozos de costilla fritos y sazonados con sal y pimienta china.',
      },
      {
        name: 'Costillas con Salsa Uva',
        price: '$17.00',
        description: 'Costillas de cerdo en salsa especial reducida de uva.',
      },
      {
        name: 'Belly Crispy (½ porción)',
        price: '$10.00',
        description: 'Chicharrón de panceta de cerdo frito con piel crujiente.',
      },
    ],
  },
  {
    id: 'camarones',
    label: 'Camarones',
    title: 'Camarones',
    items: [
      {
        name: 'Camarones al Ajillo',
        price: '$14.00',
        description: 'Camarones salteados con ajo dorado y finas hierbas.',
      },
      {
        name: 'Camarones Buda',
        price: '$14.00',
        description: 'Camarones frescos salteados al wok con surtido de vegetales.',
      },
      {
        name: 'Camarones en Salsa Ostra',
        price: '$15.00',
        description: 'Camarones jugosos cocinados en suave salsa de ostras.',
      },
      {
        name: 'Camarones con salsa de Champiñones',
        price: '$15.00',
        description: 'Camarones bañados en la tradicional salsa de champiñones.',
      },
    ],
  },
  {
    id: 'langostinos',
    label: 'Langostinos',
    title: 'Langostinos',
    items: [
      {
        name: 'Langostinos Salteados con Sal y Pimienta',
        price: '$16.00',
        description: 'Langostinos salteados a fuego alto con sal marina, pimienta y pimientos.',
      },
      {
        name: 'Langostinos al Vapor con Ajo y Fideo',
        price: '$16.50',
        description: 'Langostinos al vapor sobre fideos finos de arroz o pasta china bañados en ajo.',
      },
      {
        name: 'Langostinos Salteados con Salsa de Soya',
        price: '$16.00',
        description: 'Langostinos salteados en reducción ligera de salsa de soya.',
      },
      {
        name: 'Langostinos en Salsa Agridulce',
        price: '$15.00',
        description: 'Langostinos fritos bañados en salsa agridulce.',
      },
      {
        name: 'Langostinos Sin Concha Salteado con Brócoli, Champiñones y Jojoticos',
        price: '$16.00',
        description: 'Langostinos limpios salteados con vegetales crujientes al wok.',
      },
    ],
  },
  {
    id: 'mariscos',
    label: 'Mariscos',
    title: 'Mariscos',
    items: [
      {
        name: 'Meros Salteado con Brócoli, Champiñones y Jojoticos',
        price: '$16.00',
        description: 'Filete o trozos de mero salteados con brócoli, champiñones y jojoticos.',
      },
      {
        name: 'Calamar Salteado con Sal y Pimienta',
        price: '$16.50',
        description: 'Trozos de calamar frito/salteado con sal, pimienta y vegetales.',
      },
      {
        name: 'Marisco Mix con Arroz en Olla',
        price: '$18.00',
        description: 'Arroz salteado con mixtura de mariscos servido en olla caliente.',
      },
      {
        name: 'Mejillones a la Plancha con Ajillos',
        price: '$17.00',
        description: 'Mejillones salteados a la plancha con abundante ajo sazonado.',
      },
    ],
  },
  {
    id: 'chuleta',
    label: 'Chuletas',
    title: 'Chuletas',
    items: [
      {
        name: 'Chuleta en Salsa Agridulce',
        price: '$13.00',
        description: 'Chuleta crujiente bañada en salsa agridulce y surtido de vegetales frescos.',
      },
      {
        name: 'Chuleta en Salsa de Ciruela',
        price: '$14.00',
        description: 'Cortes jugosos de chuleta dorados al wok y glaseados en salsa de ciruelas chinas.',
      },
      {
        name: 'Chuletas con Sal y Pimienta',
        price: '$11.00',
        description: 'Trozos de chuleta fritos en doble técnica, salteados al seco con sal y pimienta.',
      },
      {
        name: 'Chuleta en Salsa de Ostras',
        price: '$13.00',
        description: 'Lonjas de cerdo salteadas con vegetales crujientes y bañadas en rica salsa de ostión tradicional.',
      },
    ],
  },
  {
    id: 'pato',
    label: 'Pato',
    title: 'Pato',
    items: [
      {
        name: '½ Pato Asado Estilo Hong Kong',
        price: '$24.00',
        description: 'Medio pato marinado en especias orientales, asado lentamente con piel dorada y crujiente, y carne jugosa con salsa de asado concentrada.',
      },
      {
        name: '½ Pato Guisado a las Cinco Especias',
        price: '$24.00',
        description: 'Tiernas piezas de medio pato estofadas a fuego lento en salsa agridulce y especiada.',
      },
      {
        name: 'Pechuga de Pato en Salsa de la Casa',
        price: '$20.00',
        description: 'Jugosa pechuga de pato salteada al wok, servida sobre vegetales crujientes y glaseada en salsa secreta del chef.',
      },
      {
        name: 'Pato Estofado con Jengibre en Cazuela Hirviente',
        price: '$25.00',
        description: 'Trozos de pato estofados a alta temperatura con jengibre fresco.',
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    title: 'Bebidas',
    items: [
      {
        name: 'Jugos Naturales (1 Litro)',
        price: '$4.00',
        description: 'Jugo natural preparado al momento, presentación de 1 litro.',
      },
      {
        name: 'Refresco de Botella (350 ml)',
        price: '$1.20',
        description: 'Refresco en botella individual de 350 ml.',
      },
      {
        name: 'Refresco de 1 Litro',
        price: '$2.00',
        description: 'Refresco en presentación de 1 litro.',
      },
      {
        name: 'Refresco de 2 Litros',
        price: '$3.00',
        description: 'Refresco en presentación familiar de 2 litros.',
      },
      {
        name: 'Agua Mineral 360ml',
        price: '$1.20',
        description: 'Botella de agua mineral.',
      },
      {
        name: 'Agua Mineral 600ml',
        price: '$2.00',
        description: 'Botella de agua mineral.',
      },
      {
        name: 'Agua Saborizada',
        price: '$2.50',
        description: 'Botella de agua saborizada.',
      },
      {
        name: 'Cerveza Nacional',
        price: '$1.50',
        description: 'Cerveza nacional bien fría.',
      },
      {
        name: 'Tobo de Cervezas (8 piezas)',
        price: '$10.00',
        description: 'Tobo con 8 cervezas nacionales heladas.',
      },
    ],
  },
]
