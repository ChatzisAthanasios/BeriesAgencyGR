import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { navigation } from '../data/navigation';

export const Sidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['company-home']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col h-screen overflow-y-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&crop=faces"
            alt="Berries Agency Logo"
            className="w-8 h-8 rounded-lg"
          />
          <h1 className="text-xl font-bold text-gray-800">Berries Agency OS</h1>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navigation.map((category) => (
          <div key={category.id}>
            <div
              onClick={() => toggleCategory(category.id)}
              className={clsx(
                'flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors',
                category.highlight ? `bg-${category.color}-50 text-${category.color}-600` : 'hover:bg-gray-50 text-gray-700'
              )}
            >
              <div className="flex items-center space-x-3">
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </div>
              {category.items.length > 0 && (
                expandedCategories.includes(category.id) 
                  ? <ChevronDown className="w-4 h-4" />
                  : <ChevronRight className="w-4 h-4" />
              )}
            </div>
            
            {expandedCategories.includes(category.id) && category.items.length > 0 && (
              <div className="ml-9 mt-1 space-y-1">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 text-gray-600"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.emoji && <span>{item.emoji}</span>}
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">Βασίλης</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}