"use client";

const isBrowser = typeof window !== "undefined";

export const getStorageItem = (key) => {
if (!isBrowser) {
return null;
}

try {
const item = localStorage.getItem(key);


if (!item) {
  return null;
}

return JSON.parse(item);


} catch (error) {
console.error(`Error reading ${key} from localStorage:`, error);
return null;
}
};

export const setStorageItem = (key, value) => {
if (!isBrowser) {
return false;
}

try {
localStorage.setItem(key, JSON.stringify(value));
return true;
} catch (error) {
console.error(`Error saving ${key} to localStorage:`, error);
return false;
}
};

export const saveSubscriber = (subscriber) => {
const subscribers = getStorageItem("ttc_subscribers") || [];

const newSubscriber = {
id: Date.now(),
...subscriber,
subscribedAt:
subscriber.subscribedAt || new Date().toISOString(),
};

const updatedSubscribers = [...subscribers, newSubscriber];

setStorageItem("ttc_subscribers", updatedSubscribers);

return newSubscriber;
};

export const saveVolunteer = (volunteer) => {
const volunteers = getStorageItem("ttc_volunteers") || [];

const newVolunteer = {
id: Date.now(),
...volunteer,
registeredAt:
volunteer.registeredAt || new Date().toISOString(),
};

const updatedVolunteers = [...volunteers, newVolunteer];

setStorageItem("ttc_volunteers", updatedVolunteers);

return newVolunteer;
};

export const getSubscribers = () => {
return getStorageItem("ttc_subscribers") || [];
};

export const getVolunteers = () => {
return getStorageItem("ttc_volunteers") || [];
};

export const deleteSubscriber = (id) => {
const subscribers = getSubscribers();

const updatedSubscribers = subscribers.filter(
(subscriber) => subscriber.id !== id
);

setStorageItem("ttc_subscribers", updatedSubscribers);

return updatedSubscribers;
};

export const deleteVolunteer = (id) => {
const volunteers = getVolunteers();

const updatedVolunteers = volunteers.filter(
(volunteer) => volunteer.id !== id
);

setStorageItem("ttc_volunteers", updatedVolunteers);

return updatedVolunteers;
};


export const getCompletedCourses = () => {
  if (!isBrowser) return [];

  try {
    const stored = localStorage.getItem("ttc_completed_courses");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to get completed courses:", error);
    return [];
  }
};

export const toggleCourseCompletion = (courseId) => {
  if (!isBrowser) return [];

  try {
    const completedCourses = getCompletedCourses();

    const isCompleted = completedCourses.includes(courseId);

    const updatedCourses = isCompleted
      ? completedCourses.filter((id) => id !== courseId)
      : [...completedCourses, courseId];

    localStorage.setItem(
      "ttc_completed_courses",
      JSON.stringify(updatedCourses)
    );

    return updatedCourses;
  } catch (error) {
    console.error("Failed to toggle course completion:", error);
    return [];
  }
};




export const addItem = (key, item) => {
  if (!isBrowser) return [];

  try {
    const existingItems = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    const updatedItems = [...existingItems, item];

    localStorage.setItem(key, JSON.stringify(updatedItems));

    return updatedItems;
  } catch (error) {
    console.error(`Failed to add item to ${key}:`, error);
    return [];
  }
};