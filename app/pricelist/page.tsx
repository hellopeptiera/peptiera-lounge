"use client";

import { useState } from "react";

export default function PriceList() {
  const [search, setSearch] = useState("");

  const categories = [
    "Weight Management",
    "Skin & Beauty",
    "Healing & Recovery",
    "Longevity",
    "Growth Hormones",
    "Supplies",
    "Lemon Bottle",
  ];

  const products = [
        { category: "Growth Hormones", code: "M10", name: "HGH 191AA 10iu", price: "₱315" },
    { category: "Growth Hormones", code: "M12", name: "HGH 191AA 12iu", price: "₱416" },
    { category: "Growth Hormones", code: "M15", name: "HGH 191AA 15mg", price: "₱460" },
    { category: "Growth Hormones", code: "M24", name: "HGH 191AA 24iu", price: "₱738" },

    { category: "Skin & Beauty", code: "MT1", name: "MT-1 10mg", price: "₱347" },
    { category: "Skin & Beauty", code: "ML10", name: "MT-2 (Melanotan 2) 10mg", price: "₱347" },

    { category: "Weight Management", code: "SM5", name: "Semaglutide 5mg", price: "₱215" },
    { category: "Weight Management", code: "SM10", name: "Semaglutide 10mg", price: "₱309" },
    { category: "Weight Management", code: "SM15", name: "Semaglutide 15mg", price: "₱353" },
    { category: "Weight Management", code: "SM20", name: "Semaglutide 20mg", price: "₱448" },
    { category: "Weight Management", code: "SM30", name: "Semaglutide 30mg", price: "₱605" },

    { category: "Weight Management", code: "TR5", name: "Tirzepatide 5mg", price: "₱259" },
    { category: "Weight Management", code: "TR10", name: "Tirzepatide 10mg", price: "₱328" },
    { category: "Weight Management", code: "TR15", name: "Tirzepatide 15mg", price: "₱429" },
    { category: "Weight Management", code: "TR20", name: "Tirzepatide 20mg", price: "₱517" },
    { category: "Weight Management", code: "TR30", name: "Tirzepatide 30mg", price: "₱605" },
    { category: "Weight Management", code: "TR40", name: "Tirzepatide 40mg", price: "₱782" },
    { category: "Weight Management", code: "TR50", name: "Tirzepatide 50mg", price: "₱977" },
    { category: "Weight Management", code: "TR60", name: "Tirzepatide 60mg", price: "₱1090" },
    { category: "Weight Management", code: "TR70", name: "Tirzepatide 70mg", price: "₱1248" },
    { category: "Weight Management", code: "TR80", name: "Tirzepatide 80mg", price: "₱1424" },
    { category: "Weight Management", code: "TR90", name: "Tirzepatide 90mg", price: "₱1594" },
    { category: "Weight Management", code: "TR100", name: "Tirzepatide 100mg", price: "₱1771" },
    { category: "Weight Management", code: "TR120", name: "Tirzepatide 120mg", price: "₱1947" },

    { category: "Weight Management", code: "RT5", name: "Retatrutide 5mg", price: "₱429" },
    { category: "Weight Management", code: "RT10", name: "Retatrutide 10mg", price: "₱605" },
    { category: "Weight Management", code: "RT15", name: "Retatrutide 15mg", price: "₱693" },
    { category: "Weight Management", code: "RT20", name: "Retatrutide 20mg", price: "₱782" },
    { category: "Weight Management", code: "RT30", name: "Retatrutide 30mg", price: "₱1128" },
    { category: "Weight Management", code: "RT40", name: "Retatrutide 40mg", price: "₱1475" },
    { category: "Weight Management", code: "RT50", name: "Retatrutide 50mg", price: "₱1651" },
    { category: "Weight Management", code: "RT60", name: "Retatrutide 60mg", price: "₱1998" },

    { category: "Longevity", code: "ET10", name: "Epithalon 10mg", price: "₱259" },
    { category: "Longevity", code: "ET50", name: "Epithalon 50mg", price: "₱1040" },

    { category: "Growth Hormones", code: "TSM2", name: "Tesamorelin 2mg", price: "₱315" },
    { category: "Growth Hormones", code: "TSM5", name: "Tesamorelin 5mg", price: "₱656" },
    { category: "Growth Hormones", code: "TSM10", name: "Tesamorelin 10mg", price: "₱1197" },

    { category: "Skin & Beauty", code: "CU50", name: "GHK-Cu 50mg", price: "₱208" },
    { category: "Skin & Beauty", code: "CU100", name: "GHK-Cu 100mg", price: "₱284" },
        { category: "Healing & Recovery", code: "BBG70", name: "TB10 + BPC157 10 + GHK50", price: "₱1248" },
    { category: "Healing & Recovery", code: "Klow80", name: "BT10 + BP10 + CU50 + KP10", price: "₱1386" },

    { category: "Skin & Beauty", code: "GTT1500", name: "Glutathione 1500mg", price: "₱448" },

    { category: "Skin & Beauty", code: "NJ100", name: "NAD+ 100mg", price: "₱259" },
    { category: "Skin & Beauty", code: "NJ500", name: "NAD+ 500mg", price: "₱517" },

    { category: "Healing & Recovery", code: "BT2", name: "TB500 2mg", price: "₱278" },
    { category: "Healing & Recovery", code: "BT5", name: "TB500 5mg", price: "₱530" },
    { category: "Healing & Recovery", code: "BT10", name: "TB500 10mg", price: "₱958" },

    { category: "Healing & Recovery", code: "BC5", name: "BPC157 5mg", price: "₱259" },
    { category: "Healing & Recovery", code: "BC10", name: "BPC157 10mg", price: "₱385" },

    { category: "Healing & Recovery", code: "BB10", name: "BPC157 5mg + TB500 5mg", price: "₱643" },
    { category: "Healing & Recovery", code: "BB20", name: "BPC157 10mg + TB500 10mg", price: "₱1248" },

    { category: "Supplies", code: "WA10", name: "Sterile Water 10ml", price: "₱70" },
    { category: "Supplies", code: "WA3", name: "Sterile Water 3ml", price: "₱57" },

    { category: "Supplies", code: "BA10", name: "Bacteriostatic Water 10ml", price: "₱70" },
    { category: "Supplies", code: "BA3", name: "Bacteriostatic Water 3ml", price: "₱57" },

    { category: "Supplies", code: "AA10", name: "Acetic Acid Water 10ml", price: "₱70" },
    { category: "Supplies", code: "AA3", name: "Acetic Acid Water 3ml", price: "₱57" },

    { category: "Weight Management", code: "AR50", name: "AICAR 50mg", price: "₱429" },
    { category: "Weight Management", code: "AP5", name: "Adipotide 5mg", price: "₱1015" },

    { category: "Longevity", code: "DS5", name: "DSIP 5mg", price: "₱278" },
    { category: "Longevity", code: "DS15", name: "DSIP 15mg", price: "₱580" },

    { category: "Growth Hormones", code: "SMO5", name: "Sermorelin 5mg", price: "₱448" },
    { category: "Growth Hormones", code: "SMO10", name: "Sermorelin 10mg", price: "₱675" },

    { category: "Lemon Bottle", code: "Lemon", name: "Lemon Bottle 10ml", price: "₱429" },

    { category: "Weight Management", code: "SLU5", name: "SLU-PP-332 5mg", price: "₱605" },

    { category: "Longevity", code: "MS10", name: "MOTS-C 10mg", price: "₱416" },
    { category: "Longevity", code: "MS40", name: "MOTS-C 40mg", price: "₱1179" },

    { category: "Weight Management", code: "2AD", name: "AOD9604 2mg", price: "₱347" },
    { category: "Weight Management", code: "5AD", name: "AOD9604 5mg", price: "₱656" },

    { category: "Longevity", code: "KS5", name: "KissPeptin-10 5mg", price: "₱404" },
    { category: "Longevity", code: "KS10", name: "KissPeptin-10 10mg", price: "₱675" },
        { category: "Longevity", code: "2S10", name: "SS-31 10mg", price: "₱511" },
    { category: "Longevity", code: "2S50", name: "SS-31 50mg", price: "₱2029" },

    { category: "Skin & Beauty", code: "SHB", name: "Super Human Blend", price: "₱782" },

    { category: "Weight Management", code: "LC216", name: "L-Carnitine Blend", price: "₱435" },
    { category: "Weight Management", code: "LC526", name: "Fat Blaster", price: "₱870" },

    { category: "Growth Hormones", code: "IP5", name: "Ipamorelin 5mg", price: "₱259" },
    { category: "Growth Hormones", code: "IP10", name: "Ipamorelin 10mg", price: "₱454" },

    { category: "Weight Management", code: "5AM", name: "5-Amino-1MQ 5mg", price: "₱347" },
    { category: "Weight Management", code: "50AM", name: "5-Amino-1MQ 50mg", price: "₱693" },

    { category: "Longevity", code: "PI5", name: "Pinealon 5mg", price: "₱259" },
    { category: "Longevity", code: "PI10", name: "Pinealon 10mg", price: "₱378" },
    { category: "Longevity", code: "PI20", name: "Pinealon 20mg", price: "₱593" },

    { category: "Longevity", code: "P41", name: "PT-141 10mg", price: "₱385" },

    { category: "Longevity", code: "SK5", name: "Selank 5mg", price: "₱278" },
    { category: "Longevity", code: "SK10", name: "Selank 10mg", price: "₱385" },

    { category: "Longevity", code: "XA5", name: "Semax 5mg", price: "₱278" },
    { category: "Longevity", code: "XA10", name: "Semax 10mg", price: "₱353" },

    { category: "Longevity", code: "OT2", name: "Oxytocin 2mg", price: "₱278" },
    { category: "Longevity", code: "OT5", name: "Oxytocin 5mg", price: "₱410" },

    { category: "Growth Hormones", code: "GND2", name: "Gonadorelin Acetate 2mg", price: "₱215" },
    { category: "Growth Hormones", code: "G75", name: "HMG 75IU", price: "₱404" },

    { category: "Skin & Beauty", code: "NP810", name: "SNAP-8 10mg", price: "₱278" },
    { category: "Skin & Beauty", code: "HA5", name: "Hyaluronic Acid 5mg", price: "₱171" },

    { category: "Healing & Recovery", code: "KP5", name: "KPV 5mg", price: "₱315" },
    { category: "Healing & Recovery", code: "KP10", name: "KPV 10mg", price: "₱378" },

    { category: "Longevity", code: "VP10", name: "VIP 10mg", price: "₱1071" },

    { category: "Weight Management", code: "SUR10", name: "Survodutide 10mg", price: "₱2086" },

    { category: "Weight Management", code: "CGL5", name: "Cagrilintide 5mg", price: "₱712" },
    { category: "Weight Management", code: "CGL10", name: "Cagrilintide 10mg", price: "₱1134" },

    { category: "Weight Management", code: "LC600", name: "L-Carnitine 600mg", price: "₱448" },

    { category: "Weight Management", code: "CS10", name: "Cagrilintide 5mg + Semaglutide 5mg", price: "₱1305" },
        { category: "Growth Hormones", code: "G25", name: "GHRP-2 5mg", price: "₱171" },
    { category: "Growth Hormones", code: "G210", name: "GHRP-2 10mg", price: "₱315" },
    { category: "Growth Hormones", code: "G215", name: "GHRP-2 15mg", price: "₱454" },

    { category: "Growth Hormones", code: "G65", name: "GHRP-6 5mg", price: "₱171" },
    { category: "Growth Hormones", code: "G610", name: "GHRP-6 10mg", price: "₱315" },

    { category: "Growth Hormones", code: "CND2", name: "CJC-1295 Without DAC 2mg", price: "₱259" },
    { category: "Growth Hormones", code: "CND5", name: "CJC-1295 Without DAC 5mg", price: "₱555" },
    { category: "Growth Hormones", code: "CND10", name: "CJC-1295 Without DAC 10mg", price: "₱1040" },

    { category: "Growth Hormones", code: "CP10", name: "CJC-1295 5mg + Ipamorelin 5mg", price: "₱693" },

    { category: "Growth Hormones", code: "CD2", name: "CJC-1295 With DAC 2mg", price: "₱517" },
    { category: "Growth Hormones", code: "CD5", name: "CJC-1295 With DAC 5mg", price: "₱1008" },

    { category: "Growth Hormones", code: "FM2", name: "MGF 2mg", price: "₱221" },
    { category: "Growth Hormones", code: "FMP2", name: "PEG-MGF 2mg", price: "₱511" },

    { category: "Growth Hormones", code: "G5K", name: "HCG 5000IU", price: "₱523" },
    { category: "Growth Hormones", code: "G10K", name: "HCG 10000IU", price: "₱914" },

    { category: "Growth Hormones", code: "IG01", name: "IGF-1 LR3 0.1mg", price: "₱278" },
    { category: "Growth Hormones", code: "IG1", name: "IGF-1 LR3 1mg", price: "₱1191" },

    { category: "Growth Hormones", code: "HX5", name: "Hexarelin 5mg", price: "₱498" },

    { category: "Longevity", code: "TY10", name: "Thymalin 10mg", price: "₱416" },
    { category: "Longevity", code: "F410", name: "FOXO4 10mg", price: "₱2142" },
    { category: "Healing & Recovery", code: "LL37", name: "LL37 5mg", price: "₱555" },
    { category: "Longevity", code: "MT10", name: "Melatonin 10mg", price: "₱429" },

    { category: "Longevity", code: "DR5", name: "Dermorphin 5mg", price: "₱215" },

    { category: "Skin & Beauty", code: "GTT600", name: "Glutathione 600mg", price: "₱315" },

    { category: "Longevity", code: "CBL60", name: "Cerebrolysin 60mg", price: "₱389" },

    { category: "Longevity", code: "AE1", name: "ACE-031 1mg", price: "₱895" },
    { category: "Longevity", code: "F81", name: "GDF-8 1mg", price: "₱851" },

    { category: "Longevity", code: "TA5", name: "Thymosin Alpha-1 5mg", price: "₱460" },
    { category: "Longevity", code: "TA10", name: "Thymosin Alpha-1 10mg", price: "₱895" },

    { category: "Weight Management", code: "GP", name: "GLP-1 5mg", price: "₱479" },

    { category: "Longevity", code: "ISU", name: "Insulin", price: "₱2079" },

    { category: "Longevity", code: "RA10", name: "ARA-290 10mg", price: "₱322" },

    { category: "Weight Management", code: "MDT5", name: "Mazdutide 5mg", price: "₱555" },
    { category: "Weight Management", code: "MDT10", name: "Mazdutide 10mg", price: "₱1034" },

    { category: "Longevity", code: "PRO20", name: "Alprostadil 20mg", price: "₱574" },

    { category: "Skin & Beauty", code: "HHB", name: "Healthy Hair Skin Nails Blend", price: "₱756" },
      ];

  return (
    <div
      style={{
        background: "#FFF8FB",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#E75C9A",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        💗 Peptiéra Price List
      </h1>

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "20px",
          border: "1px solid #FFD6E5",
          marginBottom: "30px",
          fontSize: "16px",
          outline: "none",
          background: "white",
        }}
      />

      {categories.map((category) => {
        const filteredProducts = products.filter(
          (p) =>
            p.category === category &&
            (
              p.name.toLowerCase().includes(search.toLowerCase()) ||
              p.code.toLowerCase().includes(search.toLowerCase())
            )
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div
            key={category}
            style={{
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                color: "#E75C9A",
                marginBottom: "12px",
              }}
            >
              {category}
            </h2>

            <div
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #F8D7E5",
              }}
            >
              {filteredProducts.map((item) => (
                <div
                  key={item.code}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 18px",
                    borderBottom: "1px solid #F6E8EF",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#999",
                        fontSize: "13px",
                      }}
                    >
                      {item.code}
                    </div>

                    <div
                      style={{
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </div>
                  </div>

                  <div
                    style={{
                      color: "#E75C9A",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
