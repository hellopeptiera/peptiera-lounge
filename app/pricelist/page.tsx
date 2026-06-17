export default function PriceList() {
  const products = [
    { code: "M10", name: "HGH 191AA 10iu", price: "₱315" },
    { code: "M12", name: "HGH 191AA 12iu", price: "₱416" },
    { code: "M15", name: "HGH 191AA 15mg", price: "₱460" },
    { code: "M24", name: "HGH 191AA 24iu", price: "₱738" },

    { code: "MT1", name: "MT-1 10mg", price: "₱347" },
    { code: "ML10", name: "MT-2 10mg", price: "₱347" },

    { code: "SM5", name: "Semaglutide 5mg", price: "₱215" },
    { code: "SM10", name: "Semaglutide 10mg", price: "₱309" },
    { code: "SM15", name: "Semaglutide 15mg", price: "₱353" },
    { code: "SM20", name: "Semaglutide 20mg", price: "₱448" },
    { code: "SM30", name: "Semaglutide 30mg", price: "₱605" },

    { code: "TR5", name: "Tirzepatide 5mg", price: "₱259" },
    { code: "TR10", name: "Tirzepatide 10mg", price: "₱328" },
    { code: "TR15", name: "Tirzepatide 15mg", price: "₱429" },
    { code: "TR20", name: "Tirzepatide 20mg", price: "₱517" },
    { code: "TR30", name: "Tirzepatide 30mg", price: "₱605" },
    { code: "TR40", name: "Tirzepatide 40mg", price: "₱782" },
    { code: "TR50", name: "Tirzepatide 50mg", price: "₱977" },
    { code: "TR60", name: "Tirzepatide 60mg", price: "₱1090" },
    { code: "TR70", name: "Tirzepatide 70mg", price: "₱1248" },
    { code: "TR80", name: "Tirzepatide 80mg", price: "₱1424" },
    { code: "TR90", name: "Tirzepatide 90mg", price: "₱1594" },
    { code: "TR100", name: "Tirzepatide 100mg", price: "₱1771" },
    { code: "TR120", name: "Tirzepatide 120mg", price: "₱1947" },

    { code: "RT5", name: "Retatrutide 5mg", price: "₱429" },
    { code: "RT10", name: "Retatrutide 10mg", price: "₱605" },
    { code: "RT15", name: "Retatrutide 15mg", price: "₱693" },
    { code: "RT20", name: "Retatrutide 20mg", price: "₱782" },
    { code: "RT30", name: "Retatrutide 30mg", price: "₱1128" },
    { code: "RT40", name: "Retatrutide 40mg", price: "₱1475" },
    { code: "RT50", name: "Retatrutide 50mg", price: "₱1651" },
    { code: "RT60", name: "Retatrutide 60mg", price: "₱1998" },

    { code: "ET10", name: "Epithalon 10mg", price: "₱259" },
    { code: "ET50", name: "Epithalon 50mg", price: "₱1040" },

    { code: "TSM2", name: "Tesamorelin 2mg", price: "₱315" },
    { code: "TSM5", name: "Tesamorelin 5mg", price: "₱656" },
    { code: "TSM10", name: "Tesamorelin 10mg", price: "₱1197" },

    { code: "CU50", name: "GHK-Cu 50mg", price: "₱208" },
    { code: "CU100", name: "GHK-Cu 100mg", price: "₱284" },

    { code: "BBG70", name: "TB10+BPC157+GHK50", price: "₱1248" },
    { code: "Klow80", name: "BT10+BP10+CU50+KP10", price: "₱1386" },

    { code: "GTT1500", name: "Glutathione 1500mg", price: "₱448" },

    { code: "NJ100", name: "NAD+ 100mg", price: "₱259" },
    { code: "NJ500", name: "NAD+ 500mg", price: "₱517" },

    { code: "BT2", name: "TB500 2mg", price: "₱278" },
    { code: "BT5", name: "TB500 5mg", price: "₱530" },
    { code: "BT10", name: "TB500 10mg", price: "₱958" },
    { code: "BC5", name: "BPC157 5mg", price: "₱259" },
    { code: "BC10", name: "BPC157 10mg", price: "₱385" },

    { code: "BB10", name: "BPC157 5mg + TB500 5mg", price: "₱643" },
    { code: "BB20", name: "BPC157 10mg + TB500 10mg", price: "₱1248" },

    { code: "DS5", name: "DSIP 5mg", price: "₱278" },
    { code: "DS15", name: "DSIP 15mg", price: "₱580" },

    { code: "SLU5", name: "SLU-PP-332 5mg", price: "₱605" },

    { code: "MS10", name: "MOTS-C 10mg", price: "₱416" },
    { code: "MS40", name: "MOTS-C 40mg", price: "₱1179" },

    { code: "2AD", name: "AOD9604 2mg", price: "₱347" },
    { code: "5AD", name: "AOD9604 5mg", price: "₱656" },

    { code: "KS5", name: "Kisspeptin-10 5mg", price: "₱404" },
    { code: "KS10", name: "Kisspeptin-10 10mg", price: "₱675" },

    { code: "KP5", name: "KPV 5mg", price: "₱315" },
    { code: "KP10", name: "KPV 10mg", price: "₱378" },

    { code: "LC216", name: "L-Carnitine Blend", price: "₱435" },
    { code: "LC600", name: "L-Carnitine 600mg", price: "₱448" },

    { code: "HHB", name: "Healthy Hair Skin Nails Blend", price: "₱756" },

    { code: "GTT600", name: "Glutathione 600mg", price: "₱315" },

    { code: "SMO5", name: "Sermorelin 5mg", price: "₱448" },
    { code: "SMO10", name: "Sermorelin 10mg", price: "₱675" },

    { code: "HX5", name: "Hexarelin 5mg", price: "₱498" },

    { code: "LL37", name: "LL37 5mg", price: "₱555" },

    { code: "TY10", name: "Thymalin 10mg", price: "₱416" },

    { code: "MT10", name: "Melatonin 10mg", price: "₱429" },    
    { code: "CJC2", name: "CJC1295 without DAC 2mg", price: "₱278" },
    { code: "CJC5", name: "CJC1295 without DAC 5mg", price: "₱530" },

    { code: "DAC2", name: "CJC1295 with DAC 2mg", price: "₱347" },
    { code: "DAC5", name: "CJC1295 with DAC 5mg", price: "₱656" },

    { code: "IPA2", name: "Ipamorelin 2mg", price: "₱259" },
    { code: "IPA5", name: "Ipamorelin 5mg", price: "₱448" },

    { code: "GHRP2", name: "GHRP-2 5mg", price: "₱315" },
    { code: "GHRP6", name: "GHRP-6 5mg", price: "₱315" },

    { code: "HCG2K", name: "HCG 2000iu", price: "₱347" },
    { code: "HCG5K", name: "HCG 5000iu", price: "₱530" },

    { code: "IGF1", name: "IGF-1 LR3 1mg", price: "₱580" },

    { code: "PT10", name: "PT141 10mg", price: "₱448" },

    { code: "SX10", name: "Semax 10mg", price: "₱416" },
    { code: "SL10", name: "Selank 10mg", price: "₱416" },

    { code: "SN8", name: "SNAP-8 10mg", price: "₱378" },

    { code: "F410", name: "FOXO4 10mg", price: "₱2142" },

    { code: "CB5", name: "Cerebrolysin 5ml", price: "₱530" },

    { code: "ACE1", name: "ACE031 1mg", price: "₱756" },

    { code: "GDF8", name: "GDF8 1mg", price: "₱1090" },

    { code: "GP5", name: "GLP-1 5mg", price: "₱479" },

    { code: "MDT5", name: "Mazdutide 5mg", price: "₱555" },
    { code: "MDT10", name: "Mazdutide 10mg", price: "₱1034" },

    { code: "SV5", name: "Survodutide 5mg", price: "₱605" },
    { code: "SV10", name: "Survodutide 10mg", price: "₱1128" },

    { code: "CAG5", name: "Cagrilintide 5mg", price: "₱328" },
    { code: "CAG10", name: "Cagrilintide 10mg", price: "₱517" },
        { code: "WA3", name: "Sterile Water 3ml", price: "₱57" },
    { code: "WA10", name: "Sterile Water 10ml", price: "₱70" },

    { code: "BA3", name: "Bacteriostatic Water 3ml", price: "₱57" },
    { code: "BA10", name: "Bacteriostatic Water 10ml", price: "₱70" },

    { code: "AA3", name: "Acetic Acid Water 3ml", price: "₱57" },
    { code: "AA10", name: "Acetic Acid Water 10ml", price: "₱70" },

    { code: "LB50", name: "Lemon Bottle 50ml", price: "₱850" },

    { code: "PDRN", name: "PDRN Skin Booster", price: "₱320" },
    { code: "PHA", name: "Pink HA Skin Booster", price: "₱290" },
    { code: "COL", name: "Collagen Skin Booster", price: "₱290" },
    { code: "WSF", name: "Whitening & Spot-Fading Skin Booster", price: "₱350" }
  ];
    return (
    <div
      style={{
        background: "#FFF8FB",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#E75C9A",
          textAlign: "center",
        }}
      >
        💗 Peptiéra Price List
      </h1>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.code}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid #F8D7E5",
            }}
          >
            <div style={{ color: "#999" }}>{item.code}</div>

            <h3>{item.name}</h3>

            <div
              style={{
                color: "#E75C9A",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
