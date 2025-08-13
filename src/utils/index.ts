import { Program } from "../../types";

const cover1 = require('~/images/cover1.avif')
const cover2 = require('~/images/cover2.avif')
const cover3 = require('~/images/cover3.avif')
const cover4 = require('~/images/cover3.avif')

export const programs: Program[] = [
  {
    cover: cover1,
    mentorGender: "women",
    mentorName: "Edith Brou-Bleu",
    programName: "Maîtriser sa Productivité Personnelle",
    programDescription:
      "Organisez votre travail et gérez vos priorités pour atteindre vos objectifs sans vous épuiser",
    tag: "Productivité",
  },
  {
    cover: cover2,
    mentorGender: "men",
    mentorName: "Didier Drogba",
    programName: "Leadership : Incarner le Changement",
    programDescription:
      "Apprenez à mobiliser et à inspirer vos équipes pour naviguer avec succès.",
    tag: "Leadership",
  },
  {
    cover: cover3,
    mentorGender: "women",
    mentorName: "Janine Kacou Diagou",
    programName: "La Boîte à Outils du Manager Efficace",
    programDescription:
      "Maîtrisez les techniques essentielles pour déléguer, motiver et donner du feedback.",
    tag: "Management",
  },
  {
    cover: cover4,
    mentorGender: "men",
    mentorName: "Tidjane Thiam",
    programName: "Finance pour Dirigeants et Managers",
    programDescription:
      "Prenez des décisions éclairées en maîtrisant les indicateurs financiers clés.",
    tag: "Finance",
  },
];