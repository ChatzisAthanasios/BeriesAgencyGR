import React from 'react';
import { AlertTriangle, Info, Lightbulb, ExternalLink } from 'lucide-react';

const Alert = ({ icon: Icon, title, children, type }) => (
  <div className={`p-4 rounded-lg mb-4 ${
    type === 'warning' ? 'bg-amber-50' :
    type === 'info' ? 'bg-blue-50' :
    type === 'tip' ? 'bg-orange-50' :
    'bg-gray-50'
  }`}>
    <div className="flex items-start">
      <Icon className={`w-5 h-5 mr-3 ${
        type === 'warning' ? 'text-amber-500' :
        type === 'info' ? 'text-blue-500' :
        type === 'tip' ? 'text-orange-500' :
        'text-gray-500'
      }`} />
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

const QuickAccessCard = ({ title, icon: Icon }) => (
  <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all hover:border-gray-300">
    <div className="flex items-center space-x-3">
      <Icon className="w-5 h-5 text-gray-500" />
      <h3 className="font-medium text-gray-900">{title}</h3>
    </div>
  </div>
);

export const Overview = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome to Berries Agency OS! 🚀</h1>
            <p className="text-gray-600">Your complete digital agency management system</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=120&fit=crop"
            alt="Berries Agency"
            className="w-24 h-24 rounded-xl"
          />
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <QuickAccessCard title="Company Dashboard" icon={Info} />
            <QuickAccessCard title="Tasks Dashboard" icon={AlertTriangle} />
            <QuickAccessCard title="Project Dashboard" icon={Lightbulb} />
            <QuickAccessCard title="Team Directory" icon={ExternalLink} />
          </div>

          <h2 className="text-xl font-semibold mb-4">Tips & Advice</h2>
          
          <Alert icon={AlertTriangle} title="Warning" type="warning">
            <p className="text-amber-700">Inviting team members to this page will give them access to everything.</p>
          </Alert>

          <Alert icon={Lightbulb} title="Pro Tip" type="tip">
            <p className="text-orange-700">Add frequently used pages to favorites for quick access by right-clicking
            and selecting "Add to Favorites".</p>
          </Alert>

          <Alert icon={Info} title="Important Note" type="info">
            <p className="text-blue-700">Make sure to turn off "allow duplicate as template" when sharing this
            page with your team.</p>
          </Alert>
        </div>
      </div>
    </div>
  );
}