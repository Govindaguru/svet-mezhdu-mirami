
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-300 p-6 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-stone-800">
        Свет между мирами
      </h1>

      <Tabs defaultValue="gallery" className="w-full max-w-5xl">
        <TabsList className="grid grid-cols-3 bg-white/70">
          <TabsTrigger value="gallery">Галерея</TabsTrigger>
          <TabsTrigger value="courses">Практики</TabsTrigger>
          <TabsTrigger value="texts">Тексты</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery">
          <Card className="mt-4 bg-white/80 shadow-md">
            <CardContent className="p-6 text-stone-700">
              Здесь будут появляться образы: деревья, символы, порталы, артефакты.
              Место, где можно просто смотреть и чувствовать.
              (В будущем добавим возможность загружать изображения и описывать их энергию)
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <Card className="mt-4 bg-white/80 shadow-md">
            <CardContent className="p-6 text-stone-700">
              Здесь будут появляться практики, курсы и магические пути.
              Каждый элемент можно будет раскрывать, чтобы читать подробнее или записаться.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="texts">
          <Card className="mt-4 bg-white/80 shadow-md">
            <CardContent className="p-6 text-stone-700">
              Здесь будут собираться тексты: статьи, откровения, истории силы.
              В будущем можно будет сортировать по темам или датам.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="max-w-xl w-full shadow-xl bg-white/80 mt-8">
        <CardContent className="p-6 flex flex-col gap-4">
          <p className="text-lg text-stone-700">
            Оставь послание — если чувствуешь зов. Оно дойдёт.
          </p>
          <Textarea
            placeholder="Запиши то, что хочешь отразить здесь..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={() => alert("Послание принято.")}>Отправить</Button>
        </CardContent>
      </Card>

      <div className="text-sm text-stone-600 mt-8">
        © Свет между мирами. Пространство, где начинается путь.
      </div>
    </main>
  );
}
