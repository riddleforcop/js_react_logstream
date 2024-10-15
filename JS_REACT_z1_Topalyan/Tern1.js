let c = Math.floor(Math.random() * 100);
        let a = c;
        let res = 0

        //(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

        // условие с условным (тернарным) оператором перевести в if...else И switch()
        // результат выводить в консоль, с пощью console.log()

        // (a > 10 ? a : a * 2)
        if (a > 10) {
            res = a;
        } else {
            res = a * 2;
        }

        // res > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2))
        if (res > 5) {
            res = (2 * a) + 1;
        } else {
            if (a < 3) {
                res = 1;
            } else {
                res = 2 * (a - 2);
            }
        }

        // res > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
        if (res > 4) {
            res = 5;
        } else {
            if (a % 2 == 0) {
                res = 6;
            } else {
                res = 7;
            }
        }

        console.log(res);

        res = 0;
        a = c;

        // a > 10 ? a : a * 2
        switch (true) {
            case (a > 10):
                res = a;
                break;
            default:
                res = a * 2;
                break;
        }

        // (res > 5) ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2))
        switch (true) {
            case (res > 5):
                res = (2 * a) + 1;
                break;
            default:
                switch (true) {
                    case (a < 3):
                        res = 1;
                        break;
                    default:
                        res = 2 * (a - 2);
                        break;
                }
                break;
        }

        // (res > 4) ? 5 : (a % 2 == 0 ? 6 : 7)
        switch (true) {
            case (res > 4):
                res = 5;
                break;
            default:
                switch (a % 2) {
                    case 0:
                        res = 6;
                        break;
                    default:
                        res = 7;
                        break;
                }
                break;
        }

        console.log(res);