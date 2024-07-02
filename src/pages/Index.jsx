import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-ufo.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">Discover the Mysteries of the Universe</h1>
          <p className="mt-4 text-xl">Explore the latest UFO sightings and research</p>
        </div>
      </section>

      {/* Sightings Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Sightings</h2>
        <Grid className="gap-8">
          {/* Example sightings */}
          <Card>
            <CardHeader>
              <CardTitle>Sighting 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: 2023-10-01</p>
              <p>Description: A bright light moving erratically in the night sky.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: 2023-09-15</p>
              <p>Description: A disc-shaped object hovering over the city.</p>
            </CardContent>
          </Card>
          {/* Add more sightings as needed */}
        </Grid>
      </section>

      {/* Research Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Research</h2>
        <Grid className="gap-8">
          {/* Example research articles */}
          <Card>
            <CardHeader>
              <CardTitle>Research Article 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Author: Dr. John Doe</p>
              <p>Summary: An in-depth analysis of recent UFO sightings.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Research Article 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Author: Dr. Jane Smith</p>
              <p>Summary: The impact of UFO sightings on public perception.</p>
            </CardContent>
          </Card>
          {/* Add more research articles as needed */}
        </Grid>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Textarea placeholder="Message" required />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;