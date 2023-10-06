export async function GET() {
  const res = await fetch('https://gist.github.com/EdsonLucasbd/1eec5369f96797eb2f5cdcce94d959a4/raw/1ed5d7222ba6cf842d2cf6495c7a2ba10e984edf/gistfile1.txt', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json()

  return Response.json({data})
  
}