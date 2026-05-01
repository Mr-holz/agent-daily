#!/usr/bin/env python3
"""大字封面 — 标题+描述分别传入，保证换行正确"""
import os, sys, subprocess

def create_cover(main_title: str, sub_title: str, titles: list, descriptions: list, date_str: str, output: str = "/tmp/cover_v3.png"):
    W, H = 1080, 1440

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0"/>
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="{W}" height="{H}" fill="url(#bg)"/>

  <!-- 顶部日期 -->
  <rect x="340" y="40" width="400" height="56" rx="28" fill="#38bdf8" opacity="0.12"/>
  <text x="540" y="76" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#38bdf8" font-weight="bold">{date_str}</text>

  <!-- 主标题：每天不同 -->
  <text x="540" y="230" text-anchor="middle" font-family="sans-serif" font-size="64" fill="url(#accent)" font-weight="900">{main_title}</text>
  <!-- 副标题 -->
  <text x="540" y="290" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8" font-weight="500">{sub_title}</text>

  <!-- 分割线 -->
  <line x1="200" y1="350" x2="880" y2="350" stroke="url(#line)" stroke-width="1.5"/>

  <!-- 头条1 -->
  <rect x="80" y="420" width="920" height="260" rx="16" fill="#1e293b" opacity="0.6"/>
  <text x="120" y="490" font-family="sans-serif" font-size="28" fill="#38bdf8" font-weight="800">▎热点一</text>
  <text x="120" y="555" font-family="sans-serif" font-size="36" fill="#ffffff" font-weight="800">{titles[0][:30]}</text>
  <text x="120" y="600" font-family="sans-serif" font-size="22" fill="#94a3b8" font-weight="400">{descriptions[0][:50]}</text>

  <!-- 头条2 -->
  <rect x="80" y="710" width="920" height="260" rx="16" fill="#1e293b" opacity="0.6"/>
  <text x="120" y="780" font-family="sans-serif" font-size="28" fill="#38bdf8" font-weight="800">▎热点二</text>
  <text x="120" y="845" font-family="sans-serif" font-size="36" fill="#ffffff" font-weight="800">{titles[1][:30]}</text>
  <text x="120" y="890" font-family="sans-serif" font-size="22" fill="#94a3b8" font-weight="400">{descriptions[1][:50]}</text>

  <!-- 头条3 -->
  <rect x="80" y="1000" width="920" height="260" rx="16" fill="#1e293b" opacity="0.6"/>
  <text x="120" y="1070" font-family="sans-serif" font-size="28" fill="#38bdf8" font-weight="800">▎热点三</text>
  <text x="120" y="1135" font-family="sans-serif" font-size="36" fill="#ffffff" font-weight="800">{titles[2][:30]}</text>
  <text x="120" y="1180" font-family="sans-serif" font-size="22" fill="#94a3b8" font-weight="400">{descriptions[2][:50]}</text>

  <!-- 底部 -->
  <text x="540" y="1380" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#475569">🤖 若水的Agent今天更新了</text>
</svg>'''

    svg_path = output + ".svg"
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg)
    subprocess.run(["rsvg-convert", "-w", str(W), "-h", str(H), "-o", output, svg_path], check=True)
    os.remove(svg_path)
    print(f"封面已生成: {output}")
    return output

if __name__ == "__main__":
    main_title = sys.argv[1] if len(sys.argv) > 1 else "Agent 进入生产时代"
    sub_title = sys.argv[2] if len(sys.argv) > 2 else "企业级Agent全面落地"
    t1 = sys.argv[3] if len(sys.argv) > 3 else "阿里发布产线级数字员工Agent"
    d1 = sys.argv[4] if len(sys.argv) > 4 else "可自主完成生产排期、设备监控和异常处理等多项企业任务"
    t2 = sys.argv[5] if len(sys.argv) > 5 else "Stripe推出AI Agent专用钱包"
    d2 = sys.argv[6] if len(sys.argv) > 6 else "AI可自主管理资金和完成支付，为Agent独立交易铺平道路"
    t3 = sys.argv[7] if len(sys.argv) > 7 else "OpenAI联手AWS发布企业Agent方案"
    d3 = sys.argv[8] if len(sys.argv) > 8 else "企业可通过Bedrock直接部署和管理OpenAI Agent，深度融合云服务"
    date = sys.argv[9] if len(sys.argv) > 9 else "5月1日"
    out = sys.argv[10] if len(sys.argv) > 10 else "/tmp/cover_v3.png"
    create_cover(main_title, sub_title, [t1, t2, t3], [d1, d2, d3], date, out)
