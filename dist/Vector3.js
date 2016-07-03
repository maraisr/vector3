(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Vector;
    (function (Vector) {
        var Three = (function () {
            function Three(points) {
                if (points === void 0) { points = [0, 0, 0]; }
                this.points = points;
            }
            Object.defineProperty(Three.prototype, "x", {
                get: function () {
                    return this.points[0];
                },
                set: function (v) {
                    this.points[0] = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Three.prototype, "y", {
                get: function () {
                    return this.points[1];
                },
                set: function (v) {
                    this.points[1] = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Three.prototype, "z", {
                get: function () {
                    return this.points[2];
                },
                set: function (v) {
                    this.points[2] = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Three.prototype, "magnitude", {
                get: function () {
                    return this.x * this.x + this.y * this.y + this.z * this.z;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Three.prototype, "normal", {
                get: function () {
                    return Math.sqrt(this.magnitude);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Three.prototype, "array", {
                get: function () {
                    return this.points;
                },
                enumerable: true,
                configurable: true
            });
            Three.prototype.toString = function () {
                return 'vec3:(' + this.points.join(', ') + ')';
            };
            Three.prototype.add = function (a) {
                return new Three([
                    this.x + a.x,
                    this.y + a.y,
                    this.z + a.z
                ]);
            };
            Three.prototype.subtract = function (a) {
                return new Three([
                    this.x - a.x,
                    this.y - a.y,
                    this.z - a.z
                ]);
            };
            Three.prototype.multiplyScalar = function (s) {
                return new Three([
                    this.x * s,
                    this.y * s,
                    this.z * s
                ]);
            };
            Three.prototype.divideScalar = function (s) {
                return new Three([
                    ((this.x === 0) ? 0 : this.x / s),
                    ((this.y === 0) ? 0 : this.y / s),
                    ((this.z === 0) ? 0 : this.z / s)
                ]);
            };
            Three.prototype.eq = function (b) {
                return this.x === b.x && this.y === b.y && this.z === b.z;
            };
            Three.prototype.neq = function (b) {
                return !this.eq(b);
            };
            Three.prototype.multiply = function (b) {
                return new Three([
                    this.x * b.x,
                    this.y * b.y,
                    this.z * b.z
                ]);
            };
            Three.prototype.divide = function (b) {
                return new Three([
                    ((this.x === 0 || b.x === 0) ? 0 : this.x / b.x),
                    ((this.y === 0 || b.y === 0) ? 0 : this.y / b.y),
                    ((this.z === 0 || b.z === 0) ? 0 : this.z / b.z)
                ]);
            };
            Three.prototype.angle = function (to) {
                return Math.acos(this.dot(to) / (this.normal * to.normal));
            };
            Three.prototype.dot = function (b) {
                return this.x * b.x + this.y * b.y + this.z * b.z;
            };
            Three.prototype.cross = function (b) {
                return new Three([
                    (this.y * b.z) - (this.z * b.y),
                    (this.z * b.x) - (this.x * b.z),
                    (this.x * b.y) - (this.y * b.x),
                ]);
            };
            Three.prototype.distance = function (b) {
                var dx = this.x - b.x, dy = this.y - b.y, dz = this.z - b.z;
                return Math.sqrt(dx * dx + dy * dy + dz * dz);
            };
            Three.prototype.negate = function () {
                return new Three([
                    (-1 * Math.abs(this.x)),
                    (-1 * Math.abs(this.y)),
                    (-1 * Math.abs(this.z))
                ]);
            };
            Three.prototype.abs = function () {
                return new Three([
                    (Math.abs(this.x)),
                    (Math.abs(this.y)),
                    (Math.abs(this.z))
                ]);
            };
            Three.prototype.reflect = function () {
                return new Three([
                    (-1 * this.x),
                    (-1 * this.y),
                    (-1 * this.z)
                ]);
            };
            Three.prototype.lerp = function (b, a) {
                return this.add(b.subtract(this).multiply(new Three([a, a, a])));
            };
            Three.max = function (a, b) {
                return new Three([
                    ((a.x > b.x) ? a.x : b.x),
                    ((a.y > b.y) ? a.y : b.y),
                    ((a.z > b.z) ? a.z : b.z)
                ]);
            };
            Three.min = function (a, b) {
                return new Three([
                    ((a.x < b.x) ? a.x : b.x),
                    ((a.y < b.y) ? a.y : b.y),
                    ((a.z < b.z) ? a.z : b.z)
                ]);
            };
            return Three;
        }());
        Vector.Three = Three;
    })(Vector = exports.Vector || (exports.Vector = {}));
});
