"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);

    // 监听滚动事件，更新活跃的导航项
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section === "hero" ? "" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const projects = [
    {
      name: "惠多旅游",
      description: "集门票和跟团游产品于一体，支持拼单砍价的旅游平台",
      tech: ["Retrofit+Rxjava", "百度地图SDK", "微信支付", "个推"],
      highlights: ["网络请求优化", "地图导航集成", "第三方支付", "推送服务"]
    },
    {
      name: "结伴旅游",
      description: "免费交友旅游平台，邂逅有缘人，分享旅游美景",
      tech: ["第三方登录", "微行约车", "社交分享"],
      highlights: ["社交功能", "位置服务", "图片分享"]
    },
    {
      name: "爱飞客验票系统",
      description: "手持设备验票项目，支持NFC芯片及二维码读取",
      tech: ["NFC读取", "二维码扫描", "离线验证"],
      highlights: ["硬件集成", "多种验证方式", "离线工作"]
    },
    {
      name: "手游答题",
      description: "提升员工专业技能的移动答题游戏",
      tech: ["Excel解析", "SQLite", "游戏化设计"],
      highlights: ["数据解析", "本地存储", "用户体验"]
    }
  ];

  const experiences = [
    {
      company: "西安合智宇信息科技有限公司",
      position: "Android开发",
      period: "2019.12 - 至今",
      duration: "5年+"
    },
    {
      company: "西安郑元远健康管理公司",
      position: "Android开发",
      period: "2019.08 - 2019.12",
      duration: "4个月"
    },
    {
      company: "陕西大地阳光网络科技有限公司",
      position: "Android开发",
      period: "2018.10 - 2019.06",
      duration: "8个月"
    },
    {
      company: "陕西昱恒软件科技有限公司",
      position: "Android开发",
      period: "2015.03 - 2018.09",
      duration: "3年6个月"
    }
  ];

  const skills = [
    { name: "Android体系架构", level: 90 },
    { name: "四大组件与数据存储", level: 95 },
    { name: "网络通信机制", level: 90 },
    { name: "UI布局与自定义View", level: 85 },
    { name: "多线程与性能优化", level: 85 },
    { name: "Kotlin语言", level: 80 },
    { name: "第三方SDK集成", level: 90 },
    { name: "项目架构设计", level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-800">徐礼君</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className={`transition-colors ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              关于我
            </a>
            <a
              href="#experience"
              className={`transition-colors ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              工作经历
            </a>
            <a
              href="#skills"
              className={`transition-colors ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              专业技能
            </a>
            <a
              href="#projects"
              className={`transition-colors ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              项目经验
            </a>
            <a
              href="#contact"
              className={`transition-colors ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              联系方式
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-800"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>关于我</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>工作经历</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>专业技能</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>项目经验</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>联系方式</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`pt-24 pb-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            徐
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">徐礼君</h1>
          <h2 className="text-2xl text-blue-600 mb-6">Android开发工程师</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            拥有9年Android开发经验，专注于移动应用架构设计与性能优化，
            熟悉完整的Android开发生态，具备独立项目开发能力
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              男 | 1988年5月
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              陕西商洛
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              西安建筑科技大学
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">关于我</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">教育背景</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">西安建筑科技大学</h4>
                  <span className="text-sm text-gray-500">2010.09 - 2014.07</span>
                </div>
                <p className="text-gray-600">测控技术与仪器 | 本科 | 工学学士</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">求职意向</h3>
              <p className="text-gray-600">Android开发主管 / 安卓应用软件开发</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">自我评价</h3>
              <p className="text-gray-600 leading-relaxed">
                有较强的学习能力，喜欢专研，喜欢新技术，能够快速的掌握工作中所需的技术。
                熟悉Java语言，熟悉Android应用软件开发。具备完整的项目开发经验，
                能够独立完成从需求分析到上线发布的全流程工作。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">工作经历</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                    <p className="text-blue-600 font-medium">{exp.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">专业技能</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg card-hover">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 progress-bar">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">项目经验</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 card-hover">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">技术栈：</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">技术亮点：</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">联系方式</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg card-hover">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-white text-xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">手机</h3>
                <p className="text-gray-600">18710860162</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg card-hover">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">邮箱</h3>
                <p className="text-gray-600">463320870@qq.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 徐礼君. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Android开发工程师 | 9年开发经验</p>
        </div>
      </footer>
    </div>
  );
}