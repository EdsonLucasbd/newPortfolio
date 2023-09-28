import shiki from "shiki"

interface GistContentProps {
  queryUrl: string,
  lang: shiki.Lang
}

export async function Content({ queryUrl, lang }: GistContentProps) {
  const settingsResponse = await fetch(queryUrl)
  const settings = await settingsResponse.text()

  const highlighter = await shiki.getHighlighter({
    theme: 'github-dark',
  })

  const code = highlighter.codeToHtml(settings, { lang: lang })

  return (
    <div className="flex flex-col">
      <div className="flex w-full h-10">
        button
      </div>
      <div
        className="shiki-theme inset-0 overflow-auto leading-relaxed mb-32"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  )
}
