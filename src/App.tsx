import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Gamepad2, 
  LogOut, 
  Flame, 
  Target, 
  Calendar,
  Brain,
  BookOpen,
  Trophy,
  Globe
} from 'lucide-react';

// Language translations
const translations = {
  en: {
    // Navbar
    dashboard: 'Dashboard',
    games: 'Games',
    logout: 'Logout',

    dashboardurl : 'http://localhost:5175/',
    gamesurl : 'http://localhost:5175/',
    logouturl : 'http://localhost:5173',


    // Welcome Section
    welcomeTo: 'Welcome to',
    tagline: 'Adventure Awaits! Continue your learning journey today.',
    gradeExplorer: 'Grade 9 Explorer',
    
    // Stats Cards
    currentStreak: 'Current Streak',
    gamesCompleted: 'Games Completed',
    overallProgress: 'Overall Progress',
    activeDays: 'Active Days',
    days: 'days',
    games: 'games',
    thisMonth: 'This month',
    keepItUp: 'Keep it up!',
    wellDone: 'Well done!',
    almostThere: 'Almost there!',
    
    // Progress Section
    subjectProgress: 'Subject Progress',
    learningProgress: 'Learning Progress',
    totalGames: 'Total: 75 games available',
    completed: 'Completed',
    inProgress: 'In Progress',
    
    // Subjects
    mathematics: 'Mathematics',
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    
    // Recent Activity
    recentActivity: 'Recent Activity',
    recentActivityText: 'Your recent learning activities will appear here...'
  },
  hi: {
    // Navbar
    dashboard: 'डैशबोर्ड',
    games: 'खेल',
    logout: 'लॉगआउट',
    
    // Welcome Section
    welcomeTo: 'स्वागत है',
    tagline: 'रोमांच का इंतजार है! आज ही अपनी सीखने की यात्रा जारी रखें।',
    gradeExplorer: 'कक्षा 9 खोजकर्ता',
    
    // Stats Cards
    currentStreak: 'वर्तमान स्ट्रीक',
    gamesCompleted: 'पूरे किए गए खेल',
    overallProgress: 'समग्र प्रगति',
    activeDays: 'सक्रिय दिन',
    days: 'दिन',
    games: 'खेल',
    thisMonth: 'इस महीने',
    keepItUp: 'जारी रखें!',
    wellDone: 'बहुत बढ़िया!',
    almostThere: 'लगभग पहुंच गए!',
    
    // Progress Section
    subjectProgress: 'विषय प्रगति',
    learningProgress: 'सीखने की प्रगति',
    totalGames: 'कुल: 75 खेल उपलब्ध',
    completed: 'पूर्ण',
    inProgress: 'प्रगति में',
    
    // Subjects
    mathematics: 'गणित',
    physics: 'भौतिकी',
    chemistry: 'रसायन विज्ञान',
    biology: 'जीव विज्ञान',
    
    // Recent Activity
    recentActivity: 'हाल की गतिविधि',
    recentActivityText: 'आपकी हाल की सीखने की गतिविधियां यहां दिखाई जाएंगी...'
  },
  od: {
    // Navbar
    dashboard: 'ଡ୍ୟାସବୋର୍ଡ',
    games: 'ଖେଳ',
    logout: 'ଲଗଆଉଟ',
    
    // Welcome Section
    welcomeTo: 'ସ୍ୱାଗତ',
    tagline: 'ଦୁଃସାହସିକ କାର୍ଯ୍ୟ ଅପେକ୍ଷା କରୁଛି! ଆଜି ଆପଣଙ୍କ ଶିକ୍ଷା ଯାତ୍ରା ଜାରି ରଖନ୍ତୁ।',
    gradeExplorer: 'ଶ୍ରେଣୀ 9 ଅନ୍ୱେଷକ',
    
    // Stats Cards
    currentStreak: 'ବର୍ତ୍ତମାନ ଧାରା',
    gamesCompleted: 'ସମ୍ପୂର୍ଣ୍ଣ ଖେଳ',
    overallProgress: 'ସାମଗ୍ରିକ ପ୍ରଗତି',
    activeDays: 'ସକ୍ରିୟ ଦିନ',
    days: 'ଦିନ',
    games: 'ଖେଳ',
    thisMonth: 'ଏହି ମାସରେ',
    keepItUp: 'ଜାରି ରଖନ୍ତୁ!',
    wellDone: 'ବହୁତ ଭଲ!',
    almostThere: 'ପ୍ରାୟ ପହଞ୍ଚିଗଲେ!',
    
    // Progress Section
    subjectProgress: 'ବିଷୟ ପ୍ରଗତି',
    learningProgress: 'ଶିକ୍ଷା ପ୍ରଗତି',
    totalGames: 'ମୋଟ: 75 ଖେଳ ଉପଲବ୍ଧ',
    completed: 'ସମ୍ପୂର୍ଣ୍ଣ',
    inProgress: 'ପ୍ରଗତିରେ',
    
    // Subjects
    mathematics: 'ଗଣିତ',
    physics: 'ପଦାର୍ଥ ବିଜ୍ଞାନ',
    chemistry: 'ରସାୟନ ବିଜ୍ଞାନ',
    biology: 'ଜୀବବିଜ୍ଞାନ',
    
    // Recent Activity
    recentActivity: 'ସାମ୍ପ୍ରତିକ କାର୍ଯ୍ୟକଳାପ',
    recentActivityText: 'ଆପଣଙ୍କର ସାମ୍ପ୍ରତିକ ଶିକ୍ଷା କାର୍ଯ୍ୟକଳାପ ଏଠାରେ ଦେଖାଯିବ...'
  }
};

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'od', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' }
];

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    math: 0,
    physics: 0,
    chemistry: 0,
    biology: 0
  });

  const t = translations[currentLanguage];

  // Animate progress bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        math: 85,
        physics: 72,
        chemistry: 91,
        biology: 67
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

const navItems = [
    { name: t.dashboard, icon: Home, url: '/dashboard' },
    { name: t.games, icon: Gamepad2, url: '/games' },
    { name: t.logout, icon: LogOut, url: '/logout' }
];

const DonutChart = () => {
  const completed = 56;
  const inProgress = 19;
  const total = 75;

  const completedPercentage = (completed / total) * 100;
  const inProgressPercentage = (inProgress / total) * 100;

  const radius = 80;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const completedStrokeDasharray = `${(completedPercentage / 100) * circumference} ${circumference}`;
  const inProgressStrokeDasharray = `${(inProgressPercentage / 100) * circumference} ${circumference}`;
  const inProgressStrokeDashoffset = -((completedPercentage / 100) * circumference);

  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="relative flex items-center justify-center">
      {/* Tooltip */}
      {tooltip && (
        <div className="absolute -top-10 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow">
          {tooltip}
        </div>
      )}

      <svg height={radius * 2} width={radius * 2}>
        {/* Background Circle */}
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Completed */}
        <circle
          stroke="#00C49F"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={completedStrokeDasharray}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          onMouseEnter={() =>
            setTooltip(`Completed: ${completedPercentage.toFixed(1)}%`)
          }
          onMouseLeave={() => setTooltip(null)}
        />

        {/* In Progress */}
        <circle
          stroke="#0088FE"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={inProgressStrokeDasharray}
          strokeDashoffset={inProgressStrokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          onMouseEnter={() =>
            setTooltip(`In Progress: ${inProgressPercentage.toFixed(1)}%`)
          }
          onMouseLeave={() => setTooltip(null)}
        />
      </svg>
    </div>
  );
};

  const StatCard = ({ icon: Icon, title, value, unit, subtitle, color }) => (
    <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 group shadow-xl hover:shadow-2xl">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
        <Icon className="w-7 h-7 text-white group-hover:text-blue-200 transition-colors duration-300" />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-slate-300">{title}</h3>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-white">{value}</span>
          <span className="text-lg text-slate-300 mb-1">{unit}</span>
        </div>
        <p className="text-sm font-medium text-blue-400">{subtitle}</p>
      </div>
    </div>
  );

  const ProgressBar = ({ subject, percentage, animatedValue }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-white">{subject}</h3>
        <span className="text-lg font-bold text-slate-200">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700/80 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedValue}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-slate-500/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-400/8 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-slate-600/8 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        
        {/* Educational Icon Elements */}
        <div className="absolute top-24 left-1/4 text-blue-400/10 animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}>
          <BookOpen className="w-16 h-16" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-slate-400/10 animate-pulse" style={{ animationDelay: '2s' }}>
          <Trophy className="w-12 h-12 rotate-12" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-blue-300/12 animate-float" style={{ animationDelay: '1s', animationDuration: '10s' }}>
          <Target className="w-14 h-14 rotate-45" />
        </div>
        <div className="absolute top-1/2 right-10 text-slate-300/8 animate-spin" style={{ animationDuration: '15s' }}>
          <Gamepad2 className="w-18 h-18" />
        </div>
        
        <div className="absolute top-16 left-1/2 text-slate-400/12 animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }}>
          <Flame className="w-8 h-8 rotate-12" />
        </div>
        
        {/* Mathematical Symbols */}
        
        <div className="absolute bottom-1/2 right-24 text-slate-300/10 animate-float" style={{ animationDelay: '2.5s', animationDuration: '9s' }}>
          <span className="text-3xl font-bold">π</span>
        </div>
        
        <div className="absolute bottom-20 left-1/2 text-slate-400/8 animate-spin" style={{ animationDuration: '20s' }}>
          <span className="text-2xl font-bold">∞</span>
        </div>
        <div className="absolute top-1/3 left-8 text-blue-200/10 animate-pulse" style={{ animationDelay: '5s' }}>
          <span className="text-3xl font-bold">α</span>
        </div>
        
        {/* Science Symbols */}

        <div className="absolute top-3/4 left-1/3 text-blue-300/10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '6s' }}>
          <span className="text-3xl font-bold">⚡</span>
        </div>
        <div className="absolute top-1/6 right-1/3 text-slate-400/6 animate-pulse" style={{ animationDelay: '4s' }}>
          <span className="text-5xl font-bold">🧬</span>
        </div>
        
        {/* Book and Learning Symbols */}
        <div className="absolute bottom-1/6 left-1/4 text-blue-400/8 animate-float" style={{ animationDelay: '7s', animationDuration: '13s' }}>
          <span className="text-4xl font-bold">📚</span>
        </div>
        <div className="absolute top-1/2 left-12 text-slate-300/10 animate-pulse" style={{ animationDelay: '3s' }}>
          <span className="text-3xl font-bold">✏️</span>
        </div>
        <div className="absolute bottom-1/2 left-2/3 text-blue-200/8 animate-spin" style={{ animationDuration: '18s' }}>
          <span className="text-2xl font-bold">🎓</span>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-blue-400/15 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-slate-400/20 rotate-12 animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/2 w-8 h-8 bg-blue-300/10 rounded-sm rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-16 right-1/2 w-12 h-12 bg-gradient-to-r from-blue-400/8 to-slate-400/8 rounded-full blur-sm animate-float"></div>
        <div className="absolute bottom-32 left-1/2 w-16 h-16 bg-gradient-to-r from-slate-400/6 to-blue-400/6 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Extra decorative elements */}
        <div className="absolute top-1/2 left-20 w-10 h-10 bg-blue-400/10 rounded-full blur-md animate-ping" style={{ animationDelay: '4s', animationDuration: '5s' }}></div>
        <div className="absolute top-3/4 right-10 w-14 h-14 bg-slate-500/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-blue-300/15 rotate-45 animate-spin" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Custom CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-slate-800/90 backdrop-blur-md shadow-2xl border-b border-slate-700/50 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center animate-pulse">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <a className="text-2xl font-bold bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent" href="http://localhost:5175/">
                Gyaan Sagar
              </a>
            </div>
            </div>

            {/* Navigation Links and Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`px-2 md:px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1 md:gap-2 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {languages.find(lang => lang.code === currentLanguage)?.flag}
                  </span>
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-700/50 z-[9999]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Switching to language:', language.code);
                          setCurrentLanguage(language.code);
                          setShowLanguageDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-700/60 transition-colors duration-200 flex items-center gap-3 ${
                          currentLanguage === language.code ? 'bg-slate-700/60 text-white border-l-4 border-blue-500' : 'text-slate-300'
                        } ${language.code === languages[0].code ? 'rounded-t-xl' : ''} ${
                          language.code === languages[languages.length - 1].code ? 'rounded-b-xl' : ''
                        }`}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="font-medium">{language.name}</span>
                        {currentLanguage === language.code && (
                          <span className="ml-auto text-blue-400 text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-md rounded-2xl p-8 mb-8 border border-slate-700/50 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t.welcomeTo} <span className=" font-bold bg-gradient-to-r from-[#778DA9] via-white to-[#E0E1DD] bg-clip-text text-transparent tracking-wide">Gyaansagar</span>
              </h1>
              <p className="text-lg text-slate-300 font-medium">
                {t.tagline}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center border border-slate-700/50 shadow-2xl ">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">Praveen Kumar</p>
                <p className="text-slate-400 text-sm">{t.gradeExplorer}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Flame}
            title={t.currentStreak}
            value="15"
            unit={t.days}
            subtitle={t.keepItUp}
            color="from-orange-500 to-red-500"
          />
          
          <StatCard
            icon={Trophy}
            title={t.gamesCompleted}
            value="42"
            unit={t.games}
            subtitle={t.wellDone}
            color="from-blue-500 to-blue-600"
          />
          
          <StatCard
            icon={Target}
            title={t.overallProgress}
            value="78"
            unit="%"
            subtitle={t.almostThere}
            color="from-blue-600 to-blue-700"
          />
          
          <StatCard
            icon={Calendar}
            title={t.activeDays}
            value="89"
            unit={t.days}
            subtitle={t.thisMonth}
            color="from-green-500 to-green-600"
          />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Subject Progress */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-8">{t.subjectProgress}</h2>
            
            <ProgressBar 
              subject={t.mathematics} 
              percentage={85} 
              animatedValue={animatedValues.math}
            />
            
            <ProgressBar 
              subject={t.physics} 
              percentage={72} 
              animatedValue={animatedValues.science}
            />
            
            <ProgressBar 
              subject={t.chemistry} 
              percentage={91} 
              animatedValue={animatedValues.history}
            />
            
            <ProgressBar 
              subject={t.biology} 
              percentage={67} 
              animatedValue={animatedValues.literature}
            />
          </div>

          {/* Learning Progress Chart */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">{t.learningProgress}</h2>
            <p className="text-slate-400 mb-8">{t.totalGames}</p>
            
            <div className="flex justify-center">
              <DonutChart />
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">{t.recentActivity}</h2>
            <div className="text-slate-400">
              <p>{t.recentActivityText}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;