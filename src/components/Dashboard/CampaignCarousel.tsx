
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Campaign {
  id: string;
  name: string;
  image: string;
  needsAdjustment: boolean;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Campanha Black Friday",
    image: "/placeholder.svg",
    needsAdjustment: false,
  },
  {
    id: "2",
    name: "Produtos de Verão",
    image: "/placeholder.svg",
    needsAdjustment: true,
  },
  {
    id: "3",
    name: "Lançamento Nova Coleção",
    image: "/placeholder.svg",
    needsAdjustment: false,
  },
  {
    id: "4",
    name: "Promoção Final de Ano",
    image: "/placeholder.svg",
    needsAdjustment: true,
  },
  {
    id: "5",
    name: "Campanha Volta às Aulas",
    image: "/placeholder.svg",
    needsAdjustment: false,
  },
];

const CampaignCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsPerView = 3;
  const maxIndex = Math.max(0, mockCampaigns.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleCampaignClick = (campaignId: string) => {
    navigate(`/dashboard/analysis/${campaignId}`);
  };

  return (
    <div className="relative mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Campanhas Ativas</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Campanha anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Próxima campanha"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {mockCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex-shrink-0 w-1/3 cursor-pointer"
              onClick={() => handleCampaignClick(campaign.id)}
              role="button"
              tabIndex={0}
              aria-label={`Analisar campanha ${campaign.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCampaignClick(campaign.id);
                }
              }}
            >
              <div
                className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                  campaign.needsAdjustment
                    ? "border-red-500 bg-red-50 hover:bg-red-100"
                    : "border-green-500 bg-green-50 hover:bg-green-100"
                }`}
              >
                <div className="aspect-square mb-3 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={`Imagem da ${campaign.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-center font-medium text-gray-900 text-sm">
                  {campaign.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignCarousel;
