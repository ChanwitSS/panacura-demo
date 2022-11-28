import * as vcardparser from 'vcardparser';

export const read = () => {
  vcardparser.parseFile('../../clinvar_20221119.vcf', function (err, json) {
    if (err) return console.log(err);
    console.log(json);
  });
};
