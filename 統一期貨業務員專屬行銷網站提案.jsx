export default function UniFuturesMarketingSite() {
  const strengths = [
    { title: '快速線上開戶', desc: '透過專屬連結即可完成統一期貨線上開戶流程。' },
    { title: '微型台指專業協助', desc: '提供微型台指交易觀念、操作流程與入門協助。' },
    { title: '股票期貨教學', desc: '協助股票族了解股期槓桿與避險策略。' },
    { title: '程式交易導入', desc: '協助建立策略交易、MultiCharts 與自動交易。' },
  ];

  const products = ['微型台指期貨', '股票期貨', '台指期貨', '海外期貨', '選擇權', '程式交易'];

  const steps = [
    '加入LINE或來電諮詢',
    '了解商品與交易方式',
    '使用專屬連結完成線上開戶',
    '協助設定交易軟體開始交易',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="w-full bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">統一期貨｜陳伯維</div>
          <a
            href="https://line.me/R/ti/p/~rain50167"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-orange-500 px-4 py-2 font-semibold"
          >
            加入LINE
          </a>
        </div>
      </header>

      {/* Opening Promotion */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <a
            href="https://www.pfcf.com.tw/eventweb/tw_fut10/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src="/mnt/data/adIndexBanner269o.jpg"
              alt="統一期貨開戶交易活動"
              className="w-full rounded-lg border"
            />
          </a>

          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                台股期貨開戶活動
                <br />
                交易滿10口即可抽獎
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                透過陳伯維專屬連結完成開戶
                <br />
                參與統一期貨台股期貨交易活動
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://eopen.pfcf.com.tw/eopen/?openExternalBrowser=1#/home?recommendCode=sEs49A"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded bg-orange-500 px-6 py-3 font-semibold text-white"
                >
                  專屬開戶連結
                </a>

                <a
                  href="https://line.me/R/ti/p/~rain50167"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-gray-400 px-6 py-3 font-semibold"
                >
                  LINE諮詢
                </a>
              </div>
            </div>

            <div className="rounded border bg-white p-6">
              <div className="text-sm text-gray-500">期貨顧問</div>
              <div className="mt-1 text-2xl font-bold">陳伯維</div>
              <div className="mt-4 text-gray-600">
                統一期貨總公司
                <br />
                LINE：rain50167
                <br />
                電話：02-27481670
              </div>

              <a
                href="https://eopen.pfcf.com.tw/eopen/?openExternalBrowser=1#/home?recommendCode=sEs49A"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded bg-orange-500 py-3 text-center font-semibold text-white"
              >
                立即線上開戶
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">服務特色</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {strengths.map((item) => (
              <div key={item.title} className="rounded border p-6">
                <div className="text-lg font-semibold">{item.title}</div>
                <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">交易商品</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div key={product} className="rounded border bg-white p-6 text-center font-semibold">
                {product}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">開戶流程</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step} className="rounded border p-6 text-center">
                <div className="text-xl font-bold text-orange-500">{i + 1}</div>
                <div className="mt-3 text-gray-700">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">開始您的期貨交易</h2>

          <p className="mt-6 text-gray-300">
            微型台指｜股票期貨｜程式交易
            <br />
            一對一協助開戶與交易設定
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://eopen.pfcf.com.tw/eopen/?openExternalBrowser=1#/home?recommendCode=sEs49A"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-orange-500 px-6 py-3 font-semibold"
            >
              線上開戶
            </a>

            <a
              href="https://line.me/R/ti/p/~rain50167"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-white px-6 py-3 font-semibold"
            >
              LINE諮詢
            </a>
          </div>

          <div className="mt-10 text-xs text-gray-400">
            期貨交易具有高風險，投資前請審慎評估自身財務能力。
          </div>
        </div>
      </section>
    </div>
  );
}
