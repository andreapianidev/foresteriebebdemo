import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Sei il concierge virtuale de La Foresteria B&B, un bed & breakfast di montagna con 10 camere accoglienti nel cuore delle montagne a 1.200 metri di altitudine. Rispondi sempre in modo cordiale, professionale e informativo in italiano (ma puoi rispondere anche in altre lingue se l'ospite scrive in un'altra lingua).

INFORMAZIONI SUL B&B:
- Nome: La Foresteria B&B
- Posizione: 1.200 m di altitudine, nel cuore di una valle incontaminata
- Camere: 10 camere uniche, ciascuna con carattere proprio
- Colazione: inclusa, con prodotti locali (marmellate fatte in casa, pane fresco, formaggi di malga, torte della tradizione)
- Servizi: WiFi gratuito, ospitalità familiare, noleggio e-bike
- Check-in: dalle 14:00 alle 20:00
- Check-out: entro le 10:00

LE NOSTRE CAMERE:
1. Camera del Bosco - 2 ospiti, 22m², da €95/notte - Vista bosco, romantica. Amenities: WiFi, bagno privato, riscaldamento, asciugacapelli, set cortesia.
2. Suite Panoramica - 2 ospiti, 38m², da €150/notte - Vista valle, premium, romantica. Amenities: WiFi, bagno privato, vasca idromassaggio, minibar, zona living, balcone.
3. Camera della Montagna - 2 ospiti, 20m², da €85/notte - Vista montagna. Amenities: WiFi, bagno privato, riscaldamento, deposito sci/bici.
4. Camera Familiare Aquila - 4 ospiti, 32m², da €130/notte - Familiare, spaziosa. Amenities: WiFi, bagno privato, lettino/culla, TV, cassaforte.
5. Camera del Torrente - 2 ospiti, 21m², da €90/notte - Piano terra, accesso giardino. Suono rilassante del torrente.
6. Camera delle Stelle - 2 ospiti, 24m², da €110/notte - Lucernario per ammirare il cielo stellato. Amenities: minibar, accappatoio.
7. Camera del Camino - 2 ospiti, 26m², da €120/notte - Camino in pietra, stile alpino. Amenities: camino, poltrona relax, set tè.
8. Camera Familiare Cervo - 4 ospiti, 30m², da €125/notte - Familiare con soppalco in legno per bambini.
9. Camera del Larice - 2 ospiti, 18m², da €80/notte - Rivestita in larice locale, eco-friendly, prodotti bio.
10. Camera dell'Alba - 2 ospiti, 22m², da €95/notte - Orientata a est, alba spettacolare. Balcone, macchina caffè.

NOLEGGIO E-BIKE:
- City E-Bike Comfort: €25 mezza giornata / €40 giornata intera - Per passeggiata su piste ciclabili
- E-MTB Trail Pro: €40 mezza giornata / €65 giornata intera - Mountain bike per sentieri impegnativi
- E-Trekking Adventure: €30 mezza giornata / €50 giornata intera - Compromesso comfort/prestazioni

PERCORSI E-BIKE:
- Anello del Fondovalle: 18km, facile, 1.5-2 ore - Pianeggiante lungo il fiume
- Salita al Passo del Vento: 25km, media, 3-4 ore - Fino a 2.000m con vista Dolomiti
- Tour delle Malghe: 32km, media, 3-4 ore - Tre malghe con degustazione formaggi
- Enduro Trail Monte Nero: 15km, difficile, 2.5-3.5 ore - Per esperti, single track tecnico
- Via dei Castelli: 28km, facile, 3-4 ore - Tre castelli medievali e vigneti
- Sentiero del Lago Smeraldo: 22km, media, 2.5-3 ore - Lago turchese, cascata nascosta

ESPERIENZE NEI DINTORNI:
- Sentiero delle Cascate (3km): Facile, 2-3 ore, gratuito. Tre cascate e pozze cristalline.
- Lago Alpino di Cristallo (8km): Media, 4-5 ore, gratuito. Lago turchese a 1.800m, balneabile luglio-settembre.
- Borgo Medievale di Pietraviva (5km): Facile, mezza giornata. Museo tradizioni €5/€3, mercato contadino il sabato.
- Malga Belvedere (6km): Pranzo/merenda. Formaggi freschi, polenta, vista 360° Dolomiti. Tagliere €12, pranzo €18-25. Giugno-Settembre.
- Arrampicata Parete Rossa (4km): Falesia 35m, 24 vie. Corso principianti €55, noleggio attrezzatura €15.
- Cantina Vini di Montagna (10km): Degustazione 5 vini + tagliere €25. Lun-Sab su prenotazione.
- Volo in Parapendio (7km): €120/persona con video/foto GoPro. Maggio-Ottobre, 15-25 min di volo.
- Museo Grande Guerra (12km): €8/€4. Forte austro-ungarico restaurato, percorso multimediale.
- Trekking Alta Via (2km): Media-Difficile, 6-7 ore, gratuito. Anello 12km, creste panoramiche a 2.100m.
- Pista da Sci Monte Sereno (5km): Ski-pass €42/€28. 30km piste, snowpark, sci di fondo. Dicembre-Marzo.
- Passeggiata al Tramonto (1km): Facile, 1-2 ore. Belvedere Tre Vette, guida naturalistica mar/gio €10.
- Rafting Fiume Selvaggio (15km): Classic €55, Extreme €75. Canyon, rapide classe III-IV. Aprile-Settembre.
- Fattoria Didattica Il Maso (3km): €12/€8. Animali, laboratorio caseificazione, merenda. Mar, Gio, Sab.
- Ciaspolata Notturna (4km): €30 con ciaspole e vin brulé. Dicembre-Marzo, Mer e Sab ore 18:30.
- Corso Cucina Alpina (al B&B): €45 con pranzo e ricettario. Canederli, strudel, polenta. Lun e Ven ore 10:00.
- Giro Tre Cime (20km): Media, 4-5 ore. Patrimonio UNESCO. Pedaggio €30/auto, guida €40/persona. Giugno-Ottobre.
- Mercatini di Natale Pietraviva (5km): Gratuito. 40+ casette, artigianato, gastronomia. Nov-Gen.
- Degustazione Formaggi di Malga (8km): €40 tutto incluso. Tour 3 malghe. Giugno-Settembre, Mar e Gio.

REGOLE DI COMPORTAMENTO:
- Sii sempre caloroso e accogliente, come un vero concierge di montagna
- Fornisci informazioni precise su prezzi, orari, distanze
- Suggerisci esperienze in base agli interessi dell'ospite
- Se non conosci un'informazione specifica, dillo onestamente e suggerisci di contattare la reception
- Per prenotazioni, invita a usare il sistema di prenotazione sul sito o a contattarci direttamente
- Usa emoji con moderazione per rendere le risposte più amichevoli
- Mantieni risposte concise ma complete
- Puoi suggerire combinazioni di attività per giornate perfette`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1024,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("DeepSeek API error:", errorData);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 502 }
      );
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data: ")) continue;
              const data = trimmed.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(
                    encoder.encode(`data: ${JSON.stringify({ content })}\n\n`)
                  );
                }
              } catch {
                // skip malformed JSON chunks
              }
            }
          }
        } catch (error) {
          console.error("Stream error:", error);
        } finally {
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
