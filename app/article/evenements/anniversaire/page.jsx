import Birthday from "../../../src/components/Main/Articles/Evenements/anniversaire/Birthday";

export const metadata = {
  title: "T.T. Farguais - 30 ans d'histoire",
  description: "Retour sur la célébration des 30 ans du T.T. Farguais.",
};

export default function BirthdayPage() {
  return (
    <>
    <head>
    <link rel="canonical" href="https://www.ttfarguais.fr/article/evenements/anniversaire" />
    </head>
    <Birthday></Birthday>
    </>
  );
}