
import AppHeader from '@/components/AppHeader';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Briefcase, Edit, Trash } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 max-w-md mx-auto shadow-lg">
      <AppHeader />
      <main className="flex-grow overflow-y-auto pb-16">
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/lovable.svg" alt="User Avatar" /> 
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">alice</h2>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Faridabad, Haryana</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>housewife</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="ml-auto self-start bg-cyan-600 hover:bg-cyan-700 text-white rounded-md px-4 py-1 text-xs">
              <Edit className="h-3 w-3 mr-1 inline-block"/> Edit
            </Button>
          </div>

          <div className="mb-6">
             <Button variant="destructive" size="sm" className="bg-red-700 hover:bg-red-800 text-white rounded-md px-4 py-1 text-xs w-full sm:w-auto">
                <Trash className="h-3 w-3 mr-1 inline-block"/> Trash Account
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center mb-6">
            <div>
              <p className="font-bold text-lg">0</p>
              <p className="text-xs text-gray-500">Feed</p>
            </div>
            <div>
              <p className="font-bold text-lg">0</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div>
              <p className="font-bold text-lg">0</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
            <div>
              <p className="font-bold text-lg">0</p>
              <p className="text-xs text-gray-500">Blocked</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-1">About me</h3>
            <p className="text-sm text-gray-700">
              na (This is where the user's bio would go. It can be multiple lines of text.)
            </p>
          </div>

          <div className="flex space-x-2 mb-6">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-md px-4 py-1 text-sm flex-1">Drafts</Button>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-md px-4 py-1 text-sm flex-1">History</Button>
          </div>

          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No Post</p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
