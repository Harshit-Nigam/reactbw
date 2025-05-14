
import AppHeader from '@/components/AppHeader';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, MapPin as MapPinIcon } from 'lucide-react';

const DiscoverPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 max-w-md mx-auto shadow-lg">
      <AppHeader />
      <main className="flex-grow overflow-y-auto pb-16"> 
        
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex space-x-2">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-4 py-1 text-sm">All</Button>
            <Button variant="outline" className="rounded-full px-4 py-1 text-sm border-gray-300 text-gray-600 hover:bg-gray-50">Entertainment</Button>
            <Button variant="outline" className="rounded-full px-4 py-1 text-sm border-gray-300 text-gray-600 hover:bg-gray-50">Lifestyle</Button>
          </div>
        </div>

        
        <div className="bg-white m-4 rounded-lg shadow">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">Test User</p>
                <p className="text-xs text-gray-500">Bhopal, Madhya ...</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="rounded-full text-cyan-600 border-cyan-600 hover:bg-cyan-50 text-xs px-3 py-1">Follow</Button>
          </div>
          
          
          <div className="w-full h-60 bg-black flex items-center justify-center text-white">
            Video/Image Content
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
              <span>Apr 5, 2025</span>
              <span>Aviation | 8 Views</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              This is a sample post caption. It can be a few lines long.
            </p>
            <div className="flex items-center justify-between mb-3">
                <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-red-500 text-xs">
                        <Heart className="h-4 w-4 mr-1" /> 1
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-500 text-xs">
                        <Share2 className="h-4 w-4 mr-1" /> Share
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-green-500 text-xs">
                        <MessageCircle className="h-4 w-4 mr-1" /> 1
                    </button>
                </div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <MapPinIcon className="h-3 w-3 mr-1" />
              Peer Gate Area, Bhopal, Bhopal Division, ...
            </div>
          </div>
        </div>
        
       
        <div className="p-4 text-center text-gray-400">
            More posts would appear here.
        </div>

      </main>
      <BottomNav />
    </div>
  );
};

export default DiscoverPage;
