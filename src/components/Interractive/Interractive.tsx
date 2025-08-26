import React from 'react';

const CompanyPraise = () => {
  const praises = [
    {
      title: "พัฒนาและเรียนรู้เร็ว",
      description: "สามารถทำ Dev STS ได้ดี เรียนรู้ไว และงานมีความคืบหน้าอย่างต่อเนื่อง",
      examples: [
        "ช่วยพัฒนา STS Project",
        "เรียนรู้ระบบใหม่ได้เร็ว",
      ],
      icon: "⚡",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "ประสานงานได้ดี",
      description: "สามารถติดต่อประสานงานกับประกันสังคม ลูกค้า และ Bossup ได้ราบรื่น ลูกค้ายอมรับและชื่นชม",
      examples: [
        "ติดต่อประสานงานกับ สปส.",
        "คุยกับลูกค้าได้ตรงประเด็น",
        "ทำงานร่วมกับทีมและคู่ค้าได้ดี"
      ],
      icon: "🤝",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "สนับสนุนงานโครงการ",
      description: "ไม่เกี่ยงงาน และช่วยงานโครงการต่างๆ ได้รวดเร็ว เช่น SP3 และ EXD",
      examples: [
        "สนับสนุนงาน SP3",
        "สนับสนุนงาน EXD",
        "ช่วยงานทีมอื่นๆ ได้ตลอด"
      ],
      icon: "📌",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "มีทักษะด้าน AI",
      description: "มีสกิล AI และผลงานด้าน AI เช่น ระบบสรุปบันทึกการประชุม สามารถเป็นกำลังเสริมให้ทีม AI ได้",
      examples: [
        "AI สรุปบันทึกการประชุม",
        "พร้อมต่อยอด AI Solution"
      ],
      icon: "🤖",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "มีความรับผิดชอบสูง",
      description: "สามารถเดินทางไป สปส. ได้เองตามมอบหมาย",
      examples: [
        "รับงานแล้วทำสำเร็จครบถ้วน",
        "ทำงานตรงเวลา"
      ],
      icon: "🚀",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            สิ่งที่สามารถ
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              ทำให้บริษัทได้
            </span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {praises.map((praise, index) => (
            <div
              key={index}
              className="group relative hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    praise.gradient.includes("blue")
                      ? "#3B82F6"
                      : praise.gradient.includes("green")
                      ? "#10B981"
                      : praise.gradient.includes("orange")
                      ? "#F97316"
                      : praise.gradient.includes("pink")
                      ? "#EC4899"
                      : "#6366F1"
                  }, ${
                    praise.gradient.includes("purple")
                      ? "#9333EA"
                      : praise.gradient.includes("teal")
                      ? "#0D9488"
                      : praise.gradient.includes("red")
                      ? "#DC2626"
                      : "#3B82F6"
                  })`,
                }}
              ></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-500">
                {/* Icon + Title */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{praise.icon}</div>
                  <h3
                    className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #3B82F6, #9333EA)",
                    }}
                  >
                    {praise.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {praise.description}
                </p>

                {/* Examples */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    ตัวอย่าง:
                  </h4>
                  {praise.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-gradient-to-r mr-3 flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #3B82F6, #9333EA)",
                        }}
                      ></div>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPraise;
