import { Program } from "../../types";

const cover1 = require("~/images/cover1.png");
const cover2 = require("~/images/cover2.png");
const cover3 = require("~/images/cover3.png");
const cover4 = require("~/images/cover3.png");

export const programs: Program[] = [
  {
    avatar: "avatar2",
    cover: cover1,
    price: 120_000,
    mentorGender: "women",
    mentorName: "Edith Brou-Bleu",
    mentorTitle: "Experte en productivité, Abidjan",
    mentorBio:
      "Spécialiste en organisation et productivité, Edith Brou-Bleu aide les professionnels et entrepreneurs à reprendre le contrôle de leur temps et à atteindre une efficacité maximale sans stress. Sa méthode est basée sur des outils concrets et une psychologie de la performance.",
    programName: "Maîtriser sa Productivité Personnelle",
    programDescription:
      "Organisez votre travail et gérez vos priorités pour atteindre vos objectifs sans vous épuiser",
    about:
      "Ce programme est une immersion complète dans les meilleures stratégies de productivité. Vous apprendrez à déconstruire vos habitudes, à identifier les goulets d'étranglement dans votre workflow et à mettre en place un système personnalisé qui fonctionne pour vous, sur le long terme.",
    objectives: [
      "Prioriser vos tâches avec la matrice d'Eisenhower.",
      "Maîtriser la technique Pomodoro pour une concentration absolue.",
      "Organiser votre espace de travail numérique (fichiers, emails).",
      "Planifier votre semaine pour un maximum d'impact et de sérénité.",
    ],
    targetPeople:
      "Pour les professionnels débordés, les freelances cherchant à optimiser leur temps, et les étudiants souhaitant développer de saines habitudes de travail avant de se lancer dans leur carrière.",
    testimonials: [
      {
        learnerName: "Marc K.",
        learnerTitle: "Développeur Freelance",
        avatar: "https://avatar.iran.liara.run/public/boy",
        text: "J'ai doublé mon rendement en appliquant les principes d'Edith. C'est simple, direct et incroyablement efficace. Je ne me sens plus jamais dépassé.",
      },
      {
        learnerName: "Carine A.",
        learnerTitle: "Chef de Projet",
        avatar: "https://avatar.iran.liara.run/public/girl",
        text: "Ce programme a changé ma vie professionnelle. J'ai appris à dire non et à me concentrer sur ce qui compte vraiment. Mon stress a diminué de moitié.",
      },
      {
        learnerName: "Lucas D.",
        learnerTitle: "Consultant Junior",
        avatar: "https://avatar.iran.liara.run/public/boy?username=lucas",
        text: "Une révélation ! Les outils sont directement applicables et ont un impact immédiat sur ma charge de travail quotidienne.",
      },
      {
        learnerName: "Sophie M.",
        learnerTitle: "Entrepreneure",
        avatar: "https://avatar.iran.liara.run/public/girl?username=sophie",
        text: "Grâce à Edith, j'ai enfin un système qui tient la route. Je gagne au moins 10 heures par semaine. Indispensable.",
      },
    ],
    tag: "Productivité",
  },
  {
    avatar: "avatar1",
    cover: cover2,
    price: 250_000,
    mentorGender: "men",
    mentorName: "Didier Drogba",
    mentorTitle: "Leader et philanthrope, Abidjan",
    mentorBio:
      "Légende du football et philanthrope, Didier Drogba partage les leçons de leadership apprises sur les terrains les plus exigeants du monde et dans ses engagements humanitaires. Son approche est basée sur la résilience, la vision et la capacité à unir une équipe autour d'un objectif commun.",
    programName: "Leadership : Incarner le Changement",
    programDescription:
      "Apprenez à mobiliser et à inspirer vos équipes pour naviguer avec succès.",
    about:
      "Le leadership n'est pas un titre, c'est une action. Ce programme vous met au défi de devenir un leader qui inspire confiance et motive l'excellence. À travers des études de cas et des mises en situation, vous forgerez votre propre style de leadership authentique.",
    objectives: [
      " Développer une vision claire et la communiquer avec impact.",
      "Gérer les conflits et renforcer la cohésion d'équipe.",
      "Motiver ses collaborateurs, même en période d'incertitude.",
      "Prendre des décisions difficiles avec courage et conviction.",
    ],
    targetPeople:
      "Pour les managers, chefs d'entreprise, capitaines d'équipe et toute personne en position de leadership qui souhaite avoir un impact positif et durable sur son environnement.",
    testimonials: [
      {
        learnerName: "Isabelle G.",
        learnerTitle: "CEO de Startup",
        avatar: "https://avatar.iran.liara.run/public/girl?username=isabelle",
        text: "Le charisme et la sagesse de Didier sont contagieux. Il m'a appris à diriger avec le cœur autant qu'avec la tête. Mon équipe n'a jamais été aussi soudée.",
      },
      {
        learnerName: "Ahmed B.",
        learnerTitle: "Directeur des Opérations",
        avatar: "https://avatar.iran.liara.run/public/boy?username=ahmed",
        text: "Une formation qui va bien au-delà des théories de management. C'est une leçon de vie sur la responsabilité et l'impact d'un leader. Inestimable.",
      },
      {
        learnerName: "Marie C.",
        learnerTitle: "Capitaine d'équipe sportive",
        avatar: "https://avatar.iran.liara.run/public/girl?username=marie",
        text: "Didier nous transmet sa 'gagne'. J'ai appris à pousser mon équipe à se dépasser tout en gardant une cohésion forte.",
      },
      {
        learnerName: "Thomas L.",
        learnerTitle: "Chef de département",
        avatar: "https://avatar.iran.liara.run/public/boy?username=thomas",
        text: "J'ai totalement changé ma posture de manager. Je suis passé de 'chef' à 'leader'. L'ambiance et les résultats s'en ressentent.",
      },
    ],
    tag: "Leadership",
  },
  {
    avatar: "avatar3",
    cover: cover3,
    price: 180_000,
    mentorGender: "women",
    mentorName: "Janine Kacou Diagou",
    mentorTitle: "Stratège en management, Abidjan",
    mentorBio:
      "Figure emblématique du monde des affaires en Afrique, Janine Kacou Diagou offre une perspective pragmatique et éprouvée sur le management moderne. Elle a dirigé de grandes équipes et transformé des organisations grâce à des principes de gestion clairs et humains.",
    programName: "La Boîte à Outils du Manager Efficace",
    programDescription:
      "Maîtrisez les techniques essentielles pour déléguer, motiver et donner du feedback.",
    about:
      "Ce séminaire est un concentré d'outils pratiques pour le manager moderne. Fini la théorie, place à l'action. Vous repartirez avec des modèles, des scripts et des stratégies que vous pourrez appliquer dès le lendemain au bureau pour améliorer la performance de votre équipe.",
    objectives: [
      " Déléguer efficacement pour responsabiliser vos collaborateurs.",
      "Donner du feedback constructif qui motive et fait progresser.",
      "Animer des réunions qui se terminent à l'heure avec des décisions claires.",
      "Fixer des objectifs SMART qui alignent l'équipe sur une vision commune.",
    ],
    targetPeople:
      "Idéal pour les managers nouvellement promus, les chefs d'équipe qui veulent monter en compétence, et les responsables de département cherchant à harmoniser leurs pratiques managériales.",
    testimonials: [
      {
        learnerName: "Paul N.",
        learnerTitle: "Manager fraîchement promu",
        avatar: "https://avatar.iran.liara.run/public/boy?username=paul",
        text: "J'étais terrifié à l'idée de manager. Cette formation m'a donné un cadre clair et la confiance nécessaire. C'est mon guide de survie.",
      },
      {
        learnerName: "Aïssata T.",
        learnerTitle: "Responsable RH",
        avatar: "https://avatar.iran.liara.run/public/girl?username=aissata",
        text: "Nous avons inscrit tous nos managers à ce programme. L'impact sur la communication interne et la performance a été immédiat et mesurable. Un investissement indispensable.",
      },
      {
        learnerName: "David L.",
        learnerTitle: "Chef d'équipe",
        avatar: "https://avatar.iran.liara.run/public/boy?username=david",
        text: "Concret, pratique, et sans langue de bois. On repart avec des solutions, pas juste de la théorie. Je recommande à 100%.",
      },
      {
        learnerName: "Nina K.",
        learnerTitle: "Superviseur de production",
        avatar: "https://avatar.iran.liara.run/public/girl?username=nina",
        text: "Mes entretiens individuels sont devenus un vrai moment d'échange constructif. Ça a tout changé dans ma relation avec mon équipe.",
      },
    ],
    tag: "Management",
  },
  {
    avatar: "avatar4",
    cover: cover4,
    price: 350_000,
    mentorGender: "men",
    mentorName: "Tidjane Thiam",
    mentorTitle: "Expert en finance internationale, Abidjan",
    mentorBio:
      "Avec une carrière au sommet de la finance mondiale, Tidjane Thiam a une capacité unique à démystifier les concepts financiers les plus complexes. Il rend la finance accessible et actionnable pour les dirigeants et entrepreneurs qui ne sont pas des spécialistes, mais qui ont besoin de piloter leur entreprise par les chiffres.",
    programName: "Finance pour Dirigeants et Managers",
    programDescription:
      "Prenez des décisions éclairées en maîtrisant les indicateurs financiers clés.",
    about:
      "Ne laissez plus la finance être un frein à votre ambition. Ce cours est conçu pour les leaders non-financiers. Vous apprendrez à lire les états financiers, à construire un budget, à évaluer la rentabilité d'un projet et à parler le même langage que vos investisseurs et votre expert-comptable.",
    objectives: [
      "Lire et interpréter un compte de résultat, un bilan et un tableau de flux.",
      "Construire un budget prévisionnel solide pour anticiper l'avenir.",
      "Maîtriser les indicateurs de performance clés (KPIs) de votre secteur.",
      "Comprendre les mécanismes de la valorisation et de la levée de fonds.",
    ],
    targetPeople:
      "Pour les entrepreneurs, les dirigeants de PME, les porteurs de projet et tout manager souhaitant prendre des décisions plus éclairées en comprenant l'impact financier de ses actions.",
    testimonials: [
      {
        learnerName: "Fanta C.",
        learnerTitle: "Fondatrice, marque e-commerce",
        avatar: "https://avatar.iran.liara.run/public/girl?username=fanta",
        text: "Tidjane explique la finance avec une clarté déconcertante. J'ai enfin compris ma propre rentabilité et j'ai pu optimiser mes marges. Mon entreprise est plus saine aujourd'hui.",
      },
      {
        learnerName: "Kevin M.",
        learnerTitle: "Entrepreneur Tech",
        avatar: "https://avatar.iran.liara.run/public/boy?username=kevin",
        text: "Ce cours m'a donné la crédibilité nécessaire pour discuter avec des fonds d'investissement. Je maîtrise mes chiffres et je peux défendre mon business plan avec confiance.",
      },
      {
        learnerName: "Olivier R.",
        learnerTitle: "DG de PME",
        avatar: "https://avatar.iran.liara.run/public/boy?username=olivier",
        text: "Essentiel. Tout dirigeant devrait suivre cette formation pour vraiment piloter son entreprise. Ça m'a ouvert les yeux sur beaucoup de choses.",
      },
      {
        learnerName: "Hélène B.",
        learnerTitle: "Directrice Artistique",
        avatar: "https://avatar.iran.liara.run/public/girl?username=helene",
        text: "Moi qui suis une créative, la finance était ma bête noire. Tidjane Thiam a réussi à rendre ça intéressant et surtout, utile pour mon activité.",
      },
    ],
    tag: "Finance",
  },
  {
    avatar: "avatar3",
    cover: cover4,
    payAvailable: true,
    price: 50_000,
    mentorGender: "women",
    mentorName: "Aya Konan",
    mentorTitle: "",
    mentorBio:
      "Avec plus de 15 ans d'expérience, Aya Konan est une figure de proue du coaching en communication en Côte d'Ivoire. Elle a accompagné des centaines de dirigeants et d'entrepreneurs à maîtriser l'art du storytelling pour transformer leurs entreprises.\nPassionnée par le potentiel humain, Aya croit fermement que chaque histoire, bien racontée, peut changer le monde. Son approche unique, qui allie techniques de narration traditionnelles et stratégies de communication modernes, en fait une mentore recherchée et respectée.",
    programName: "Devenez un pro du Storytelling",
    programDescription:
      "Racontez des histoires qui marquent et boostez votre carrière.",
    about:
      "Ce programme intensif est conçu pour transformer votre manière de communiquer. En s'appuyant sur les techniques des plus grands orateurs, vous apprendrez à captiver votre audience, à structurer vos idées avec clarté et à utiliser votre voix pour inspirer confiance. Chaque module combine théorie et exercices pratiques pour une progression rapide et durable.",
    objectives: [
      "Développer une confiance inébranlable en prise de parole.",
      "Structurer des récits qui captivent et persuadent.",
      "Utiliser le langage corporel pour renforcer votre message.",
      "Adapter votre ton pour chaque type d'audience.",
    ],
    targetPeople:
      "Idéal pour les entrepreneurs, les managers, les chefs de projet, et toute personne souhaitant améliorer son impact à l'oral. Que vous prépariez une présentation cruciale, un pitch pour des investisseurs ou que vous vouliez simplement être plus à l'aise en réunion, ce programme est fait pour vous.",
    testimonials: [
      {
        learnerName: "Koffi Traoré",
        learnerTitle: "Fondateur, Tech Ivoire",
        avatar: "https://avatar.iran.liara.run/public/boy?username=KoffiTraore",
        text: "Aya a une capacité incroyable à identifier vos points faibles et à les transformer en forces. Son coaching personnalisé sur mon pitch a été déterminant pour convaincre les investisseurs. C'est bien plus qu'une mentore, c'est un véritable accélérateur de succès.",
      },
      {
        learnerName: "Fatou Diarra",
        learnerTitle: "Manager Marketing",
        avatar:
          "https://avatar.iran.liara.run/public/girl?username=FatouDiarra",
        text: "Le suivi avec Aya m'a donné les clés pour devenir une leader plus affirmée. Ses conseils pratiques et son écoute bienveillante m'ont aidée à gagner confiance en moi. Je communique aujourd'hui avec un impact que je ne me soupçonnais pas.",
      },
      {
        learnerName: "Jean-Philippe K.",
        learnerTitle: "Avocat",
        avatar: "https://avatar.iran.liara.run/public/boy?username=jpk",
        text: "L'art de la plaidoirie et celui du storytelling sont très proches. Aya m'a donné des outils pour structurer mes arguments de manière beaucoup plus percutante.",
      },
      {
        learnerName: "Mariam S.",
        learnerTitle: "Commerciale",
        avatar: "https://avatar.iran.liara.run/public/girl?username=mariam",
        text: "Mes présentations produits sont passées de listes de features à des histoires captivantes. Mes ventes ont augmenté de 20% depuis que j'applique ses méthodes.",
      },
    ],
    tag: "Leadership",
    variables: {
      mentor_card_alt1: true,
      similar_program_alt1: true,
    },
  },
];
