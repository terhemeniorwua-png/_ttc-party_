"use client";
import { PlusCircle, Trash2 } from "lucide-react";

export default function CoursePublisher({ courses, newCourse, setNewCourse, onCreate, onDelete }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
        <h2 className="font-heading font-bold text-lg text-navy">Publish New Course</h2>
        <form onSubmit={onCreate} className="space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Course Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Budget Analysis 101"
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">URL Slug</label>
            <input
              type="text"
              required
              placeholder="e.g. budget-analysis-101"
              value={newCourse.slug}
              onChange={(e) => setNewCourse({ ...newCourse, slug: e.target.value })}
              className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Category</label>
            <select
              value={newCourse.category}
              onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            >
              <option>Civic Governance</option>
              <option>Public Finance</option>
              <option>Youth Leadership</option>
              <option>Policy & Advocacy</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Overview Description</label>
            <textarea
              rows="3"
              required
              placeholder="Course objectives..."
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-green-transform text-white font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-4 h-4" /> Publish Module
          </button>
        </form>
      </div>

      <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
        <h2 className="font-heading font-bold text-lg text-navy">Active Course Modules</h2>
        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id} className="p-4 border border-gray-border rounded-xl flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-blue-trust uppercase">{course.category}</span>
                <h3 className="font-heading font-bold text-navy text-sm">{course.title}</h3>
                <p className="text-xs text-gray-mutedText mt-0.5">{course.description}</p>
              </div>
              <button
                onClick={() => onDelete(course.id, course.title)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}