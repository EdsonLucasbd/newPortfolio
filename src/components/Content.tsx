import shiki from "shiki"

interface GistContentProps {
  queryUrl: string,
  lang: shiki.Lang,
  device?: "mobile" | "normal"
}

export async function Content({ queryUrl, lang, device }: GistContentProps) {
  const settingsResponse = await fetch(queryUrl)
  const settings = await settingsResponse.text()

  const highlighter = await shiki.getHighlighter({
    theme: 'github-dark',
  })

  const code = highlighter.codeToHtml(settings, { lang: lang })

  return (
    <div className="flex flex-col">
      <div>
        <div
          className={`${device && device === "mobile" ? 'shiki-theme-mobile' : 'shiki-theme'} inset-0 overflow-auto leading-relaxed mb-32`}
          dangerouslySetInnerHTML={{ __html: code }}
        />

      </div>
    </div>
  )
}
