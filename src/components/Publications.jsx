import { FileText, Users, BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'
import RoughBox from './RoughBox'

// Marker-colored venue badges.
const TYPE_INK = {
  Journal: { ink: '#1e40af', bg: '#dbeafe' },
  Conference: { ink: '#0f766e', bg: '#ccfbf1' },
  Book: { ink: '#5b21b6', bg: '#ede9fe' },
}

export default function Publications({ publications = [] }) {
  return (
    <section id="publications" aria-labelledby="publications-title" className="scroll-mt-8">
      <SectionHeading
        id="publications-title"
        label="// selected work"
        title="Publications"
        hint={`${publications.length} drafts`}
      />

      <ul className="space-y-5">
        {publications.map((pub, i) => {
          const t = TYPE_INK[pub.type] ?? { ink: '#334155', bg: '#f1f5f9' }
          return (
            <li key={pub.id}>
              <RoughBox
                as="article"
                filter="sm"
                tilt={i % 2 === 0 ? 'l' : 'r'}
                color="#334155"
                className="p-5"
              >
                <div className="flex items-start gap-4">
                  {/* "Draft" sheet icon */}
                  <span
                    className="mt-0.5 hidden h-11 w-11 shrink-0 items-center justify-center bg-amber-50 text-amber-600 sm:flex"
                    style={{ filter: 'url(#rough-sm)', border: '1.6px solid #d97706' }}
                    aria-hidden="true"
                  >
                    <FileText className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-pen text-[17px] font-bold leading-snug text-slate-900">
                        {pub.title}
                      </h3>
                      {pub.type ? (
                        <span
                          className="hidden shrink-0 px-2.5 py-0.5 font-marker text-sm font-bold sm:inline-block"
                          style={{
                            filter: 'url(#rough-md)',
                            backgroundColor: t.bg,
                            color: t.ink,
                          }}
                        >
                          {pub.type}
                        </span>
                      ) : null}
                    </div>

                    <p className="font-pen mt-2 flex items-center gap-1.5 text-[15px] text-slate-500">
                      <Users className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                      <span className="truncate">{pub.authors}</span>
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="font-pen flex items-center gap-1.5 text-[15px] font-semibold text-slate-700">
                        <BookOpen className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                        {pub.journal}
                      </span>
                      <span className="font-marker text-lg font-bold text-blue-600">
                        {pub.year}
                      </span>
                    </div>
                  </div>
                </div>
              </RoughBox>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
