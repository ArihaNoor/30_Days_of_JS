
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
function expect(val) {
    return {
      toBe: function(expected) {
        if (val !== expected) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function(expected) {
        if (val === expected) {
          throw new Error("Equal");
        }
        return true;
      }
    };
  }
  
  // Example usage:
  try {
    expect(5).toBe(5); // This will not throw an error
    expect(10).notToBe(5); // This will not throw an error
    expect("hello").toBe("world"); // This will throw an error: "Not Equal"
    expect(true).notToBe(true); // This will throw an error: "Equal"
  } catch (error) {
    console.error(error.message);
  }
  
  