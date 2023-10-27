const fs = require('fs');   
let qs =[
    "What is spandex?",
    "Do you know what is the standard of cotton yarn count?",
    "Tell me what are three basics stitches in weft knitting?",
    "Explain me how non-woven fabrics are made?",
    "Explain me what is wale and course in the textile industry?",
    "Do you know what is nylon?",
    "What is Topstitched Seam?",
    "Tell me what is Tufting?",
    "Tell me what is linen fiber?",
    "Tell me what is Selvage?",
    "Tell me the fundamental principle of Knitting?",
    "Tell me any three mineral fibers?",
    "Tell me what is chemical and auxillaries in the textile industry?",
    "What is seam finish?",
    "What is Dolman?",
    "Tell me what is ANSI?",
    "What is Pinking?",
    "Tell me what it takes to become a textile manufacturer?",
    "What is Lapels?",
    "What is Back stitching?",
    "Tell me what is Seam allowance?",
    "What is Finger Press?",
    "What is Ravel?",
    "What is Casing?",
    "What is Keyhole?",
    "Tell me what are the different ways of Textile Quality Control?",
    "Tell me what is habutae?",
    "What is Blind hem?",
    "Tell me what is Match?",
    "What is Seam binding?",
    "Tell me what is Fusible web?",
    "Tell me what is Dart?",
    "Tell me what is spandex?",
    "What is Applique?",
    "What is Fell stitch?",
    "Tell me what is Serger?",
    "What is Pre-shrink?",
    "Tell me what is Self fabric?",
    "What is Notions?",
    "What is Drum Lining?",
    "Do you know what is seam?",
    "Tell me any four vegetable fibers?",
    "What is seam Allowance?",
    "What is Bolt?",
    "What is Ease?",
    "Tell me what is Hem?",
    "What is Rip?",
    "What is Shirt waist?",
    "What is Plain Seam?",
    "What is Baste?",
    "What is Double-breasted front?",
    "What is Gore?",
    "Do you know what is Line?",
    "What is Pintuck?",
    "What is Silhouette?",
    "What is Semi-fitted?",
    "What is Princess line?",
    "What is Miter?",
    "What is Gusset?",
    "What is Fly?",
    "What is Empire?",
    "Tell me what is Closure?",
    "What is Asymmetrical?",
    "Tell me what is Clipping?",
    "Do you know how electrostatic printing works for printing textiles?",
    "Tell me what is ICS?",
    "What is ‘Natural fibers'?",
    "Tell me any three cellulosic fibers?",
    "Tell me what are the chemical based procedures used in textile manufacturing?",
    "Explain me what are the physical types of fibers?",
    "What is Grading?",
    "What is Boning?",
    "What is Flare?",
    "Tell me what is Placket?",
    "Tell me what is Template?",
    "What is Stay?",
    "Explain me what is Marking?",
    "What is Flap?",
    "What is Chevron?",
    "What is Hem?",
    "Explain me what is glass fiber and where it is used?",
    "Tell me what is ASTM?",
    "What is ‘Man made fibers'?",
    "What is yarn?",
    "Tell me any three animal fibers?",
    "Tell me what is ISO?",
    "Explain what is the difference between yarn and thread?",
    "Tell us how polyester is made?",
    "Tell me what are the different methods of dyeing?",
    "What is Basting?",
    "What is Binding?",
    "What is contrasting?",
    "What is Finish?",
    "Explain what is Join?",
    "What is Peplum?",
    "What is secure?",
    "What is Tension?",
    "What is Raw –edge?",
    "Tell me what is Nap?",
    "What is Grosgrain?",
    "What is enclosed seam?",
    "What is Crease?",
    "What is Notching?",
    "Do you know what are benefits of Quality Inspection?",
    "Tell me what are the different types of textile equipment?",
    "Tell me what is the fibre used to create linen?",
    "Explain what is polyester?",
    "What is mineral fibers?",
    "Tell me two kinds of spinning machine?",
    "Do you know what are the different types of cotton available?",
    "What is two plant-based cotton source?",
    "Do you know how many fibers can you yield from each cotton seed?",
    "What is French seam?",
    "What is Armscye?",
    "What is Clean finish?",
    "What do you mean by fabric hand?",
    "Tell me what is Grade?",
    "Tell me what is Motif?",
    "What is Right side of fabric?",
    "Tell me what is Shank?",
    "What is Under stitching?",
    "What is Sheath?",
    "Tell me what is Roll?",
    "What is Pin basting?",
    "Tell me what is Layout?",
    "What is Gather?",
    "What is Eyelet?",
    "What is Colorfast?",
    "What is Bodice?",
    "What is Bias?",
    "What is dart?",
    "What is trimming?",
    "Tell me what is Batik Dyeing process?",
    "Tell me what is ply yarns?",
    "Tell me what is cotton fiber?",
    "What is metallic fibers?",
    "What is Fiber?",
    "What is Stitching?",
    "What is Yoke?",
    "Tell me what is Tailoring?",
    "Tell me what is Shrinking?",
    "Explain what is seam?",
    "What is Pivot?",
    "Explain me what is Pattern markings?",
    "Explain me what is Interfacing?",
    "What is Fold line?",
    "What is facing?",
    "What is Edge stitching?",
    "What is Clip?",
    "What is Blouson?",
    "What is Alter?",
    "What is Gathers?",
    "Tell me what are the fibres used in Textile Industry?",
    "Tell me what is silk fiber?",
    "What is rubber fibers?"
]


let ans  = [
    "Spandex fibers are extremely elastic. They are used for such purpose as foundation garments, hosiery, swim wear and sports wear.",
    "The standard for the yarn count in cotton is I pound of fiber drawn out to make 840 yards of yarn. The resultant thickness or size is known as count number 1 or Ne1.",
    "Plain Knit stitch\n☛ Purl stitch\n☛ Rib stitch",
    "The non-woven fabrics are made by interlocking or bonding of fibers through mechanical, chemical, thermal or solvent means. Different types of fabric are used for nonwovens like wool, cotton, polyester, acrylic, etc.",
    "Course: In Knitted fabric loop, the total amount of horizontal rows is known as Course.\n☛ Wale: In Knitted fabric loop the total amount of vertical rows is known as Wale.",
    "Nylon is thermoplastic, resilient, elastic and very strong. It is used for a wide variety of apparel, have furnishings and industrials products.",
    "A plain seam with a row of machine stitching on one or both sides of the seam line is known as the top stitched seam.",
    "Tufting is a type of method for textile weaving, which is done by pushing extra yarn into a fabric. In this process, many needles simultaneously punch the fabric at pre-determined distance for extruding the fibers. Tufting is usually done on carpets, blankets and upholstery.",
    "Linen fiber is obtained from the stoke of the flax plant linen yarn can be very strong and lustrous and in used for apparel, have furnishings and upholstery.",
    "Selvage is the Lengthwise finished edges on all woven fabrics. Running parallel to the lengthwise grain.\n\nDownload Interview PDF ",
    "The basic principle of knitting is that a single yarn which is formed into interlocking loops with the help of hooked needles. The loops may be closely or loosely constructed.",
    "Glass,\n☛ ceramic,\n☛ graphite",
    "In the textile industry, a dyeing auxillaries is a chemical or formulated chemical which allows a processing operation in preparation, dyeing, printing or finishing to be carried out more effectively.",
    "Seam Finish istheTreatment on seam edges to prevent raveling and make the seam stronger and last longer.",
    "Dolman means the Sleeve set into a deep armhole so as to resemble a kimono sleeve.",
    "American National Standards Institute.",
    "Cutting raw edges with pinking or scalloping sheers to prevent raveling.",
    "A textile manufacturer requires following things\n\n☛ Knowledge of how to operate and manage robotic machinery\n☛ Good knowledge of market and dealing with textile supplier, textile exporter and importer\n☛ Dealing with a high cost of repairing and obtaining equipment\n☛ Labor costs of acquiring highly trained workers needed to operate this machinery\n☛ Acquiring raw material and negotiation skills",
    "A Part of a garment that turns back, especially the front neck- line fold of a jacket.",
    "Sewing backward and forward in the same place to secure stitching, is known as Backstitching.\n\nDownload Interview PDF ",
    "Seam allowance means the Width of fabric beyond the seam line, not including the garment area.",
    "Finger press means the Pressing a small area by crease with the fingers.",
    "Ravel means the fray in the cutting edges of the fabric.",
    "Casing is a folded-over edge of garment or area through which elastic or ribbon is threaded.",
    "A rounded neckline with an inverted, wedge-shaped opening at front or back.",
    "Spectrophotometer: It is used to check the color of the fabric\n☛ CCP ( Crucial Control Point): It is used to check raw material, stitch strength and fabric durability\n☛ Quality Check by industrial governing body: In U.S.A, this body is known as Association for Contract Textiles (ACT). It often imposes standard for textile quality control\n☛ Use of UltraViolet: The fabric is exposed to ultraviolet rays that simulate the sun's ray to check its durability.",
    "It is a silk fabric specially produced only in Japan but recently the reverse trend of importing this from China and Korea is increasing.",
    "Blind hem means the Sewing a hem invisibly with hand or machine stitches.",
    "To bring notches or other construction markings on two pieces together.",
    "Seam binding is the Ribbon-like tape used to finish edges.\n\nDownload Interview PDF ",
    "Fusible web is a web-like adhesive that melts when you apply heat and moisture.",
    "Dart is a tuck in the fabric that helps in fitting the garment over the body curve.",
    "Spandex is a special type of synthetic fiber made from a long chain of synthetic polymer known as polyurethane. It is also known as lycra and it's more important characteristics is stretchability. It can stretch up to 500% to its normal size and its widely used for preparing sportswear.",
    "Applique is A cut-out decoration, design or motif applied to base fabric.",
    "Fell stitch is a Neat, tiny, vertical stitches used in tailoring.",
    "A machine that overcasts and trims an edge simultaneously.",
    "Washing/dry-cleaning fabric to allow for shrinkage of fabric before the garment construction.",
    "Self fabric means the same material as the rest of the garment.",
    "Items other than fabric or a pat- tern required to complete a garment, such as buttons, thread, zipper, etc.",
    "Drum lining is the Lining not sewn into garment seams.\n\nDownload Interview PDF ",
    "Seam is joining of pieces of fabric together with stitching.",
    "Cotton,\n☛ linen,\n☛ jute,\n☛ hemp",
    "Seam Allowance is the Width between fabric edge and seam line .",
    "Bolt is the Unit in which fabric is packaged and sold by the manufacturer. Usually contains 12 to 20 yards.",
    "Ease is the even distribution of slight fullness when one section of a seam is joined to a slightly shorter section without forming gathers or tucks. Used to shape set-in sleeves, princess seams, etc.",
    "Hem is the finished portion on skirts, jackets and sleeves held in place with a hemming stitch.",
    "To remove stitches improperly placed; also tearing fabric along the straight grain.",
    "Dress with bodice details similar to a shirt.",
    "Plain Seam is the Most common type of seam, Suitable for all areas of a garment and fabrics except for sheers and laces.",
    "Baste is the Stitches made by hand or machine to hold fabric pieces together temporarily.\n\nDownload Interview PDF ",
    "Double-breasted means Front closing that overlaps enough to allow two rows of buttons.",
    "Gore i s a tapered section of a garment; wider at the lower edge.",
    "Line means Style, outline or effect given by the cut and construction of a garment.",
    "A narrow channel of fabric stitched together to form tuck design detail, used in French hand sewing.",
    "Silhouette means the Outline or contour of a figure or garment.",
    "Fitting to conform partly, but not too closely, to the shape of the figure.",
    "Garment fitted with seams instead of darts.",
    "Miter – To form a diagonal seam at a square corner.",
    "Gusset is a fabric piece inserted at the un der arm to give ease in the sleeve area.",
    "Fly means the fabric used as lap to conceal an opening in a garment.\n\nDownload Interview PDF ",
    "Empire is a High waistline bodice with a loose, straight skirt.",
    "Closure means that which opens or closes a garment (buttons, snaps, etc., or the area on which they are Placed)",
    "Asymmetrical means the One-sided, not geometrically balanced.",
    "Making straight cuts into the seam allowance is called clipping.",
    "In electrostatic printing a dye resin mixture is used, this mixture is spread on a screen bearing the design and then the fabric is passed into an electrostatic field under the screen. By effect of electro-static field, this dye resin mixture is pulled through the pattern area on the fabric.",
    "Integrated Composite Spinning 84",
    "Natural fibers that occur in nature can be classified as vegetable, animal, and mineral.",
    "Rayon,\n☛ Acetate,\n☛ Triacetate",
    "Scouring\n☛ Bleaching\n☛ Bleach clean up\n☛ De-sizing\n☛ Fabric softening\n☛ Mercerization\n☛ Dyeing & Printing",
    "The physical types of fibers are\n\n☛ Staple fibers: Fiber which is practically limited or finite length is called “Staple Fiber.” These are small length fiber like wool, cotton, jute, etc. It may be man-made or natural.\n\n☛ Filament fibers: Fibers with unlimited or infinite length are called filaments. It may be natural like silk or synthetic like nylon.\n\nDownload Interview PDF ",
    "Grading means theTrimming each seam allowance to a different width.",
    "Boning means the Flexible strips used to stiffen seams or edges.",
    "Flare is a Portion of garment that spreads out or widens.",
    "Garment opening fastened with zipper, snaps or buttons. Finish applied to sleeve opening with cuff.",
    "Template is a shape made of a stiff sub- stance, such as freezer paper, usually the size of the finished design. (i.e., pocket, applique shape or quilt pattern)",
    "Stay it Means of maintaining the shape of a garment area, by using a small piece of fabric or tape that is sewn to an area of the garment to reinforce and secure a position.",
    "Marking is the Transfer of construction symbols from paper pattern to fabric.",
    "Flap is the shaped garment piece attached by only one edge, such as a flap pocket.",
    "Chevron is a V-shaped stripes.",
    "A finished edge on a garment, one of the last steps in sewing a garment is called the hem.\n\nDownload Interview PDF ",
    "Glass fiber is made up of fine fibers of glass; it is lightweight, extremely strong and robust. Compare to carbon fiber it is somewhat less strong, but it is less expensive and non-brittle. It is used for\n\n☛ Filament windings around rocket cases\n☛ Nose cones\n☛ Exhaust nozzle\n☛ Heat shields for aeronautical equipment\n☛ Fishing rods\n☛ Boat hulls and seats\n☛ Wall paneling",
    "American Society for Testing and Materials.",
    "The natural material of cellulose has been taken from cotton linters and wood pulp, processed chemically, and changed in form and several other characteristics into fibers of various lengths.",
    "Yarn, which is woven, knitted, or otherwise made into fabric.",
    "Wool,\n☛ Silk,\n☛ Hair.",
    "International Organization for Standardization.",
    "There is three basic material you need to manufacture textile Thread, Yarn and Fiber. A Fiber is the basic raw material to produce yarn or thread. A textile Fiber could be natural or synthetic (man-made).\n\nThe difference between Yarn and Thread is\n\n☛ Yarn: It is a continuous twisted strand of wool, cotton or synthetic fibre used for Knitting or weaving purpose\n☛ Thread: It is a fine cord made up of two or more twisted fibres used in sewing and weaving",
    "Polyester is a pure synthetic material made from ethylene; it is derived from petroleum residue. It is prepared in four basic forms filament, staple, tow and fiberfill.",
    "Different types of dyeing methods are\n\n☛ Stock dyeing\n☛ Top dyeing\n☛ Yarn dyeing\n☛ Piece dyeing\n☛ Garment dyeing\n☛ Dope dyeing",
    "Basting is the Temporarily joining layers of fabric together.\n\nDownload Interview PDF ",
    "Binding is the Strip to encase edges as a finish or trim.",
    "Contrasting means the Opposing; showing off differences of color, fabric, shading, etc.",
    "Finish is any means of completing a raw garment edge to keep it from raveling, rolling or fraying.",
    "A term used in pattern directions that usually means to stitch together the pieces re ferred to using normal seam allowances and regular stitches.",
    "Peplum is a Small flounce or extension of garment around the hips, usually from the bodice.",
    "Fasten permanently by means of a knot, backstitching, etc.",
    "Tension – Amount of pull on thread or fabric during construction. Also the relationship of the needle and bobbin thread and how they interlock to form the sewing machine stitch, creat- ing a balanced, looser or tighter stitch.",
    "Raw edge is the Unfinished edge of fabric.",
    "A Soft surface with fibers that lie smoothly in one direction.",
    "Grosgrain means the Silk fabric or ribbon having heavy crosswise ribs.\n\nDownload Interview PDF ",
    "Enclosed seam means the seam allowance along a faced edge that is stitched and turned to form an enclosed seam between two layers of fabric.",
    "Crease is a line made by folding the fabric and pressing the fold on this specified line .",
    "Cutting V-shaped sections from the seam allowance is called notching.",
    "Reduce the cost associated with quality problems\n☛ Identify any non-conformity between the original product and pre-production sample\n☛ Enhances the relationship with suppliers",
    "Different types of machines used in the textile industry are\n\n☛ Cotton Gin\n☛ Loom for weaving\n☛ Knitting Machines\n☛ Tufting Machines",
    "To create linen FLAX fibre is used",
    "Polyester fibers are thermo plastic, they have good strength and are hydrophobic, do not absorb water well. Used for a wide variety of apparel, home furnishings and industrial fabrics.",
    "Glass fibers are produced by combining silica sand, limestone, and certain other minerals.",
    "Ring frame, mule frame.",
    "Different types of cotton available are\n\n☛ Grey cotton fabric\n☛ Bleached cotton fabric\n☛ Color or dyed cotton fabric\n\nDownload Interview PDF ",
    "The two source for cotton from the plant\n\n☛ Cotton plant\n☛ Bamboo",
    "Each cotton seed may produce as many as 20,000 fibers on its surface, and a single ball will contains around 150,000 fibers.",
    "French Seam is narrow seam within a seam, used on fabrics which ravel easily .",
    "Armscye means the Armhole; opening for a sleeve.",
    "Clean finish means the method for finishing the raw edges of pockets, hems or seams.",
    "Fabric hand means the way a fabric feels and drapes; its flexibility, smooth- ness and softness.",
    "Grade means to reduce the bulk of enclosed seams by trimming the individu al seam allowances different widths, clipping inward curves and corners, notching convex curves, and trimming away excess fabric at outward corners.",
    "A Unit of design; used as decoration or pattern.",
    "Right side is the Finished side of fabric, outside of garment.",
    "The Link between button and fabric to allow for the thickness of overlapping fabric.\n\nDownload Interview PDF ",
    "Under stitching is Folding the entire seam allowance to the facing side or under- side and then stitching on the correct side of the facing close to the seam edge. This allows the seam to lie flat and keeps the seam edge from showing on the correct side of the garment.",
    "Sheath means the Close-fitting dress with a straight skirt.",
    "Roll is the desired curve and fold (commonly on a collar); shaping established by pressing, pad stitching, etc.",
    "Pin basting is the technique of Pinning seams before stitching.",
    "Cutting chart on instruction guide sheet showing the place ment of pattern pieces.",
    "Gather means to draw up fabric fullness on a line of stitching.",
    "Eyelet is a small, round, finished hole in a garment or fabric.",
    "Colorfast means the Fabric that will not fade or run during cleaning or laundering.",
    "Bodice means the Portion of garment above the waist.",
    "Bias is the Diagonal direction of fabric. True bias is at a 45-degree angle to the grain line.\n\nDownload Interview PDF ",
    "A stitched fold that provides shape and fullness to a garment so that it fits the curves of the body",
    "Trimming is Evenly cutting away part of the seam allowance .",
    "Batik Dyeing process based on the principle of resisting dyeing process. In this technique, wax is used to design on the fabric and then immersed into a dye, and excluding wax parts the fabric will absorb the color.",
    "Two or more strands or yarns are twisted together; they are designed as ply yarns.",
    "The cotton fiber grows in the seepod, or boll or the cotton plant. Cotton yarn is used to make fabries for all type of apparel, home furnishings and industrial applications.",
    "Produced by mining and refining fibers such metals as aluminium, silver and gold.",
    "Fiber, which is either spun (or twisted) into yarn or else directly compressed into fabric.",
    "Stitching in the technique of sewing a straight stitch inconspicuously in the seam well on the correct side of a previously stitched seam. Used to complete waist- bands, cuffs, collars, and French bias binding.",
    "Yoke is the fitted portion of a garment, usually at shoulders or hips, designed to support the rest of the garment hanging from it.",
    "Tailoring means the Construction technique requiring special hand sewing and pressing to mold fabric into a finished garment.\n\nDownload Interview PDF ",
    "Constricting fabric with steam or water to eliminate excess in a specific area. Also done to fabric before cutting out a garment to prevent further fabric shrinkage.",
    "Seam refers the Two or more edges of fabric held together by sewing. Seam should be well constructed and appropriate for the fabric, type of garment, and the location on the garment.",
    "The Stitching around a corner by leaving the needle in the fabric, raising the presser foot, and turning the fabric in a new direction.",
    "The symbols for construction printed on the pattern, such as for darts, buttonholes, notches, dots or tucks. They are transferred from the pattern to the fabric by means of tailor's tacks, notches, chalk, basting or tem porary fabric markers.",
    "A carefully selected fabric placed between the garment and the facing fabric for added body, to give support, and to maintain shape.",
    "Fold line is the line where fabric is folded, usually vertically, when cutting out a garment. It is common for the center front of a garment to be placed on a fold line.",
    "Facing is to finish an edge by applying a fitted piece of fabric, binding, etc. Also the right side of the fabric.",
    "Edge stitching is the Stitching placed 1⁄16 inch from the edge; may be stitching detail, such as topstitching or stitching done to finish the outer edge of a seam or facing edge.",
    "Clip is a cut in fabric to allow ease on curves or corners. Also used to indicate notches in garment pattern.",
    "Blouson means the Bloused effect of fullness gathered in at and falling over a seam, typically the bodice over a skirt.\n\nDownload Interview PDF ",
    "Alter means to change the pattern or garment so that it fits the body and represents body measurements and proportions.",
    "Gathers meanstheTiny, soft folds of fabric formed when a larger piece of fabric is sewn to a smaller piece",
    "Three basic types of fibres used in Textile industries are\n\n☛ Synthetic fibres\n☛ Natural fibres\n☛ Cotton fibres",
    "Is a fine continuous strand unwound from the cocoon of a moth caterpillar known as the silk worm. Silk is composed of protein. Lustrous, smooth, light weight, strong, and elastic. Used for apparel home furnishings, and upholstery.",
    "Made from the sap tapped from the rubber tree."
]





console.log(ans.length);
// console.log( qs.map((ele , index)=>{ 
//        return {         ques : qs[index] ,
//                 ans: ans[index]
//                }
//             }) )


        let f_arr = qs.map((ele , index)=>{ 
            return {         ques : qs[index] ,
                     ans: ans[index]
                    }
                 })
                  

            fs.writeFile('sample.json', JSON.stringify(f_arr), (err) => {
    if (err) throw err;
    console.log('Data saved!');
  });
