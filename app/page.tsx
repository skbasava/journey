import { TournamentHero } from '@/components/tournament-hero';
import { RegistrationForm } from '@/components/registration-form';
import { TournamentInfo } from '@/components/tournament-info';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TournamentHero />
      <div className="container mx-auto px-4 py-12">
        <TournamentInfo />
        <RegistrationForm />
      </div>
    </main>
  );
}
