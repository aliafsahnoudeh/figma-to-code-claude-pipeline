import {
  PRIORITY_LABEL,
  STATUS_ORDER,
  formatDueDate,
  initials,
} from "./format";

describe("format helpers", () => {
  it("returns correctly ordered statuses", () => {
    expect(STATUS_ORDER).toEqual(["todo", "in_progress", "in_review", "done"]);
  });

  it("labels priorities", () => {
    expect(PRIORITY_LABEL.urgent).toBe("Urgent");
  });

  it("renders initials from a full name", () => {
    expect(initials("Cyrus Achaemenid")).toBe("CA");
    expect(initials("Madonna")).toBe("M");
  });

  it("formats null due dates as a placeholder", () => {
    expect(formatDueDate(null)).toBe("No due date");
  });
});
