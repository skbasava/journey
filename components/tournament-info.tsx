import { Calendar, Users, Trophy, Medal, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { tournamentConfig } from '@/lib/tournament-config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TournamentInfo() {
  return (
    <section id="info" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{tournamentConfig.name}</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">{tournamentConfig.subtitle}</p>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="prizes">Prizes</TabsTrigger>
            <TabsTrigger value="format">Format</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <InfoCard
                icon={<Calendar className="w-6 h-6" />}
                title="Tournament Dates"
                description={tournamentConfig.dates.tournament}
              />
              <InfoCard
                icon={<Users className="w-6 h-6" />}
                title="Teams"
                description={`${tournamentConfig.teams.total} Teams (${tournamentConfig.teams.playersPerTeam} players each)`}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="prizes">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Prize Distribution</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Winner</span>
                    <span className="font-semibold">{tournamentConfig.prizes.first}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Runner Up</span>
                    <span className="font-semibold">{tournamentConfig.prizes.second}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Third Place</span>
                    <span className="font-semibold">{tournamentConfig.prizes.third}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="format">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Tournament Format</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Match Type</p>
                    <p className="text-muted-foreground">{tournamentConfig.format.type}</p>
                  </div>
                  <div>
                    <p className="font-medium">Structure</p>
                    <p className="text-muted-foreground">{tournamentConfig.format.stages}</p>
                  </div>
                  <div>
                    <p className="font-medium">Progression</p>
                    <p className="text-muted-foreground">{tournamentConfig.format.matches}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="registration">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Registration Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Fee</p>
                        <p className="text-muted-foreground">{tournamentConfig.registration.fee}</p>
                      </div>
                      <div>
                        <p className="font-medium">Deadline</p>
                        <p className="text-muted-foreground">{tournamentConfig.registration.deadline}</p>
                      </div>
                      <div>
                        <p className="font-medium">UPI ID</p>
                        <p className="text-muted-foreground">{tournamentConfig.registration.upiId}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src={tournamentConfig.registration.qrImage}
                        alt="Payment QR Code"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Scan to pay registration fee</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="flex items-center space-x-4 p-6">
        <div className="text-primary">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}