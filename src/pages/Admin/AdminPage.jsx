import MobileLayout from "../../components/layout/MobileLayout";

import AdminModal from "./components/AdminModal";
import AdminReportDetail from "./components/AdminReportDetail";
import AdminReportList from "./components/AdminReportList";

import useAdminReports from "./hooks/useAdminReports";

import * as S from "./AdminPage.styled";

export default function AdminPage() {
    const {
        filteredReports,

        selectedReport,

        filter,
        setFilter,

        answer,
        setAnswer,

        isEditingAnswer,

        isLoading,
        isDetailLoading,
        error,

        modal,

        getCount,

        handleReportClick,
        handleBack,

        handleEditStart,
        handleEditCancel,

        handleAnswerSubmit,
        handleAnswerDelete,

        closeModal,
        handleModalConfirm,
    } = useAdminReports();

    if (isLoading) {
        return (
            <MobileLayout>
                <S.Container>
                    <S.EmptyList>
                        신고 목록을 불러오는 중이에요.
                    </S.EmptyList>
                </S.Container>
            </MobileLayout>
        );
    }

    if (error) {
        return (
            <MobileLayout>
                <S.Container>
                    <S.EmptyList>
                        {error}
                    </S.EmptyList>
                </S.Container>
            </MobileLayout>
        );
    }

    return (
        <MobileLayout>
            <S.Container>
                {selectedReport ? (
                    <AdminReportDetail
                        report={
                            selectedReport
                        }
                        answer={
                            answer
                        }
                        setAnswer={
                            setAnswer
                        }
                        isEditingAnswer={
                            isEditingAnswer
                        }
                        isLoading={
                            isDetailLoading
                        }
                        onBack={
                            handleBack
                        }
                        onEditStart={
                            handleEditStart
                        }
                        onEditCancel={
                            handleEditCancel
                        }
                        onSubmit={
                            handleAnswerSubmit
                        }
                        onDelete={
                            handleAnswerDelete
                        }
                    />
                ) : (
                    <AdminReportList
                        reports={
                            filteredReports
                        }
                        filter={
                            filter
                        }
                        setFilter={
                            setFilter
                        }
                        getCount={
                            getCount
                        }
                        onReportClick={
                            handleReportClick
                        }
                    />
                )}
            </S.Container>

            <AdminModal
                modal={modal}
                onClose={
                    closeModal
                }
                onConfirm={
                    handleModalConfirm
                }
            />
        </MobileLayout>
    );
}