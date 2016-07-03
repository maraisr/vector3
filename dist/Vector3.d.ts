export declare module Vector {
    class Three {
        private points;
        constructor(points?: Array<number>);
        x: number;
        y: number;
        z: number;
        magnitude: number;
        normal: number;
        array: Array<number>;
        toString(): string;
        add(a: Three): Three;
        subtract(a: Three): Three;
        multiplyScalar(s: number): Three;
        divideScalar(s: number): Three;
        eq(b: Three): boolean;
        neq(b: Three): boolean;
        multiply(b: Three): Three;
        divide(b: Three): Three;
        angle(to: Three): number;
        dot(b: Three): number;
        cross(b: Three): Three;
        distance(b: Three): number;
        negate(): Three;
        abs(): Three;
        reflect(): Three;
        lerp(b: Three, a: number): Three;
        static max(a: Three, b: Three): Three;
        static min(a: Three, b: Three): Three;
    }
}
