import React from 'react';
import { PERSONAL_INFO } from '../../data/personal';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { FileText, Download, CheckCircle, Award, Terminal, ShieldCheck, HeartHandshake, Server } from 'lucide-react';

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Profile & hilosophy"
          title="IT Systems & Infrastructure Specialist"
          subtitle="Managing IT environments, troubleshooting system and network issues, and supporting Microsoft 365, Active Directory, VMware, and enterprise infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <strong className="text-white font-medium">IT Systems & Infrastructure Specialist</strong>with over 6 years of hands-on experience supporting, administering, and maintaining corporate IT environments. My expertise spans IT support and troubleshooting, Windows systems, network infrastructure, virtualization, Microsoft 365, and enterprise services, including Active Directory, VMware, and backup solutions.
            </p>

            <p>
              Throughout my career, I have focused on ensuring reliable IT operations by resolving technical issues, maintaining system availability, strengthening infrastructure security, and supporting business continuity. I believe that effective IT management goes beyond fixing problems—it requires proactive monitoring, reliable backup strategies, secure access management, and consistent maintenance to minimize downtime and deliver stable, efficient IT services.
            </p>

            <p>
              My approach to IT management is built around three key principles:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Reliable IT Support & Security</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Providing secure and dependable IT services through proactive troubleshooting, access management, system hardening, and security best practices. Maintaining Windows environments, Active Directory, Microsoft 365, and network access to ensure users can work securely and efficiently.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Infrastructure Stability & Availability</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Maintaining reliable IT infrastructure through regular system monitoring, preventive maintenance, backup management, and troubleshooting. Supporting VMware virtualization, network connectivity, firewall configurations, and recovery procedures to minimize downtime and maintain business continuity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-800/40 text-blue-400 shrink-0 mt-0.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Efficient Systems Administration</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Simplifying routine IT operations through scripting and automation using PowerShell and administrative tools. Improving efficiency in user account management, Microsoft 365 administration, IT asset inventory, system updates, and routine maintenance tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                icon={<FileText className="w-4 h-4" />}
                onClick={onOpenCvModal}
              >
                Inspect Full Resume
              </Button>
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Mohamed-Teber-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Info Box / Key highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-semibold text-white font-display flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Quick Snapshot</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Current Location:</span>
                  <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Total Experience:</span>
                  <span className="text-slate-200 font-medium">6+ Years in Systems & Networks</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="text-slate-200 font-medium">VMware, M365, Active Directory</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Backup & Resiliency:</span>
                  <span className="text-slate-200 font-medium">Veeam Backup & Replication</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800/70">
                  <span className="text-slate-400">Languages:</span>
                  <span className="text-slate-200 font-medium">Arabic (Native) · English (Professional) · French (Professional)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Availability:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Immediate
                  </span>
                </div>
              </div>
            </div>

            {/* IT Operations Principles card */}
            {/* <div className="bg-gradient-to-br from-slate-900/40 to-slate-950/60 border border-slate-800/80 rounded-2xl p-6 text-xs text-slate-400 space-y-3">
              <div className="text-slate-200 font-medium flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-cyan-400" />
                <span>Collaborative Operations & ITIL</span>
              </div>
              <p className="leading-relaxed">
                Strong proponent of empathetic user support paired with rigorous ITIL change management. Clear documentation, transparent incident post-mortems, and close alignment with business goals.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
