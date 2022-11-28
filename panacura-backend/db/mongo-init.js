db.createCollection('clinvars');

db.clinvars.insertMany([
  {
    chrom: '1',
    id: '1019397',
    pos: '925952',
    ref: 'G',
    alt: 'A',
    qual: null,
    filter: null,
    info: 'ALLELEID=1003021;CLNDISDB=MedGen:CN517202;CLNDN=not_provided;CLNHGVS=NC_000001.11:g.925952G>A;CLNREVSTAT=criteria_provided,_single_submitter;CLNSIG=Uncertain_significance;CLNVC=single_nucleotide_variant;CLNVCSO=SO:0001483;GENEINFO=SAMD11:148398;MC=SO:0001583|missense_variant;ORIGIN=1;RS=1640863258',
  },
]);
