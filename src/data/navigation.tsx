import {
  Home, Target, Rocket, TrendingUp, DollarSign, Gift, Wrench, Database, Archive,
  Clipboard, Users, MessageSquare, Layout, Crosshair, FileText, Package, Map,
  Focus, Smile, UserCheck, Route, CheckSquare, ArrowRight, Calendar,
  Coins, PresentationChart, HandCoins, Megaphone, UserPlus, PieChart,
  FileSpreadsheet, CreditCard, Palette, Calculator, Image, Trophy
} from 'lucide-react';
import { Category } from '../types/navigation';

export const navigation: Category[] = [
  {
    id: 'company-home',
    label: 'Company Home',
    icon: Home,
    color: 'red',
    highlight: true,
    items: [
      { label: 'Company Dashboard', icon: Clipboard },
      { label: 'Tasks Dashboard', icon: CheckSquare },
      { label: 'Project Dashboard', icon: Package },
      { label: 'Team Directory', icon: Users },
      { label: 'Feedback & Roadmap', icon: MessageSquare }
    ]
  },
  {
    id: 'plan',
    label: 'Plan',
    icon: Target,
    color: 'blue',
    items: [
      { label: 'Business Model', icon: Layout },
      { label: 'Goals & Objectives', icon: Crosshair },
      { label: 'Company Profile', icon: FileText },
      { label: 'Business Plan One-Pager', icon: FileText },
      { label: 'Value Proposition Canvas', icon: Gift },
      { label: 'Business Portfolio Map', icon: Map },
      { label: 'Company OKRs', icon: Focus },
      { label: 'Company Culture Map', icon: Smile },
      { label: 'Team Alignment Map', icon: UserCheck }
    ]
  },
  {
    id: 'launch',
    label: 'Launch',
    icon: Rocket,
    color: 'teal',
    items: [
      { label: 'Product Launch Plan', icon: Route },
      { label: 'Website Launch Checklist', icon: CheckSquare },
      { label: 'Product Hunt Launch Checklist', icon: Trophy }, // Changed from Hunt to Trophy
      { label: 'Strategic Plan', icon: ArrowRight },
      { label: 'Project Plan', icon: Calendar }
    ]
  },
  {
    id: 'grow',
    label: 'Grow',
    icon: TrendingUp,
    color: 'yellow',
    items: [
      { label: 'Capital', icon: Coins },
      { label: 'Pitching', icon: PresentationChart },
      { label: 'Investors Relationship Management', icon: HandCoins },
      { label: 'Marketing', icon: Megaphone },
      { label: 'CRM', icon: UserPlus },
      { label: 'Ads Budget Planner & ROI Calculator', icon: PieChart }
    ]
  },
  {
    id: 'financials',
    label: 'Financials',
    icon: DollarSign,
    color: 'orange',
    items: [
      { label: 'Financial Statement', icon: FileSpreadsheet },
      { label: 'Team Subscription Tracker', icon: CreditCard },
      { label: 'Team Salary', icon: DollarSign }
    ]
  },
  {
    id: 'bonus',
    label: 'Bonus',
    icon: Gift,
    color: 'pink',
    items: [
      { label: 'Graphical Elements', icon: Palette },
      { label: 'Personal Subscription Tracker', icon: Calculator },
      { label: 'Notion Startup OS Icon Library', icon: Image }
    ]
  },
  {
    id: 'tools-resources',
    label: 'Tools & Resources',
    icon: Wrench,
    color: 'brown',
    items: [
      { label: 'Free Icons', emoji: '📂' },
      { label: 'Website Builders & CRMs', emoji: '👨🏻‍💻' },
      { label: 'Email Marketing', emoji: '📧' },
      { label: 'Performance Check', emoji: '⚡' },
      { label: 'Responsive Check', emoji: '📱' },
      { label: 'Accessibility Check', emoji: '♿' },
      { label: 'Analytics', emoji: '📊' },
      { label: 'Automation', emoji: '🤖' },
      { label: 'Domain Registrars', emoji: '🌐' },
      { label: 'Grammar & Copyediting', emoji: '✅' },
      { label: 'Hosting', emoji: '🗄️' },
      { label: 'Ai Copywriting', emoji: '✍️' },
      { label: 'SEO', emoji: '🔍' },
      { label: 'Forms & Surveys', emoji: '📃' },
      { label: 'Customer Support', emoji: '💁' },
      { label: 'Get Feedback', emoji: '💬' }
    ]
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    color: 'gray',
    items: []
  },
  {
    id: 'archive',
    label: 'Archive',
    icon: Archive,
    color: 'gray',
    items: []
  }
];