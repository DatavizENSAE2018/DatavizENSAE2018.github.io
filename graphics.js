window.onload = function () {

    var KillCountryChart = new CanvasJS.Chart("KillCountry", {
        backgroundColor: "#fafafa",
        animationEnabled: true,
        title:{
        },
        axisY :{
            valueFormatString: "#0,.",
            suffix: "k",
            title: "nombre de victimes"
        },
        axisX: {
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                "type": "stackedArea",
                "showInLegend": true,
                "toolTipContent": "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                "name": "Reste du monde",
                "dataPoints": [
                    {
                        "x": new Date(1970,0),
                        "y": 170
                    },
                    {
                        "x": new Date(1971,0),
                        "y": 173
                    },
                    {
                        "x": new Date(1972,0),
                        "y": 566
                    },
                    {
                        "x": new Date(1973,0),
                        "y": 370
                    },
                    {
                        "x": new Date(1974,0),
                        "y": 541
                    },
                    {
                        "x": new Date(1975,0),
                        "y": 612
                    },
                    {
                        "x": new Date(1976,0),
                        "y": 666
                    },
                    {
                        "x": new Date(1977,0),
                        "y": 455
                    },
                    {
                        "x": new Date(1978,0),
                        "y": 1454
                    },
                    {
                        "x": new Date(1979,0),
                        "y": 1930
                    },
                    {
                        "x": new Date(1980,0),
                        "y": 4268
                    },
                    {
                        "x": new Date(1981,0),
                        "y": 4631
                    },
                    {
                        "x": new Date(1982,0),
                        "y": 4970
                    },
                    {
                        "x": new Date(1983,0),
                        "y": 9373
                    },
                    {
                        "x": new Date(1984,0),
                        "y": 10243
                    },
                    {
                        "x": new Date(1985,0),
                        "y": 7013
                    },
                    {
                        "x": new Date(1986,0),
                        "y": 4568
                    },
                    {
                        "x": new Date(1987,0),
                        "y": 5787
                    },
                    {
                        "x": new Date(1988,0),
                        "y": 5955
                    },
                    {
                        "x": new Date(1989,0),
                        "y": 7196
                    },
                    {
                        "x": new Date(1990,0),
                        "y": 6041
                    },
                    {
                        "x": new Date(1991,0),
                        "y": 7007
                    },
                    {
                        "x": new Date(1992,0),
                        "y": 8257
                    },
                    {
                        "x": new Date(1994,0),
                        "y": 6911
                    },
                    {
                        "x": new Date(1995,0),
                        "y": 5015
                    },
                    {
                        "x": new Date(1996,0),
                        "y": 5903
                    },
                    {
                        "x": new Date(1997,0),
                        "y": 9519
                    },
                    {
                        "x": new Date(1998,0),
                        "y": 4122
                    },
                    {
                        "x": new Date(1999,0),
                        "y": 2624
                    },
                    {
                        "x": new Date(2000,0),
                        "y": 3575
                    },
                    {
                        "x": new Date(2001,0),
                        "y": 6797
                    },
                    {
                        "x": new Date(2002,0),
                        "y": 3999
                    },
                    {
                        "x": new Date(2003,0),
                        "y": 2496
                    },
                    {
                        "x": new Date(2004,0),
                        "y": 4760
                    },
                    {
                        "x": new Date(2005,0),
                        "y": 5312
                    },
                    {
                        "x": new Date(2006,0),
                        "y": 7336
                    },
                    {
                        "x": new Date(2007,0),
                        "y": 9547
                    },
                    {
                        "x": new Date(2008,0),
                        "y": 5953
                    },
                    {
                        "x": new Date(2009,0),
                        "y": 5630
                    },
                    {
                        "x": new Date(2010,0),
                        "y": 4038
                    },
                    {
                        "x": new Date(2011,0),
                        "y": 3934
                    },
                    {
                        "x": new Date(2012,0),
                        "y": 6482
                    },
                    {
                        "x": new Date(2013,0),
                        "y": 11621
                    },
                    {
                        "x": new Date(2014,0),
                        "y": 24167
                    },
                    {
                        "x": new Date(2015,0),
                        "y": 20984
                    },
                    {
                        "x": new Date(2016,0),
                        "y": 22064
                    }
                ]
            },
            {
                "type": "stackedArea",
                "showInLegend": true,
                "toolTipContent": "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                "name": "Pakistan",
                "dataPoints": [
                    {
                        "x": new Date(1970,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1974,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1975,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1976,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1978,0),
                        "y": 5
                    },
                    {
                        "x": new Date(1979,0),
                        "y": 6
                    },
                    {
                        "x": new Date(1980,0),
                        "y": 17
                    },
                    {
                        "x": new Date(1981,0),
                        "y": 4
                    },
                    {
                        "x": new Date(1982,0),
                        "y": 3
                    },
                    {
                        "x": new Date(1983,0),
                        "y": 10
                    },
                    {
                        "x": new Date(1984,0),
                        "y": 12
                    },
                    {
                        "x": new Date(1985,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1986,0),
                        "y": 60
                    },
                    {
                        "x": new Date(1987,0),
                        "y": 183
                    },
                    {
                        "x": new Date(1988,0),
                        "y": 136
                    },
                    {
                        "x": new Date(1989,0),
                        "y": 56
                    },
                    {
                        "x": new Date(1990,0),
                        "y": 188
                    },
                    {
                        "x": new Date(1991,0),
                        "y": 231
                    },
                    {
                        "x": new Date(1992,0),
                        "y": 152
                    },
                    {
                        "x": new Date(1994,0),
                        "y": 354
                    },
                    {
                        "x": new Date(1995,0),
                        "y": 712
                    },
                    {
                        "x": new Date(1996,0),
                        "y": 423
                    },
                    {
                        "x": new Date(1997,0),
                        "y": 443
                    },
                    {
                        "x": new Date(1998,0),
                        "y": 151
                    },
                    {
                        "x": new Date(1999,0),
                        "y": 127
                    },
                    {
                        "x": new Date(2000,0),
                        "y": 118
                    },
                    {
                        "x": new Date(2001,0),
                        "y": 109
                    },
                    {
                        "x": new Date(2002,0),
                        "y": 105
                    },
                    {
                        "x": new Date(2003,0),
                        "y": 119
                    },
                    {
                        "x": new Date(2004,0),
                        "y": 304
                    },
                    {
                        "x": new Date(2005,0),
                        "y": 152
                    },
                    {
                        "x": new Date(2006,0),
                        "y": 314
                    },
                    {
                        "x": new Date(2007,0),
                        "y": 1406
                    },
                    {
                        "x": new Date(2008,0),
                        "y": 1184
                    },
                    {
                        "x": new Date(2009,0),
                        "y": 1487
                    },
                    {
                        "x": new Date(2010,0),
                        "y": 1695
                    },
                    {
                        "x": new Date(2011,0),
                        "y": 1674
                    },
                    {
                        "x": new Date(2012,0),
                        "y": 2784
                    },
                    {
                        "x": new Date(2013,0),
                        "y": 2874
                    },
                    {
                        "x": new Date(2014,0),
                        "y": 2414
                    },
                    {
                        "x": new Date(2015,0),
                        "y": 1607
                    },
                    {
                        "x": new Date(2016,0),
                        "y": 1112
                    }
                ]
            },
            {
                "type": "stackedArea",
                "showInLegend": true,
                "toolTipContent": "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                "name": "Inde",
                "dataPoints": [
                    {
                        "x": new Date(1972,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1975,0),
                        "y": 4
                    },
                    {
                        "x": new Date(1976,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1977,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1979,0),
                        "y": 31
                    },
                    {
                        "x": new Date(1980,0),
                        "y": 17
                    },
                    {
                        "x": new Date(1981,0),
                        "y": 24
                    },
                    {
                        "x": new Date(1982,0),
                        "y": 64
                    },
                    {
                        "x": new Date(1983,0),
                        "y": 59
                    },
                    {
                        "x": new Date(1984,0),
                        "y": 195
                    },
                    {
                        "x": new Date(1985,0),
                        "y": 51
                    },
                    {
                        "x": new Date(1986,0),
                        "y": 340
                    },
                    {
                        "x": new Date(1987,0),
                        "y": 506
                    },
                    {
                        "x": new Date(1988,0),
                        "y": 966
                    },
                    {
                        "x": new Date(1989,0),
                        "y": 874
                    },
                    {
                        "x": new Date(1990,0),
                        "y": 907
                    },
                    {
                        "x": new Date(1991,0),
                        "y": 1113
                    },
                    {
                        "x": new Date(1992,0),
                        "y": 1152
                    },
                    {
                        "x": new Date(1994,0),
                        "y": 389
                    },
                    {
                        "x": new Date(1995,0),
                        "y": 361
                    },
                    {
                        "x": new Date(1996,0),
                        "y": 569
                    },
                    {
                        "x": new Date(1997,0),
                        "y": 853
                    },
                    {
                        "x": new Date(1998,0),
                        "y": 398
                    },
                    {
                        "x": new Date(1999,0),
                        "y": 464
                    },
                    {
                        "x": new Date(2000,0),
                        "y": 671
                    },
                    {
                        "x": new Date(2001,0),
                        "y": 660
                    },
                    {
                        "x": new Date(2002,0),
                        "y": 593
                    },
                    {
                        "x": new Date(2003,0),
                        "y": 472
                    },
                    {
                        "x": new Date(2004,0),
                        "y": 334
                    },
                    {
                        "x": new Date(2005,0),
                        "y": 463
                    },
                    {
                        "x": new Date(2006,0),
                        "y": 722
                    },
                    {
                        "x": new Date(2007,0),
                        "y": 626
                    },
                    {
                        "x": new Date(2008,0),
                        "y": 819
                    },
                    {
                        "x": new Date(2009,0),
                        "y": 774
                    },
                    {
                        "x": new Date(2010,0),
                        "y": 812
                    },
                    {
                        "x": new Date(2011,0),
                        "y": 489
                    },
                    {
                        "x": new Date(2012,0),
                        "y": 264
                    },
                    {
                        "x": new Date(2013,0),
                        "y": 467
                    },
                    {
                        "x": new Date(2014,0),
                        "y": 490
                    },
                    {
                        "x": new Date(2015,0),
                        "y": 387
                    },
                    {
                        "x": new Date(2016,0),
                        "y": 462
                    }
                ]
            },
            {
                "type": "stackedArea",
                "showInLegend": true,
                "toolTipContent": "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                "name": "Afghanistan",
                "dataPoints": [
                    {
                        "x": new Date(1973,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1979,0),
                        "y": 53
                    },
                    {
                        "x": new Date(1987,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1988,0),
                        "y": 128
                    },
                    {
                        "x": new Date(1989,0),
                        "y": 10
                    },
                    {
                        "x": new Date(1990,0),
                        "y": 12
                    },
                    {
                        "x": new Date(1991,0),
                        "y": 68
                    },
                    {
                        "x": new Date(1992,0),
                        "y": 49
                    },
                    {
                        "x": new Date(1994,0),
                        "y": 22
                    },
                    {
                        "x": new Date(1995,0),
                        "y": 5
                    },
                    {
                        "x": new Date(1996,0),
                        "y": 31
                    },
                    {
                        "x": new Date(1997,0),
                        "y": 4
                    },
                    {
                        "x": new Date(1998,0),
                        "y": 8
                    },
                    {
                        "x": new Date(1999,0),
                        "y": 39
                    },
                    {
                        "x": new Date(2000,0),
                        "y": 38
                    },
                    {
                        "x": new Date(2001,0),
                        "y": 174
                    },
                    {
                        "x": new Date(2002,0),
                        "y": 74
                    },
                    {
                        "x": new Date(2003,0),
                        "y": 163
                    },
                    {
                        "x": new Date(2004,0),
                        "y": 275
                    },
                    {
                        "x": new Date(2005,0),
                        "y": 367
                    },
                    {
                        "x": new Date(2006,0),
                        "y": 731
                    },
                    {
                        "x": new Date(2007,0),
                        "y": 1197
                    },
                    {
                        "x": new Date(2008,0),
                        "y": 1089
                    },
                    {
                        "x": new Date(2009,0),
                        "y": 1064
                    },
                    {
                        "x": new Date(2010,0),
                        "y": 1065
                    },
                    {
                        "x": new Date(2011,0),
                        "y": 1521
                    },
                    {
                        "x": new Date(2012,0),
                        "y": 3521
                    },
                    {
                        "x": new Date(2013,0),
                        "y": 3696
                    },
                    {
                        "x": new Date(2014,0),
                        "y": 5413
                    },
                    {
                        "x": new Date(2015,0),
                        "y": 6210
                    },
                    {
                        "x": new Date(2016,0),
                        "y": 6119
                    }
                ]
            },
            {
                "type": "stackedArea",
                "showInLegend": true,
                "toolTipContent": "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                "name": "Syrie",
                "dataPoints": [
                    {
                        "x": new Date(1974,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1975,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1976,0),
                        "y": 5
                    },
                    {
                        "x": new Date(1977,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1979,0),
                        "y": 80
                    },
                    {
                        "x": new Date(1980,0),
                        "y": 89
                    },
                    {
                        "x": new Date(1981,0),
                        "y": 192
                    },
                    {
                        "x": new Date(1982,0),
                        "y": 98
                    },
                    {
                        "x": new Date(1983,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1984,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1985,0),
                        "y": 30
                    },
                    {
                        "x": new Date(1986,0),
                        "y": 8
                    },
                    {
                        "x": new Date(1989,0),
                        "y": 0
                    },
                    {
                        "x": new Date(1996,0),
                        "y": 15
                    },
                    {
                        "x": new Date(1997,0),
                        "y": 2
                    },
                    {
                        "x": new Date(2004,0),
                        "y": 4
                    },
                    {
                        "x": new Date(2006,0),
                        "y": 5
                    },
                    {
                        "x": new Date(2008,0),
                        "y": 18
                    },
                    {
                        "x": new Date(2011,0),
                        "y": 163
                    },
                    {
                        "x": new Date(2012,0),
                        "y": 877
                    },
                    {
                        "x": new Date(2013,0),
                        "y": 1562
                    },
                    {
                        "x": new Date(2014,0),
                        "y": 3301
                    },
                    {
                        "x": new Date(2015,0),
                        "y": 3925
                    },
                    {
                        "x": new Date(2016,0),
                        "y": 2755
                    }
                ]
            },
            {
                "type": "stackedArea",
                "showInLegend": true,
                "toolTipContent": "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                "name": "Nigeria",
                "dataPoints": [
                    {
                        "x": new Date(1983,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1988,0),
                        "y": 4
                    },
                    {
                        "x": new Date(1991,0),
                        "y": 10
                    },
                    {
                        "x": new Date(1992,0),
                        "y": 135
                    },
                    {
                        "x": new Date(1994,0),
                        "y": 15
                    },
                    {
                        "x": new Date(1995,0),
                        "y": 1
                    },
                    {
                        "x": new Date(1996,0),
                        "y": 24
                    },
                    {
                        "x": new Date(1997,0),
                        "y": 107
                    },
                    {
                        "x": new Date(1998,0),
                        "y": 9
                    },
                    {
                        "x": new Date(1999,0),
                        "y": 134
                    },
                    {
                        "x": new Date(2000,0),
                        "y": 0
                    },
                    {
                        "x": new Date(2001,0),
                        "y": 3
                    },
                    {
                        "x": new Date(2002,0),
                        "y": 28
                    },
                    {
                        "x": new Date(2003,0),
                        "y": 28
                    },
                    {
                        "x": new Date(2004,0),
                        "y": 41
                    },
                    {
                        "x": new Date(2005,0),
                        "y": 19
                    },
                    {
                        "x": new Date(2006,0),
                        "y": 254
                    },
                    {
                        "x": new Date(2007,0),
                        "y": 82
                    },
                    {
                        "x": new Date(2008,0),
                        "y": 72
                    },
                    {
                        "x": new Date(2009,0),
                        "y": 316
                    },
                    {
                        "x": new Date(2010,0),
                        "y": 117
                    },
                    {
                        "x": new Date(2011,0),
                        "y": 447
                    },
                    {
                        "x": new Date(2012,0),
                        "y": 1508
                    },
                    {
                        "x": new Date(2013,0),
                        "y": 2014
                    },
                    {
                        "x": new Date(2014,0),
                        "y": 7781
                    },
                    {
                        "x": new Date(2015,0),
                        "y": 5351
                    },
                    {
                        "x": new Date(2016,0),
                        "y": 2164
                    }
                ]
            }
        ]
    });
    KillCountryChart.render();

    var WeaponsChart = new CanvasJS.Chart("Weapons", {
        animationEnabled: true,
        title:{
        },
        axisX: {
            interval: 5,
            intervalType: "year",
            valueFormatString: "YYYY"
        },
        axisY: {
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        legend: {
            reversed: true,
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [
            {
                type: "stackedColumn100",
                name: "Fake Weapons",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(2005,0),
                        y: 1
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Firearms",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1970,0),
                        y: 45
                    },
                    {
                        x: new Date(1971,0),
                        y: 80
                    },
                    {
                        x: new Date(1972,0),
                        y: 289
                    },
                    {
                        x: new Date(1973,0),
                        y: 270
                    },
                    {
                        x: new Date(1974,0),
                        y: 246
                    },
                    {
                        x: new Date(1975,0),
                        y: 481
                    },
                    {
                        x: new Date(1976,0),
                        y: 395
                    },
                    {
                        x: new Date(1977,0),
                        y: 374
                    },
                    {
                        x: new Date(1978,0),
                        y: 618
                    },
                    {
                        x: new Date(1979,0),
                        y: 1150
                    },
                    {
                        x: new Date(1980,0),
                        y: 3293
                    },
                    {
                        x: new Date(1981,0),
                        y: 3495
                    },
                    {
                        x: new Date(1982,0),
                        y: 3832
                    },
                    {
                        x: new Date(1983,0),
                        y: 7380
                    },
                    {
                        x: new Date(1984,0),
                        y: 7367
                    },
                    {
                        x: new Date(1985,0),
                        y: 4571
                    },
                    {
                        x: new Date(1986,0),
                        y: 2213
                    },
                    {
                        x: new Date(1987,0),
                        y: 4107
                    },
                    {
                        x: new Date(1988,0),
                        y: 5305
                    },
                    {
                        x: new Date(1989,0),
                        y: 6012
                    },
                    {
                        x: new Date(1990,0),
                        y: 5891
                    },
                    {
                        x: new Date(1991,0),
                        y: 6848
                    },
                    {
                        x: new Date(1992,0),
                        y: 7250
                    },
                    {
                        x: new Date(1993,0),
                        y: 7250
                    },
                    {
                        x: new Date(1994,0),
                        y: 5004
                    },
                    {
                        x: new Date(1995,0),
                        y: 2906
                    },
                    {
                        x: new Date(1996,0),
                        y: 2621
                    },
                    {
                        x: new Date(1997,0),
                        y: 3375
                    },
                    {
                        x: new Date(1998,0),
                        y: 1547
                    },
                    {
                        x: new Date(1999,0),
                        y: 1572
                    },
                    {
                        x: new Date(2000,0),
                        y: 1981
                    },
                    {
                        x: new Date(2001,0),
                        y: 2746
                    },
                    {
                        x: new Date(2002,0),
                        y: 1965
                    },
                    {
                        x: new Date(2003,0),
                        y: 1180
                    },
                    {
                        x: new Date(2004,0),
                        y: 1831
                    },
                    {
                        x: new Date(2005,0),
                        y: 1928
                    },
                    {
                        x: new Date(2006,0),
                        y: 3009
                    },
                    {
                        x: new Date(2007,0),
                        y: 3487
                    },
                    {
                        x: new Date(2008,0),
                        y: 2857
                    },
                    {
                        x: new Date(2009,0),
                        y: 2052
                    },
                    {
                        x: new Date(2010,0),
                        y: 2081
                    },
                    {
                        x: new Date(2011,0),
                        y: 2667
                    },
                    {
                        x: new Date(2012,0),
                        y: 5326
                    },
                    {
                        x: new Date(2013,0),
                        y: 7199
                    },
                    {
                        x: new Date(2014,0),
                        y: 15669
                    },
                    {
                        x: new Date(2015,0),
                        y: 11987
                    },
                    {
                        x: new Date(2016,0),
                        y: 9722
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Biological",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(2000,0),
                        y: 2
                    },
                    {
                        x: new Date(2001,0),
                        y: 7
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Unknown",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1970,0),
                        y: 14
                    },
                    {
                        x: new Date(1971,0),
                        y: 8
                    },
                    {
                        x: new Date(1972,0),
                        y: 9
                    },
                    {
                        x: new Date(1973,0),
                        y: 10
                    },
                    {
                        x: new Date(1974,0),
                        y: 22
                    },
                    {
                        x: new Date(1975,0),
                        y: 8
                    },
                    {
                        x: new Date(1976,0),
                        y: 25
                    },
                    {
                        x: new Date(1977,0),
                        y: 39
                    },
                    {
                        x: new Date(1978,0),
                        y: 102
                    },
                    {
                        x: new Date(1979,0),
                        y: 422
                    },
                    {
                        x: new Date(1980,0),
                        y: 338
                    },
                    {
                        x: new Date(1981,0),
                        y: 464
                    },
                    {
                        x: new Date(1982,0),
                        y: 382
                    },
                    {
                        x: new Date(1983,0),
                        y: 540
                    },
                    {
                        x: new Date(1984,0),
                        y: 2077
                    },
                    {
                        x: new Date(1985,0),
                        y: 547
                    },
                    {
                        x: new Date(1986,0),
                        y: 1552
                    },
                    {
                        x: new Date(1987,0),
                        y: 609
                    },
                    {
                        x: new Date(1988,0),
                        y: 262
                    },
                    {
                        x: new Date(1989,0),
                        y: 108
                    },
                    {
                        x: new Date(1990,0),
                        y: 110
                    },
                    {
                        x: new Date(1991,0),
                        y: 62
                    },
                    {
                        x: new Date(1992,0),
                        y: 337
                    },
                    {
                        x: new Date(1993,0),
                        y: 337
                    },
                    {
                        x: new Date(1994,0),
                        y: 1021
                    },
                    {
                        x: new Date(1995,0),
                        y: 1157
                    },
                    {
                        x: new Date(1996,0),
                        y: 2121
                    },
                    {
                        x: new Date(1997,0),
                        y: 2483
                    },
                    {
                        x: new Date(1998,0),
                        y: 557
                    },
                    {
                        x: new Date(1999,0),
                        y: 198
                    },
                    {
                        x: new Date(2000,0),
                        y: 470
                    },
                    {
                        x: new Date(2001,0),
                        y: 461
                    },
                    {
                        x: new Date(2002,0),
                        y: 277
                    },
                    {
                        x: new Date(2003,0),
                        y: 129
                    },
                    {
                        x: new Date(2004,0),
                        y: 245
                    },
                    {
                        x: new Date(2005,0),
                        y: 230
                    },
                    {
                        x: new Date(2006,0),
                        y: 215
                    },
                    {
                        x: new Date(2007,0),
                        y: 209
                    },
                    {
                        x: new Date(2008,0),
                        y: 375
                    },
                    {
                        x: new Date(2009,0),
                        y: 929
                    },
                    {
                        x: new Date(2010,0),
                        y: 606
                    },
                    {
                        x: new Date(2011,0),
                        y: 490
                    },
                    {
                        x: new Date(2012,0),
                        y: 764
                    },
                    {
                        x: new Date(2013,0),
                        y: 632
                    },
                    {
                        x: new Date(2014,0),
                        y: 4701
                    },
                    {
                        x: new Date(2015,0),
                        y: 5527
                    },
                    {
                        x: new Date(2016,0),
                        y: 5650
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Sabotage Equipment",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1981,0),
                        y: 3
                    },
                    {
                        x: new Date(1986,0),
                        y: 25
                    },
                    {
                        x: new Date(1988,0),
                        y: 2
                    },
                    {
                        x: new Date(1995,0),
                        y: 1
                    },
                    {
                        x: new Date(2000,0),
                        y: 12
                    },
                    {
                        x: new Date(2008,0),
                        y: 1
                    },
                    {
                        x: new Date(2011,0),
                        y: 1
                    },
                    {
                        x: new Date(2013,0),
                        y: 4
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Other",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1984,0),
                        y: 2
                    },
                    {
                        x: new Date(1989,0),
                        y: 1
                    },
                    {
                        x: new Date(1991,0),
                        y: 3
                    },
                    {
                        x: new Date(1992,0),
                        y: 2
                    },
                    {
                        x: new Date(1993,0),
                        y: 2
                    },
                    {
                        x: new Date(1994,0),
                        y: 7
                    },
                    {
                        x: new Date(1995,0),
                        y: 1
                    },
                    {
                        x: new Date(2007,0),
                        y: 2
                    },
                    {
                        x: new Date(2008,0),
                        y: 2
                    },
                    {
                        x: new Date(2009,0),
                        y: 7
                    },
                    {
                        x: new Date(2011,0),
                        y: 2
                    },
                    {
                        x: new Date(2012,0),
                        y: 2
                    },
                    {
                        x: new Date(2014,0),
                        y: 7
                    },
                    {
                        x: new Date(2015,0),
                        y: 8
                    },
                    {
                        x: new Date(2016,0),
                        y: 68
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Explosives/Bombs/Dynamite",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1970,0),
                        y: 97
                    },
                    {
                        x: new Date(1971,0),
                        y: 82
                    },
                    {
                        x: new Date(1972,0),
                        y: 260
                    },
                    {
                        x: new Date(1973,0),
                        y: 80
                    },
                    {
                        x: new Date(1974,0),
                        y: 270
                    },
                    {
                        x: new Date(1975,0),
                        y: 125
                    },
                    {
                        x: new Date(1976,0),
                        y: 231
                    },
                    {
                        x: new Date(1977,0),
                        y: 36
                    },
                    {
                        x: new Date(1978,0),
                        y: 292
                    },
                    {
                        x: new Date(1979,0),
                        y: 474
                    },
                    {
                        x: new Date(1980,0),
                        y: 684
                    },
                    {
                        x: new Date(1981,0),
                        y: 864
                    },
                    {
                        x: new Date(1982,0),
                        y: 824
                    },
                    {
                        x: new Date(1983,0),
                        y: 1505
                    },
                    {
                        x: new Date(1984,0),
                        y: 853
                    },
                    {
                        x: new Date(1985,0),
                        y: 1845
                    },
                    {
                        x: new Date(1986,0),
                        y: 1106
                    },
                    {
                        x: new Date(1987,0),
                        y: 1640
                    },
                    {
                        x: new Date(1988,0),
                        y: 1527
                    },
                    {
                        x: new Date(1989,0),
                        y: 1732
                    },
                    {
                        x: new Date(1990,0),
                        y: 888
                    },
                    {
                        x: new Date(1991,0),
                        y: 1273
                    },
                    {
                        x: new Date(1992,0),
                        y: 1552
                    },
                    {
                        x: new Date(1993,0),
                        y: 1300
                    },
                    {
                        x: new Date(1994,0),
                        y: 1299
                    },
                    {
                        x: new Date(1995,0),
                        y: 1782
                    },
                    {
                        x: new Date(1996,0),
                        y: 1571
                    },
                    {
                        x: new Date(1997,0),
                        y: 1737
                    },
                    {
                        x: new Date(1998,0),
                        y: 1998
                    },
                    {
                        x: new Date(1999,0),
                        y: 1161
                    },
                    {
                        x: new Date(2000,0),
                        y: 1465
                    },
                    {
                        x: new Date(2001,0),
                        y: 1149
                    },
                    {
                        x: new Date(2002,0),
                        y: 1789
                    },
                    {
                        x: new Date(2003,0),
                        y: 1769
                    },
                    {
                        x: new Date(2004,0),
                        y: 3581
                    },
                    {
                        x: new Date(2005,0),
                        y: 3999
                    },
                    {
                        x: new Date(2006,0),
                        y: 6004
                    },
                    {
                        x: new Date(2007,0),
                        y: 8850
                    },
                    {
                        x: new Date(2008,0),
                        y: 5532
                    },
                    {
                        x: new Date(2009,0),
                        y: 5338
                    },
                    {
                        x: new Date(2010,0),
                        y: 4857
                    },
                    {
                        x: new Date(2011,0),
                        y: 4835
                    },
                    {
                        x: new Date(2012,0),
                        y: 9126
                    },
                    {
                        x: new Date(2013,0),
                        y: 14061
                    },
                    {
                        x: new Date(2014,0),
                        y: 22001
                    },
                    {
                        x: new Date(2015,0),
                        y: 19866
                    },
                    {
                        x: new Date(2016,0),
                        y: 18524
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Vehicle",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1970,0),
                        y: 1
                    },
                    {
                        x: new Date(1984,0),
                        y: 3
                    },
                    {
                        x: new Date(1986,0),
                        y: 6
                    },
                    {
                        x: new Date(1988,0),
                        y: 1
                    },
                    {
                        x: new Date(1990,0),
                        y: 1
                    },
                    {
                        x: new Date(1991,0),
                        y: 3
                    },
                    {
                        x: new Date(1994,0),
                        y: 19
                    },
                    {
                        x: new Date(1996,0),
                        y: 4
                    },
                    {
                        x: new Date(1997,0),
                        y: 1
                    },
                    {
                        x: new Date(1999,0),
                        y: 1
                    },
                    {
                        x: new Date(2001,0),
                        y: 3006
                    },
                    {
                        x: new Date(2002,0),
                        y: 1
                    },
                    {
                        x: new Date(2008,0),
                        y: 7
                    },
                    {
                        x: new Date(2009,0),
                        y: 8
                    },
                    {
                        x: new Date(2010,0),
                        y: 2
                    },
                    {
                        x: new Date(2011,0),
                        y: 8
                    },
                    {
                        x: new Date(2012,0),
                        y: 4
                    },
                    {
                        x: new Date(2013,0),
                        y: 1
                    },
                    {
                        x: new Date(2014,0),
                        y: 6
                    },
                    {
                        x: new Date(2015,0),
                        y: 20
                    },
                    {
                        x: new Date(2016,0),
                        y: 21
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Incendiary",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1970,0),
                        y: 14
                    },
                    {
                        x: new Date(1971,0),
                        y: 1
                    },
                    {
                        x: new Date(1972,0),
                        y: 3
                    },
                    {
                        x: new Date(1973,0),
                        y: 1
                    },
                    {
                        x: new Date(1976,0),
                        y: 9
                    },
                    {
                        x: new Date(1977,0),
                        y: 3
                    },
                    {
                        x: new Date(1978,0),
                        y: 436
                    },
                    {
                        x: new Date(1979,0),
                        y: 39
                    },
                    {
                        x: new Date(1980,0),
                        y: 59
                    },
                    {
                        x: new Date(1981,0),
                        y: 21
                    },
                    {
                        x: new Date(1982,0),
                        y: 15
                    },
                    {
                        x: new Date(1983,0),
                        y: 10
                    },
                    {
                        x: new Date(1984,0),
                        y: 52
                    },
                    {
                        x: new Date(1985,0),
                        y: 114
                    },
                    {
                        x: new Date(1986,0),
                        y: 40
                    },
                    {
                        x: new Date(1987,0),
                        y: 37
                    },
                    {
                        x: new Date(1988,0),
                        y: 22
                    },
                    {
                        x: new Date(1989,0),
                        y: 73
                    },
                    {
                        x: new Date(1990,0),
                        y: 65
                    },
                    {
                        x: new Date(1991,0),
                        y: 66
                    },
                    {
                        x: new Date(1992,0),
                        y: 359
                    },
                    {
                        x: new Date(1993,0),
                        y: 201
                    },
                    {
                        x: new Date(1994,0),
                        y: 56
                    },
                    {
                        x: new Date(1995,0),
                        y: 18
                    },
                    {
                        x: new Date(1996,0),
                        y: 65
                    },
                    {
                        x: new Date(1997,0),
                        y: 115
                    },
                    {
                        x: new Date(1998,0),
                        y: 26
                    },
                    {
                        x: new Date(1999,0),
                        y: 89
                    },
                    {
                        x: new Date(2000,0),
                        y: 72
                    },
                    {
                        x: new Date(2001,0),
                        y: 138
                    },
                    {
                        x: new Date(2002,0),
                        y: 569
                    },
                    {
                        x: new Date(2003,0),
                        y: 22
                    },
                    {
                        x: new Date(2004,0),
                        y: 23
                    },
                    {
                        x: new Date(2005,0),
                        y: 74
                    },
                    {
                        x: new Date(2006,0),
                        y: 34
                    },
                    {
                        x: new Date(2007,0),
                        y: 169
                    },
                    {
                        x: new Date(2008,0),
                        y: 105
                    },
                    {
                        x: new Date(2009,0),
                        y: 535
                    },
                    {
                        x: new Date(2010,0),
                        y: 48
                    },
                    {
                        x: new Date(2011,0),
                        y: 46
                    },
                    {
                        x: new Date(2012,0),
                        y: 80
                    },
                    {
                        x: new Date(2013,0),
                        y: 182
                    },
                    {
                        x: new Date(2014,0),
                        y: 637
                    },
                    {
                        x: new Date(2015,0),
                        y: 438
                    },
                    {
                        x: new Date(2016,0),
                        y: 302
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Radiological",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: []
            },
            {
                type: "stackedColumn100",
                name: "Chemical",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1973,0),
                        y: 1
                    },
                    {
                        x: new Date(1977,0),
                        y: 1
                    },
                    {
                        x: new Date(1979,0),
                        y: 1
                    },
                    {
                        x: new Date(1984,0),
                        y: 1
                    },
                    {
                        x: new Date(1987,0),
                        y: 19
                    },
                    {
                        x: new Date(1989,0),
                        y: 1
                    },
                    {
                        x: new Date(1990,0),
                        y: 1
                    },
                    {
                        x: new Date(1991,0),
                        y: 3
                    },
                    {
                        x: new Date(1992,0),
                        y: 8
                    },
                    {
                        x: new Date(1992,0),
                        y: 28
                    },
                    {
                        x: new Date(1994,0),
                        y: 48
                    },
                    {
                        x: new Date(1995,0),
                        y: 30
                    },
                    {
                        x: new Date(1998,0),
                        y: 2
                    },
                    {
                        x: new Date(1999,0),
                        y: 67
                    },
                    {
                        x: new Date(2000,0),
                        y: 200
                    },
                    {
                        x: new Date(2001,0),
                        y: 4
                    },
                    {
                        x: new Date(2002,0),
                        y: 10
                    },
                    {
                        x: new Date(2003,0),
                        y: 3
                    },
                    {
                        x: new Date(2007,0),
                        y: 30
                    },
                    {
                        x: new Date(2009,0),
                        y: 2
                    },
                    {
                        x: new Date(2012,0),
                        y: 1
                    },
                    {
                        x: new Date(2013,0),
                        y: 27
                    },
                    {
                        x: new Date(2014,0),
                        y: 58
                    },
                    {
                        x: new Date(2015,0),
                        y: 11
                    },
                    {
                        x: new Date(2016,0),
                        y: 51
                    }
                ]
            },
            {
                type: "stackedColumn100",
                name: "Melee",
                showInLegend: true,
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0",
                dataPoints: [
                    {
                        x: new Date(1971,0),
                        y: 2
                    },
                    {
                        x: new Date(1972,0),
                        y: 5
                    },
                    {
                        x: new Date(1973,0),
                        y: 8
                    },
                    {
                        x: new Date(1974,0),
                        y: 4
                    },
                    {
                        x: new Date(1975,0),
                        y: 3
                    },
                    {
                        x: new Date(1976,0),
                        y: 12
                    },
                    {
                        x: new Date(1977,0),
                        y: 3
                    },
                    {
                        x: new Date(1978,0),
                        y: 11
                    },
                    {
                        x: new Date(1979,0),
                        y: 14
                    },
                    {
                        x: new Date(1980,0),
                        y: 17
                    },
                    {
                        x: new Date(1981,0),
                        y: 4
                    },
                    {
                        x: new Date(1982,0),
                        y: 82
                    },
                    {
                        x: new Date(1983,0),
                        y: 9
                    },
                    {
                        x: new Date(1984,0),
                        y: 95
                    },
                    {
                        x: new Date(1985,0),
                        y: 17
                    },
                    {
                        x: new Date(1986,0),
                        y: 34
                    },
                    {
                        x: new Date(1987,0),
                        y: 64
                    },
                    {
                        x: new Date(1988,0),
                        y: 70
                    },
                    {
                        x: new Date(1989,0),
                        y: 209
                    },
                    {
                        x: new Date(1990,0),
                        y: 192
                    },
                    {
                        x: new Date(1991,0),
                        y: 171
                    },
                    {
                        x: new Date(1992,0),
                        y: 237
                    },
                    {
                        x: new Date(1993,0),
                        y: 237
                    },
                    {
                        x: new Date(1994,0),
                        y: 237
                    },
                    {
                        x: new Date(1995,0),
                        y: 199
                    },
                    {
                        x: new Date(1996,0),
                        y: 583
                    },
                    {
                        x: new Date(1997,0),
                        y: 3217
                    },
                    {
                        x: new Date(1998,0),
                        y: 558
                    },
                    {
                        x: new Date(1999,0),
                        y: 300
                    },
                    {
                        x: new Date(2000,0),
                        y: 200
                    },
                    {
                        x: new Date(2001,0),
                        y: 232
                    },
                    {
                        x: new Date(2002,0),
                        y: 188
                    },
                    {
                        x: new Date(2003,0),
                        y: 175
                    },
                    {
                        x: new Date(2004,0),
                        y: 38
                    },
                    {
                        x: new Date(2005,0),
                        y: 81
                    },
                    {
                        x: new Date(2006,0),
                        y: 100
                    },
                    {
                        x: new Date(2007,0),
                        y: 111
                    },
                    {
                        x: new Date(2008,0),
                        y: 256
                    },
                    {
                        x: new Date(2009,0),
                        y: 400
                    },
                    {
                        x: new Date(2010,0),
                        y: 133
                    },
                    {
                        x: new Date(2011,0),
                        y: 179
                    },
                    {
                        x: new Date(2012,0),
                        y: 133
                    },
                    {
                        x: new Date(2013,0),
                        y: 128
                    },
                    {
                        x: new Date(2014,0),
                        y: 487
                    },
                    {
                        x: new Date(2015,0),
                        y: 607
                    },
                    {
                        x: new Date(2016,0),
                        y: 338
                    }
                ]
            }
        ]
    });
    WeaponsChart.render();

    var CivilPie1Chart = new CanvasJS.Chart("CivilPie1", {
        backgroundColor: "#fafafa",
        exportEnabled: false,
        animationEnabled: true,
        title:{
            text: "1970-1994"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                {
                    "y": 8898,
                    "name": "Business"
                },
                {
                    "y": 1847,
                    "name": "Gouvernement"
                },
                {
                    "y": 7535,
                    "name": "Militaire"
                },
                {
                    "y": 18809,
                    "name": "Autres"
                },
                {
                    "y": 6166,
                    "name": "Police"
                },
                {
                    "y": 8938,
                    "name": "Civil", exploded: true
                }
            ]
        }]
    });
    var CivilPie2Chart = new CanvasJS.Chart("CivilPie2", {
        backgroundColor: "#fafafa",
        exportEnabled: false,
        animationEnabled: true,
        title:{
            text: "1995-2016"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                {
                    "y": 9505,
                    "name": "Business"
                },
                {
                    "y": 1408,
                    "name": "Gouvernement"
                },
                {
                    "y": 15848,
                    "name": "Militaire"
                },
                {
                    "y": 36758,
                    "name": "Autres"
                },
                {
                    "y": 16046,
                    "name": "Police"
                },
                {
                    "y": 28910,
                    "name": "Civil", exploded: true
                }
            ]
        }]
    });
    CivilPie1Chart.render();
    CivilPie2Chart.render();

    var NatVsIslamChart = new CanvasJS.Chart("NatVsIslam", {
        animationEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
        },
        axisY:{
            interval: 10,
            suffix: "%"
        },
        toolTip:{
            shared: true
        },
        data:[
            {
                "type": "stackedBar100",
                "toolTipContent": "{label}<br><b>{name}:</b> {y} (#percent%)",
                "showInLegend": true,
                "name": "Militaire",
                "dataPoints": [
                    {
                        "y": 21.0,
                        "label": "Nationalistes"
                    },
                    {
                        "y": 22.0,
                        "label": "Islamistes"
                    }
                ]
            },
            {
                "type": "stackedBar100",
                "toolTipContent": "{label}<br><b>{name}:</b> {y} (#percent%)",
                "showInLegend": true,
                "name": "Police",
                "dataPoints": [
                    {
                        "y": 16.0,
                        "label": "Nationalistes"
                    },
                    {
                        "y": 19.0,
                        "label": "Islamistes"
                    }
                ]
            },
            {
                "type": "stackedBar100",
                "toolTipContent": "{label}<br><b>{name}:</b> {y} (#percent%)",
                "showInLegend": true,
                "name": "Civil",
                "dataPoints": [
                    {
                        "y": 17.0,
                        "label": "Nationalistes"
                    },
                    {
                        "y": 27.0,
                        "label": "Islamistes"
                    }
                ]
            },

            {
                "type": "stackedBar100",
                "toolTipContent": "{label}<br><b>{name}:</b> {y} (#percent%)",
                "showInLegend": true,
                "name": "Business",
                "dataPoints": [
                    {
                        "y": 14.0,
                        "label": "Nationalistes"
                    },
                    {
                        "y": 5.0,
                        "label": "Islamistes"
                    }
                ]
            },
            {
                "type": "stackedBar100",
                "toolTipContent": "{label}<br><b>{name}:</b> {y} (#percent%)",
                "showInLegend": true,
                "name": "Gouvernement",
                "dataPoints": [
                    {
                        "y": 11.0,
                        "label": "Nationalistes"
                    },
                    {
                        "y": 10.0,
                        "label": "Islamistes"
                    }
                ]
            },
            {
                "type": "stackedBar100",
                "toolTipContent": "{label}<br><b>{name}:</b> {y} (#percent%)",
                "showInLegend": true,
                "name": "Autres",
                "dataPoints": [
                    {
                        "y": 19.0,
                        "label": "Nationalistes"
                    },
                    {
                        "y": 15.0,
                        "label": "Islamistes"
                    }
                ]
            }
        ]
    });
    NatVsIslamChart.render();
}

function explodePie (e) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded;
    e.chart1.render();
    e.chart2.render();
}
